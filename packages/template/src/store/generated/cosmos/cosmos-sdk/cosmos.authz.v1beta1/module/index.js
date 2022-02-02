"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = exports.txClient = exports.registry = exports.MissingWalletError = exports.MsgTypes = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
const tx_1 = require("./types/cosmos/authz/v1beta1/tx");
const tx_2 = require("./types/cosmos/authz/v1beta1/tx");
const tx_3 = require("./types/cosmos/authz/v1beta1/tx");
exports.MsgTypes = [
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_1.MsgRevoke],
    ["/cosmos.authz.v1beta1.MsgExec", tx_2.MsgExec],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_3.MsgGrant],
];
exports.MissingWalletError = new Error("wallet is required");
exports.registry = new proto_signing_1.Registry(exports.MsgTypes);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw exports.MissingWalletError;
    let client;
    if (addr) {
        client = await stargate_1.SigningStargateClient.connectWithSigner(addr, wallet, { registry: exports.registry });
    }
    else {
        client = await stargate_1.SigningStargateClient.offline(wallet, { registry: exports.registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgRevoke: (data) => ({ typeUrl: "/cosmos.authz.v1beta1.MsgRevoke", value: tx_1.MsgRevoke.fromPartial(data) }),
        msgExec: (data) => ({ typeUrl: "/cosmos.authz.v1beta1.MsgExec", value: tx_2.MsgExec.fromPartial(data) }),
        msgGrant: (data) => ({ typeUrl: "/cosmos.authz.v1beta1.MsgGrant", value: tx_3.MsgGrant.fromPartial(data) }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;
