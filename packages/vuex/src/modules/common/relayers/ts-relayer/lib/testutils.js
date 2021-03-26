"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferTokens = exports.randomAddress = exports.generateMnemonic = exports.fundAccount = exports.setup = exports.signingClient = exports.queryClient = exports.ics20 = exports.wasmd = exports.simapp = exports.TestLogger = void 0;
// This file outputs some basic test functionality, and includes tests that they work
const crypto_1 = require("@cosmjs/crypto");
const encoding_1 = require("@cosmjs/encoding");
const launchpad_1 = require("@cosmjs/launchpad");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const sinon_1 = __importDefault(require("sinon"));
const channel_1 = require("../codec/ibc/core/channel/v1/channel");
const ibcclient_1 = require("./ibcclient");
class TestLogger {
    constructor(shouldLog = false) {
        const createSpy = (logFn) => sinon_1.default.spy(((message, meta) => {
            logFn(message, meta ? JSON.stringify(meta) : undefined);
            return this;
        }).bind(this));
        const createFake = (() => sinon_1.default.fake.returns(this)).bind(this);
        this.error = shouldLog ? createSpy(console.error) : createFake();
        this.warn = shouldLog ? createSpy(console.warn) : createFake();
        this.info = shouldLog ? createSpy(console.info) : createFake();
        this.verbose = shouldLog ? createSpy(console.log) : createFake();
        this.debug = createFake();
    }
}
exports.TestLogger = TestLogger;
exports.simapp = {
    tendermintUrlWs: 'ws://localhost:26658',
    tendermintUrlHttp: 'http://localhost:26658',
    chainId: 'simd-testing',
    prefix: 'cosmos',
    denomStaking: 'umoo',
    denomFee: 'umuon',
    minFee: '0.025umuon',
    blockTime: 250,
    faucet: {
        mnemonic: 'economy stock theory fatal elder harbor betray wasp final emotion task crumble siren bottom lizard educate guess current outdoor pair theory focus wife stone',
        pubkey0: {
            type: 'tendermint/PubKeySecp256k1',
            value: 'A08EGB7ro1ORuFhjOnZcSgwYlpe0DSFjVNUIkNNQxwKQ',
        },
        address0: 'cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6',
    },
    /** Unused account */
    unused: {
        pubkey: {
            type: 'tendermint/PubKeySecp256k1',
            value: 'ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ',
        },
        address: 'cosmos1cjsxept9rkggzxztslae9ndgpdyt2408lk850u',
        accountNumber: 16,
        sequence: 0,
        balanceStaking: '10000000',
        balanceFee: '1000000000',
    },
};
exports.wasmd = {
    tendermintUrlWs: 'ws://localhost:26659',
    tendermintUrlHttp: 'http://localhost:26659',
    chainId: 'testing',
    prefix: 'wasm',
    denomStaking: 'ustake',
    denomFee: 'ucosm',
    minFee: '0.025ucosm',
    blockTime: 250,
    faucet: {
        mnemonic: 'enlist hip relief stomach skate base shallow young switch frequent cry park',
        pubkey0: {
            type: 'tendermint/PubKeySecp256k1',
            value: 'A9cXhWb8ZpqCzkA8dQCPV29KdeRLV3rUYxrkHudLbQtS',
        },
        address0: 'wasm14qemq0vw6y3gc3u3e0aty2e764u4gs5lndxgyk',
    },
    unused: {
        pubkey: {
            type: 'tendermint/PubKeySecp256k1',
            value: 'ArkCaFUJ/IH+vKBmNRCdUVl3mCAhbopk9jjW4Ko4OfRQ',
        },
        address: 'wasm1cjsxept9rkggzxztslae9ndgpdyt240842kpxh',
        accountNumber: 16,
        sequence: 0,
        balanceStaking: '10000000',
        balanceFee: '1000000000',
    },
};
// constants for this transport protocol
// we assume src = simapp, dest = wasmd as returned by setup()
exports.ics20 = {
    // we set a new port in genesis for simapp
    srcPortId: 'custom',
    destPortId: 'transfer',
    version: 'ics20-1',
    ordering: channel_1.Order.ORDER_UNORDERED,
};
async function queryClient(opts) {
    return stargate_1.StargateClient.connect(opts.tendermintUrlHttp);
}
exports.queryClient = queryClient;
async function signingClient(opts, mnemonic, logger) {
    const signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, undefined, opts.prefix);
    const { address } = (await signer.getAccounts())[0];
    const options = {
        prefix: opts.prefix,
        gasPrice: launchpad_1.GasPrice.fromString(opts.minFee),
        logger,
    };
    const client = await ibcclient_1.IbcClient.connectWithSigner(opts.tendermintUrlHttp, signer, address, options);
    return client;
}
exports.signingClient = signingClient;
async function setup(logger) {
    // create apps and fund an account
    const mnemonic = generateMnemonic();
    const src = await signingClient(exports.simapp, mnemonic, logger);
    const dest = await signingClient(exports.wasmd, mnemonic, logger);
    await fundAccount(exports.wasmd, dest.senderAddress, '4000000');
    await fundAccount(exports.simapp, src.senderAddress, '4000000');
    return [src, dest];
}
exports.setup = setup;
async function fundAccount(opts, rcpt, amount) {
    const client = await signingClient(opts, opts.faucet.mnemonic);
    const feeTokens = {
        amount,
        denom: launchpad_1.GasPrice.fromString(opts.minFee).denom,
    };
    await client.sendTokens(rcpt, [feeTokens]);
}
exports.fundAccount = fundAccount;
function generateMnemonic() {
    return crypto_1.Bip39.encode(crypto_1.Random.getBytes(16)).toString();
}
exports.generateMnemonic = generateMnemonic;
function randomAddress(prefix) {
    const random = crypto_1.Random.getBytes(20);
    return encoding_1.Bech32.encode(prefix, random);
}
exports.randomAddress = randomAddress;
// Makes multiple transfers, one per item in amounts.
// Return a list of the block heights the packets were committed in.
async function transferTokens(src, srcDenom, dest, destPrefix, channel, amounts, timeout) {
    const txHeights = [];
    const destRcpt = randomAddress(destPrefix);
    const destHeight = await dest.timeoutHeight(timeout !== null && timeout !== void 0 ? timeout : 500); // valid for 500 blocks or timeout if specified
    for (const amount of amounts) {
        const token = {
            amount: amount.toString(),
            denom: srcDenom,
        };
        const { height } = await src.transferTokens(channel.portId, channel.channelId, token, destRcpt, destHeight);
        txHeights.push(height);
    }
    return txHeights;
}
exports.transferTokens = transferTokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90ZXN0dXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUZBQXFGO0FBQ3JGLDJDQUErQztBQUMvQywrQ0FBMEM7QUFDMUMsaURBQTZDO0FBQzdDLHlEQUFnRTtBQUNoRSwrQ0FBa0Q7QUFDbEQsa0RBQXdDO0FBRXhDLGtFQUE2RDtBQUU3RCwyQ0FBdUU7QUFHdkUsTUFBYSxVQUFVO0lBT3JCLFlBQVksU0FBUyxHQUFHLEtBQUs7UUFDM0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFrRCxFQUFFLEVBQUUsQ0FDdkUsZUFBSyxDQUFDLEdBQUcsQ0FDUCxDQUFDLENBQUMsT0FBZSxFQUFFLElBQThCLEVBQVUsRUFBRTtZQUMzRCxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2QsQ0FBQztRQUNKLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvRCxJQUFJ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