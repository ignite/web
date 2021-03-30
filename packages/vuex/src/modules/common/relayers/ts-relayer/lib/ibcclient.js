"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareChannelHandshake = exports.prepareConnectionHandshake = exports.buildCreateClientArgs = exports.IbcClient = void 0;
const encoding_1 = require("@cosmjs/encoding");
const launchpad_1 = require("@cosmjs/launchpad");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const utils_1 = require("@cosmjs/utils");
const long_1 = __importDefault(require("long"));
const tx_1 = require("../codec/ibc/applications/transfer/v1/tx");
const channel_1 = require("../codec/ibc/core/channel/v1/channel");
const tx_2 = require("../codec/ibc/core/channel/v1/tx");
const client_1 = require("../codec/ibc/core/client/v1/client");
const tx_3 = require("../codec/ibc/core/client/v1/tx");
const tx_4 = require("../codec/ibc/core/connection/v1/tx");
const tendermint_1 = require("../codec/ibc/lightclients/tendermint/v1/tendermint");
const types_1 = require("../codec/tendermint/types/types");
const validator_1 = require("../codec/tendermint/types/validator");
const logger_1 = require("./logger");
const ibc_1 = require("./queries/ibc");
const utils_2 = require("./utils");
/**** These are needed to bootstrap the endpoints */
/* Some of them are hardcoded various places, which should we make configurable? */
// const DefaultTrustLevel = '1/3';
// const MaxClockDrift = 10; // 10 seconds
// const upgradePath = ['upgrade', 'upgradedIBCState'];
// const allowUpgradeAfterExpiry = false;
// const allowUpgradeAfterMisbehavior = false;
// these are from the cosmos sdk implementation
const defaultMerklePrefix = {
    keyPrefix: encoding_1.toAscii('ibc'),
};
const defaultConnectionVersion = {
    identifier: '1',
    features: ['ORDER_ORDERED', 'ORDER_UNORDERED'],
};
// this is a sane default, but we can revisit it
const defaultDelayPeriod = new long_1.default(0);
function ibcRegistry() {
    return new proto_signing_1.Registry([
        ...stargate_1.defaultRegistryTypes,
        ['/ibc.core.client.v1.MsgCreateClient', tx_3.MsgCreateClient],
        ['/ibc.core.client.v1.MsgUpdateClient', tx_3.MsgUpdateClient],
        ['/ibc.core.connection.v1.MsgConnectionOpenInit', tx_4.MsgConnectionOpenInit],
        ['/ibc.core.connection.v1.MsgConnectionOpenTry', tx_4.MsgConnectionOpenTry],
        ['/ibc.core.connection.v1.MsgConnectionOpenAck', tx_4.MsgConnectionOpenAck],
        [
            '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
            tx_4.MsgConnectionOpenConfirm,
        ],
        ['/ibc.core.channel.v1.MsgChannelOpenInit', tx_2.MsgChannelOpenInit],
        ['/ibc.core.channel.v1.MsgChannelOpenTry', tx_2.MsgChannelOpenTry],
        ['/ibc.core.channel.v1.MsgChannelOpenAck', tx_2.MsgChannelOpenAck],
        ['/ibc.core.channel.v1.MsgChannelOpenConfirm', tx_2.MsgChannelOpenConfirm],
        ['/ibc.core.channel.v1.MsgRecvPacket', tx_2.MsgRecvPacket],
        ['/ibc.core.channel.v1.MsgAcknowledgement', tx_2.MsgAcknowledgement],
        ['/ibc.core.channel.v1.MsgTimeout', tx_2.MsgTimeout],
        ['/ibc.applications.transfer.v1.MsgTransfer', tx_1.MsgTransfer],
    ]);
}
const defaultGasPrice = launchpad_1.GasPrice.fromString('0.025ucosm');
const defaultGasLimits = {
    initClient: 150000,
    updateClient: 600000,
    initConnection: 150000,
    connectionHandshake: 300000,
    initChannel: 150000,
    channelHandshake: 300000,
    receivePacket: 300000,
    ackPacket: 300000,
    timeoutPacket: 300000,
    transfer: 180000,
};
class IbcClient {
    constructor(signingClient, tmClient, senderAddress, chainId, options) {
        this.sign = signingClient;
        this.tm = tmClient;
        this.query = stargate_1.QueryClient.withExtensions(tmClient, stargate_1.setupAuthExtension, stargate_1.setupBankExtension, ibc_1.setupIbcExtension);
        this.senderAddress = senderAddress;
        this.chainId = chainId;
        this.revisionNumber = utils_2.parseRevisionNumber(chainId);
        const { gasPrice = defaultGasPrice, gasLimits = {}, logger } = options;
        this.fees = launchpad_1.buildFeeTable(gasPrice, defaultGasLimits, gasLimits);
        this.logger = logger !== null && logger !== void 0 ? logger : new logger_1.NoopLogger();
    }
    static async connectWithSigner(endpoint, signer, senderAddress, options = {}) {
        // override any registry setup, use the other options
        const mergedOptions = Object.assign(Object.assign({}, options), { registry: ibcRegistry() });
        const signingClient = await stargate_1.SigningStargateClient.connectWithSigner(endpoint, signer, mergedOptions);
        const tmClient = await tendermint_rpc_1.Tendermint34Client.connect(endpoint);
        const chainId = await signingClient.getChainId();
        return new IbcClient(signingClient, tmClient, senderAddress, chainId, options);
    }
    revisionHeight(height) {
        return client_1.Height.fromPartial({
            revisionHeight: new long_1.default(height),
            revisionNumber: this.revisionNumber,
        });
    }
    ensureRevisionHeight(height) {
        if (typeof height === 'number') {
            return client_1.Height.fromPartial({
                revisionHeight: long_1.default.fromNumber(height),
                revisionNumber: this.revisionNumber,
            });
        }
        if (height.revisionNumber.toNumber() !== this.revisionNumber.toNumber()) {
            throw new Error(`Using incorrect revisionNumber ${height.revisionNumber} on chain with ${this.revisionNumber}`);
        }
        return height;
    }
    async timeoutHeight(blocksInFuture) {
        const header = await this.latestHeader();
        return this.revisionHeight(header.height + blocksInFuture);
    }
    getChainId() {
        this.logger.verbose('Get chain ID');
        return this.sign.getChainId();
    }
    async header(height) {
        this.logger.verbose(`Get header for height ${height}`);
        // TODO: expose header method on tmClient and use that
        const resp = await this.tm.blockchain(height, height);
        return resp.blockMetas[0].header;
    }
    async latestHeader() {
        // TODO: expose header method on tmClient and use that
        const block = await this.tm.block();
        return block.block.header;
    }
    async currentTime() {
        // const status = await this.tm.status();
        // return status.syncInfo.latestBlockTime;
        return (await this.latestHeader()).time;
    }
    async currentHeight() {
        const status = await this.tm.status();
        return status.syncInfo.latestBlockHeight;
    }
    async currentRevision() {
        const block = await this.currentHeight();
        return this.revisionHeight(block);
    }
    async waitOneBlock() {
        // ensure this works
        const start = await this.currentHeight();
        let end;
        do {
            await utils_1.sleep(500);
            end = await this.currentHeight();
        } while (end === start);
        // TODO: this works but only for websocket connections, is there some code that falls back to polling in cosmjs?
        // await firstEvent(this.tm.subscribeNewBlockHeader());
    }
    // we may have to wait a bit before a tx returns and making queries on the event log
    async waitForIndexer() {
        await utils_1.sleep(50);
    }
    getCommit(height) {
        this.logger.verbose(height === undefined
            ? 'Get latest commit'
            : `Get commit for height ${height}`);
        return this.tm.commit(height);
    }
    async getSignedHeader(height) {
        const { header: rpcHeader, commit: rpcCommit } = await this.getCommit(height);
        const header = types_1.Header.fromPartial(Object.assign(Object.assign({}, rpcHeader), { version: {
                block: new long_1.default(rpcHeader.version.block),
            }, height: new long_1.default(rpcHeader.height), time: utils_2.timestampFromDateNanos(rpcHeader.time), lastBlockId: {
                hash: rpcHeader.lastBlockId.hash,
                partSetHeader: rpcHeader.lastBlockId.parts,
            } }));
        const signatures = rpcCommit.signatures.map((sig) => (Object.assign(Object.assign({}, sig), { timestamp: sig.timestamp && utils_2.timestampFromDateNanos(sig.timestamp), blockIdFlag: types_1.blockIDFlagFromJSON(sig.blockIdFlag) })));
        const commit = types_1.Commit.fromPartial({
            height: new long_1.default(rpcCommit.height),
            round: rpcCommit.round,
            blockId: {
                hash: rpcCommit.blockId.hash,
                partSetHeader: rpcCommit.blockId.parts,
            },
            signatures,
        });
        // For the vote sign bytes, it checks (from the commit):
        //   Height, Round, BlockId, TimeStamp, ChainID
        return { header, commit };
    }
    async getValidatorSet(height) {
        this.logger.verbose(`Get validator set for height ${height}`);
        // we need to query the header to find out who the proposer was, and pull them out
        const { proposerAddress } = await this.header(height);
        const validators = await this.tm.validatorsAll(height);
        const mappedValidators = validators.validators.map((val) => ({
            address: val.address,
            pubKey: utils_2.mapRpcPubKeyToProto(val.pubkey),
            votingPower: new long_1.default(val.votingPower),
            proposerPriority: val.proposerPriority
                ? new long_1.default(val.proposerPriority)
                : undefined,
        }));
        const totalPower = validators.validators.reduce((x, v) => x + v.votingPower, 0);
        const proposer = mappedValidators.find((val) => utils_1.arrayContentEquals(val.address, proposerAddress));
        return validator_1.ValidatorSet.fromPartial({
            validators: mappedValidators,
            totalVotingPower: new long_1.default(totalPower),
            proposer,
        });
    }
    // this builds a header to update a remote client.
    // you must pass the last known height on the remote side so we can properly generate it.
    // it will update to the latest state of this chain.
    //
    // This is the logic that validates the returned struct:
    // ibc check: https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L87-L167
    // tendermint check: https://github.com/tendermint/tendermint/blob/v0.34.3/light/verifier.go#L19-L79
    // sign bytes: https://github.com/tendermint/tendermint/blob/v0.34.3/types/validator_set.go#L762-L821
    //   * https://github.com/tendermint/tendermint/blob/v0.34.3/types/validator_set.go#L807-L810
    //   * https://github.com/tendermint/tendermint/blob/v0.34.3/types/block.go#L780-L809
    //   * https://github.com/tendermint/tendermint/blob/bf9e36d02d2eb22f6fe8961d0d7d3d34307ba38e/types/canonical.go#L54-L65
    //
    // For the vote sign bytes, it checks (from the commit):
    //   Height, Round, BlockId, TimeStamp, ChainID
    async buildHeader(lastHeight) {
        const signedHeader = await this.getSignedHeader();
        // "assert that trustedVals is NextValidators of last trusted header"
        // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
        const validatorHeight = lastHeight + 1;
        /* eslint @typescript-eslint/no-non-null-assertion: "off" */
        const curHeight = signedHeader.header.height.toNumber();
        return tendermint_1.Header.fromPartial({
            signedHeader,
            validatorSet: await this.getValidatorSet(curHeight),
            trustedHeight: this.revisionHeight(lastHeight),
            trustedValidators: await this.getValidatorSet(validatorHeight),
        });
    }
    // trustedHeight must be proven by the client on the destination chain
    // and include a proof for the connOpenInit (eg. must be 1 or more blocks after the
    // block connOpenInit Tx was in).
    //
    // pass a header height that was previously updated to on the remote chain using updateClient.
    // note: the queries will be for the block before this header, so the proofs match up (appHash is on H+1)
    async getConnectionProof(clientId, connectionId, headerHeight) {
        const proofHeight = this.ensureRevisionHeight(headerHeight);
        const queryHeight = utils_2.subtractBlock(proofHeight, 1);
        const { clientState, proof: proofClient, } = await this.query.ibc.proof.client.state(clientId, queryHeight);
        // This is the most recent state we have on this chain of the other
        const { latestHeight: consensusHeight, } = await this.query.ibc.client.stateTm(clientId);
        utils_1.assert(consensusHeight);
        // get the init proof
        const { proof: proofConnection, } = await this.query.ibc.proof.connection.connection(connectionId, queryHeight);
        // get the consensus proof
        const { proof: proofConsensus, } = await this.query.ibc.proof.client.consensusState(clientId, consensusHeight, queryHeight);
        return {
            clientId,
            clientState,
            connectionId,
            proofHeight,
            proofConnection,
            proofClient,
            proofConsensus,
            consensusHeight,
        };
    }
    // trustedHeight must be proven by the client on the destination chain
    // and include a proof for the connOpenInit (eg. must be 1 or more blocks after the
    // block connOpenInit Tx was in).
    //
    // pass a header height that was previously updated to on the remote chain using updateClient.
    // note: the queries will be for the block before this header, so the proofs match up (appHash is on H+1)
    async getChannelProof(id, headerHeight) {
        const proofHeight = this.ensureRevisionHeight(headerHeight);
        const queryHeight = utils_2.subtractBlock(proofHeight, 1);
        const { proof } = await this.query.ibc.proof.channel.channel(id.portId, id.channelId, queryHeight);
        return {
            id,
            proofHeight,
            proof,
        };
    }
    async getPacketProof(packet, headerHeight) {
        const proofHeight = this.ensureRevisionHeight(headerHeight);
        const queryHeight = utils_2.subtractBlock(proofHeight, 1);
        const { proof } = await this.query.ibc.proof.channel.packetCommitment(packet.sourcePort, packet.sourceChannel, packet.sequence, queryHeight);
        return proof;
    }
    async getAckProof({ originalPacket }, headerHeight) {
        const proofHeight = this.ensureRevisionHeight(headerHeight);
        const queryHeight = utils_2.subtractBlock(proofHeight, 1);
        const res = await this.query.ibc.proof.channel.packetAcknowledgement(originalPacket.destinationPort, originalPacket.destinationChannel, originalPacket.sequence.toNumber(), queryHeight);
        const { proof } = res;
        return proof;
    }
    async getTimeoutProof({ originalPacket }, headerHeight) {
        const proofHeight = this.ensureRevisionHeight(headerHeight);
        const queryHeight = utils_2.subtractBlock(proofHeight, 1);
        const proof = await this.query.ibc.proof.channel.receiptProof(originalPacket.destinationPort, originalPacket.destinationChannel, originalPacket.sequence.toNumber(), queryHeight);
        return proof;
    }
    /*
    These are helpers to query, build data and submit a message
    Currently all prefixed with doXxx, but please look for better naming
    */
    // Updates existing client on this chain with data from src chain.
    // Returns the height that was updated to.
    async doUpdateClient(clientId, src) {
        var _a, _b, _c, _d;
        const { latestHeight } = await this.query.ibc.client.stateTm(clientId);
        const header = await src.buildHeader(utils_2.toIntHeight(latestHeight));
        await this.updateTendermintClient(clientId, header);
        const height = (_d = (_c = (_b = (_a = header.signedHeader) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.height) === null || _c === void 0 ? void 0 : _c.toNumber()) !== null && _d !== void 0 ? _d : 0;
        return src.revisionHeight(height);
    }
    /***** These are all direct wrappers around message constructors ********/
    async sendTokens(recipientAddress, transferAmount, memo) {
        this.logger.verbose(`Send tokens to ${recipientAddress}`);
        this.logger.debug('Send tokens:', {
            senderAddress: this.senderAddress,
            recipientAddress,
            transferAmount,
            memo,
        });
        const result = await this.sign.sendTokens(this.senderAddress, recipientAddress, transferAmount, memo);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    /* Send any number of messages, you are responsible for encoding them */
    async sendMultiMsg(msgs, fees) {
        this.logger.verbose(`Broadcast multiple msgs`);
        this.logger.debug(`Multiple msgs:`, {
            msgs,
            fees,
        });
        const senderAddress = this.senderAddress;
        const result = await this.sign.signAndBroadcast(senderAddress, msgs, fees);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async createTendermintClient(clientState, consensusState) {
        this.logger.verbose(`Create Tendermint client`);
        const senderAddress = this.senderAddress;
        const createMsg = {
            typeUrl: '/ibc.core.client.v1.MsgCreateClient',
            value: tx_3.MsgCreateClient.fromPartial({
                signer: senderAddress,
                clientState: {
                    typeUrl: '/ibc.lightclients.tendermint.v1.ClientState',
                    value: tendermint_1.ClientState.encode(clientState).finish(),
                },
                consensusState: {
                    typeUrl: '/ibc.lightclients.tendermint.v1.ConsensusState',
                    value: tendermint_1.ConsensusState.encode(consensusState).finish(),
                },
            }),
        };
        this.logger.debug('MsgCreateClient', createMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [createMsg], this.fees.initClient);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        const clientId = launchpad_1.logs.findAttribute(parsedLogs, 'create_client', 'client_id').value;
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
            clientId,
        };
    }
    async updateTendermintClient(clientId, header) {
        this.logger.verbose(`Update Tendermint client ${clientId}`);
        const senderAddress = this.senderAddress;
        const updateMsg = {
            typeUrl: '/ibc.core.client.v1.MsgUpdateClient',
            value: tx_3.MsgUpdateClient.fromPartial({
                signer: senderAddress,
                clientId,
                header: {
                    typeUrl: '/ibc.lightclients.tendermint.v1.Header',
                    value: tendermint_1.Header.encode(header).finish(),
                },
            }),
        };
        this.logger.debug(`MsgUpdateClient`, updateMsg);
        const result = await this.sign.signAndBroadcast(senderAddress, [updateMsg], this.fees.updateClient);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async connOpenInit(clientId, remoteClientId) {
        this.logger.info(`Connection open init: ${clientId} => ${remoteClientId}`);
        const senderAddress = this.senderAddress;
        const msg = {
            typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenInit',
            value: tx_4.MsgConnectionOpenInit.fromPartial({
                clientId,
                counterparty: {
                    clientId: remoteClientId,
                    prefix: defaultMerklePrefix,
                },
                version: defaultConnectionVersion,
                delayPeriod: defaultDelayPeriod,
                signer: senderAddress,
            }),
        };
        this.logger.debug(`MsgConnectionOpenInit`, msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.initConnection);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        const connectionId = launchpad_1.logs.findAttribute(parsedLogs, 'connection_open_init', 'connection_id').value;
        this.logger.debug(`Connection open init successful: ${connectionId}`);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
            connectionId,
        };
    }
    async connOpenTry(myClientId, proof) {
        this.logger.info(`Connection open try: ${myClientId} => ${proof.clientId} (${proof.connectionId})`);
        const senderAddress = this.senderAddress;
        const { clientId, connectionId, clientState, proofHeight, proofConnection: proofInit, proofClient, proofConsensus, consensusHeight, } = proof;
        const msg = {
            typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenTry',
            value: tx_4.MsgConnectionOpenTry.fromPartial({
                clientId: myClientId,
                counterparty: {
                    clientId: clientId,
                    connectionId: connectionId,
                    prefix: defaultMerklePrefix,
                },
                delayPeriod: defaultDelayPeriod,
                counterpartyVersions: [defaultConnectionVersion],
                signer: senderAddress,
                clientState,
                proofHeight,
                proofInit,
                proofClient,
                proofConsensus,
                consensusHeight,
            }),
        };
        this.logger.debug('MsgConnectionOpenTry', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        const myConnectionId = launchpad_1.logs.findAttribute(parsedLogs, 'connection_open_try', 'connection_id').value;
        this.logger.debug(`Connection open try successful: ${myConnectionId} => ${connectionId}`);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
            connectionId: myConnectionId,
        };
    }
    async connOpenAck(myConnectionId, proof) {
        this.logger.info(`Connection open ack: ${myConnectionId} => ${proof.connectionId}`);
        const senderAddress = this.senderAddress;
        const { connectionId, clientState, proofHeight, proofConnection: proofTry, proofClient, proofConsensus, consensusHeight, } = proof;
        const msg = {
            typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenAck',
            value: tx_4.MsgConnectionOpenAck.fromPartial({
                connectionId: myConnectionId,
                counterpartyConnectionId: connectionId,
                version: defaultConnectionVersion,
                signer: senderAddress,
                clientState,
                proofHeight,
                proofTry,
                proofClient,
                proofConsensus,
                consensusHeight,
            }),
        };
        this.logger.debug('MsgConnectionOpenAck', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async connOpenConfirm(myConnectionId, proof) {
        this.logger.info(`Connection open confirm: ${myConnectionId}`);
        const senderAddress = this.senderAddress;
        const { proofHeight, proofConnection: proofAck } = proof;
        const msg = {
            typeUrl: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
            value: tx_4.MsgConnectionOpenConfirm.fromPartial({
                connectionId: myConnectionId,
                signer: senderAddress,
                proofHeight,
                proofAck,
            }),
        };
        this.logger.debug('MsgConnectionOpenConfirm', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.connectionHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async channelOpenInit(portId, remotePortId, ordering, connectionId, version) {
        this.logger.verbose(`Channel open init: ${portId} => ${remotePortId} (${connectionId})`);
        const senderAddress = this.senderAddress;
        const msg = {
            typeUrl: '/ibc.core.channel.v1.MsgChannelOpenInit',
            value: tx_2.MsgChannelOpenInit.fromPartial({
                portId,
                channel: {
                    state: channel_1.State.STATE_INIT,
                    ordering,
                    counterparty: {
                        portId: remotePortId,
                    },
                    connectionHops: [connectionId],
                    version,
                },
                signer: senderAddress,
            }),
        };
        this.logger.debug('MsgChannelOpenInit', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.initChannel);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        const channelId = launchpad_1.logs.findAttribute(parsedLogs, 'channel_open_init', 'channel_id').value;
        this.logger.debug(`Channel open init successful: ${channelId}`);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
            channelId,
        };
    }
    async channelOpenTry(portId, remote, ordering, connectionId, version, counterpartyVersion, proof) {
        this.logger.verbose(`Channel open try: ${portId} => ${remote.portId} (${remote.channelId})`);
        const senderAddress = this.senderAddress;
        const { proofHeight, proof: proofInit } = proof;
        const msg = {
            typeUrl: '/ibc.core.channel.v1.MsgChannelOpenTry',
            value: tx_2.MsgChannelOpenTry.fromPartial({
                portId,
                counterpartyVersion,
                channel: {
                    state: channel_1.State.STATE_TRYOPEN,
                    ordering,
                    counterparty: remote,
                    connectionHops: [connectionId],
                    version,
                },
                proofInit,
                proofHeight,
                signer: senderAddress,
            }),
        };
        this.logger.debug('MsgChannelOpenTry', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        const channelId = launchpad_1.logs.findAttribute(parsedLogs, 'channel_open_try', 'channel_id').value;
        this.logger.debug(`Channel open try successful: ${channelId} => ${remote.channelId})`);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
            channelId,
        };
    }
    async channelOpenAck(portId, channelId, counterpartyChannelId, counterpartyVersion, proof) {
        this.logger.verbose(`Channel open ack for port ${portId}: ${channelId} => ${counterpartyChannelId}`);
        const senderAddress = this.senderAddress;
        const { proofHeight, proof: proofTry } = proof;
        const msg = {
            typeUrl: '/ibc.core.channel.v1.MsgChannelOpenAck',
            value: tx_2.MsgChannelOpenAck.fromPartial({
                portId,
                channelId,
                counterpartyChannelId,
                counterpartyVersion,
                proofTry,
                proofHeight,
                signer: senderAddress,
            }),
        };
        this.logger.debug('MsgChannelOpenAck', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async channelOpenConfirm(portId, channelId, proof) {
        this.logger.verbose(`Chanel open confirm for port ${portId}: ${channelId} => ${proof.id.channelId}`);
        const senderAddress = this.senderAddress;
        const { proofHeight, proof: proofAck } = proof;
        const msg = {
            typeUrl: '/ibc.core.channel.v1.MsgChannelOpenConfirm',
            value: tx_2.MsgChannelOpenConfirm.fromPartial({
                portId,
                channelId,
                proofAck,
                proofHeight,
                signer: senderAddress,
            }),
        };
        this.logger.debug('MsgChannelOpenConfirm', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.channelHandshake);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    receivePacket(packet, proofCommitment, proofHeight) {
        return this.receivePackets([packet], [proofCommitment], proofHeight);
    }
    async receivePackets(packets, proofCommitments, proofHeight) {
        this.logger.verbose(`Receive ${packets.length} packets..`);
        if (packets.length !== proofCommitments.length) {
            throw new Error(`Have ${packets.length} packets, but ${proofCommitments.length} proofs`);
        }
        if (packets.length === 0) {
            throw new Error('Must submit at least 1 packet');
        }
        const senderAddress = this.senderAddress;
        const msgs = [];
        for (const i in packets) {
            const packet = packets[i];
            this.logger.verbose(`Sending packet #${packet.sequence.toNumber()} from ${this.chainId}:${packet.sourceChannel}`, utils_2.presentPacketData(packet.data));
            const msg = {
                typeUrl: '/ibc.core.channel.v1.MsgRecvPacket',
                value: tx_2.MsgRecvPacket.fromPartial({
                    packet,
                    proofCommitment: proofCommitments[i],
                    proofHeight,
                    signer: senderAddress,
                }),
            };
            msgs.push(msg);
        }
        this.logger.debug('MsgRecvPacket(s)', { msgs });
        const result = await this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.receivePacket, msgs.length));
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    acknowledgePacket(ack, proofAcked, proofHeight) {
        return this.acknowledgePackets([ack], [proofAcked], proofHeight);
    }
    async acknowledgePackets(acks, proofAckeds, proofHeight) {
        this.logger.verbose(`Acknowledge ${acks.length} packets...`);
        if (acks.length !== proofAckeds.length) {
            throw new Error(`Have ${acks.length} acks, but ${proofAckeds.length} proofs`);
        }
        if (acks.length === 0) {
            throw new Error('Must submit at least 1 ack');
        }
        const senderAddress = this.senderAddress;
        const msgs = [];
        for (const i in acks) {
            const packet = acks[i].originalPacket;
            const acknowledgement = acks[i].acknowledgement;
            this.logger.verbose(`Ack packet #${packet.sequence.toNumber()} from ${this.chainId}:${packet.sourceChannel}`, {
                packet: utils_2.presentPacketData(packet.data),
                ack: utils_2.presentPacketData(acknowledgement),
            });
            const msg = {
                typeUrl: '/ibc.core.channel.v1.MsgAcknowledgement',
                value: tx_2.MsgAcknowledgement.fromPartial({
                    packet,
                    acknowledgement,
                    proofAcked: proofAckeds[i],
                    proofHeight,
                    signer: senderAddress,
                }),
            };
            msgs.push(msg);
        }
        this.logger.debug('MsgAcknowledgement(s)', { msgs });
        const result = await this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.ackPacket, msgs.length));
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    timeoutPacket(packet, proofUnreceived, nextSequenceRecv, proofHeight) {
        return this.timeoutPackets([packet], [proofUnreceived], [nextSequenceRecv], proofHeight);
    }
    async timeoutPackets(packets, proofsUnreceived, nextSequenceRecv, proofHeight) {
        if (packets.length !== proofsUnreceived.length) {
            throw new Error('Packets and proofs must be same length');
        }
        if (packets.length !== nextSequenceRecv.length) {
            throw new Error('Packets and sequences must be same length');
        }
        this.logger.verbose(`Timeout ${packets.length} packets...`);
        const senderAddress = this.senderAddress;
        const msgs = [];
        for (const i in packets) {
            const packet = packets[i];
            this.logger.verbose(`Timeout packet #${packet.sequence.toNumber()} from ${this.chainId}:${packet.sourceChannel}`, utils_2.presentPacketData(packet.data));
            const msg = {
                typeUrl: '/ibc.core.channel.v1.MsgTimeout',
                value: tx_2.MsgTimeout.fromPartial({
                    packet,
                    proofUnreceived: proofsUnreceived[i],
                    nextSequenceRecv: nextSequenceRecv[i],
                    proofHeight,
                    signer: senderAddress,
                }),
            };
            msgs.push(msg);
        }
        this.logger.debug('MsgTimeout', { msgs });
        const result = await this.sign.signAndBroadcast(senderAddress, msgs, utils_2.multiplyFees(this.fees.timeoutPacket, msgs.length));
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
    async transferTokens(sourcePort, sourceChannel, token, receiver, timeoutHeight, 
    // timeout in seconds (we make nanoseconds below)
    timeoutTime) {
        this.logger.verbose(`Transfer tokens to ${receiver}`);
        const senderAddress = this.senderAddress;
        const timeoutTimestamp = timeoutTime
            ? long_1.default.fromNumber(timeoutTime * 1000000000)
            : undefined;
        const msg = {
            typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
            value: tx_1.MsgTransfer.fromPartial({
                sourcePort,
                sourceChannel,
                sender: senderAddress,
                token,
                receiver,
                timeoutHeight,
                timeoutTimestamp,
            }),
        };
        this.logger.debug('MsgTransfer', msg);
        const result = await this.sign.signAndBroadcast(senderAddress, [msg], this.fees.transfer);
        if (stargate_1.isBroadcastTxFailure(result)) {
            throw new Error(utils_2.createBroadcastTxErrorMessage(result));
        }
        const parsedLogs = stargate_1.parseRawLog(result.rawLog);
        return {
            logs: parsedLogs,
            transactionHash: result.transactionHash,
            height: result.height,
        };
    }
}
exports.IbcClient = IbcClient;
async function buildCreateClientArgs(src, unbondingPeriodSec, trustPeriodSec) {
    const header = await src.latestHeader();
    const consensusState = utils_2.buildConsensusState(header);
    const clientState = utils_2.buildClientState(src.chainId, unbondingPeriodSec, trustPeriodSec, src.revisionHeight(header.height));
    return { consensusState, clientState };
}
exports.buildCreateClientArgs = buildCreateClientArgs;
async function prepareConnectionHandshake(src, dest, clientIdSrc, clientIdDest, connIdSrc) {
    // ensure the last transaction was committed to the header (one block after it was included)
    await src.waitOneBlock();
    // update client on dest
    const headerHeight = await dest.doUpdateClient(clientIdDest, src);
    // get a proof (for the proven height)
    const proof = await src.getConnectionProof(clientIdSrc, connIdSrc, headerHeight);
    return proof;
}
exports.prepareConnectionHandshake = prepareConnectionHandshake;
async function prepareChannelHandshake(src, dest, clientIdDest, portId, channelId) {
    // ensure the last transaction was committed to the header (one block after it was included)
    await src.waitOneBlock();
    // update client on dest
    const headerHeight = await dest.doUpdateClient(clientIdDest, src);
    // get a proof (for the proven height)
    const proof = await src.getChannelProof({ portId, channelId }, headerHeight);
    return proof;
}
exports.prepareChannelHandshake = prepareChannelHandshake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJjY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9pYmNjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0NBQTJDO0FBQzNDLGlEQVEyQjtBQUMzQix5REFBOEU7QUFDOUUsK0NBVzBCO0FBQzFCLDJEQUtnQztBQUNoQyx5Q0FBa0U7QUFDbEUsZ0RBQXdCO0FBR3hCLGlFQUF1RTtBQUN2RSxrRUFBNEU7QUFDNUUsd0RBUXlDO0FBQ3pDLCtEQUE0RDtBQUM1RCx1REFHd0M7QUFFeEMsMkRBSzRDO0FBQzVDLG1GQUk0RDtBQUM1RCwyREFLeUM7QUFDekMsbUVBQW1FO0FBRW5FLHFDQUE4QztBQUM5Qyx1Q0FBZ0U7QUFDaEUsbUNBWWlCO0FBRWpCLG9EQUFvRDtBQUNwRCxtRkFBbUY7QUFDbkYsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQyx1REFBdUQ7QUFDdkQseUNBQXlDO0FBQ3pDLDhDQUE4QztBQUU5QywrQ0FBK0M7QUFDL0MsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixTQUFTLEVBQUUsa0JBQU8sQ0FBQyxLQUFLLENBQUM7Q0FDMUIsQ0FBQztBQUNGLE1BQU0sd0JBQXdCLEdBQVk7SUFDeEMsVUFBVSxFQUFFLEdBQUc7SUFDZixRQUFRLEVBQUUsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Q0FDL0MsQ0FBQztBQUNGLGdEQUFnRDtBQUNoRCxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXZDLFNBQVMsV0FBVztJQUNsQixPQUFPLElBQUksd0JBQVEsQ0FBQztRQUNsQixHQUFHLCtCQUFvQjtRQUN2QixDQUFDLHFDQUFxQyxFQUFFLG9CQUFlLENBQUM7UUFDeEQsQ0FBQyxxQ0FBcUMsRUFBRSxvQkFBZSxDQUFDO1FBQ3hELENBQUMsK0NBQStDLEVBQUUsMEJBQXFCLENBQUM7UUFDeEUsQ0FBQyw4Q0FBOEMsRUFBRSx5QkFBb0Is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