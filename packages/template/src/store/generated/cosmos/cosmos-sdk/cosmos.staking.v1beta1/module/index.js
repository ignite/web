"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = exports.txClient = exports.registry = exports.MissingWalletError = exports.MsgTypes = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
const tx_1 = require("./types/cosmos/staking/v1beta1/tx");
const tx_2 = require("./types/cosmos/staking/v1beta1/tx");
const tx_3 = require("./types/cosmos/staking/v1beta1/tx");
const tx_4 = require("./types/cosmos/staking/v1beta1/tx");
const tx_5 = require("./types/cosmos/staking/v1beta1/tx");
exports.MsgTypes = [
    ["/cosmos.staking.v1beta1.MsgBeginRedelegate", tx_1.MsgBeginRedelegate],
    ["/cosmos.staking.v1beta1.MsgDelegate", tx_2.MsgDelegate],
    ["/cosmos.staking.v1beta1.MsgEditValidator", tx_3.MsgEditValidator],
    ["/cosmos.staking.v1beta1.MsgUndelegate", tx_4.MsgUndelegate],
    ["/cosmos.staking.v1beta1.MsgCreateValidator", tx_5.MsgCreateValidator],
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
        msgBeginRedelegate: (data) => ({ typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate", value: tx_1.MsgBeginRedelegate.fromPartial(data) }),
        msgDelegate: (data) => ({ typeUrl: "/cosmos.staking.v1beta1.MsgDelegate", value: tx_2.MsgDelegate.fromPartial(data) }),
        msgEditValidator: (data) => ({ typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator", value: tx_3.MsgEditValidator.fromPartial(data) }),
        msgUndelegate: (data) => ({ typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate", value: tx_4.MsgUndelegate.fromPartial(data) }),
        msgCreateValidator: (data) => ({ typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator", value: tx_5.MsgCreateValidator.fromPartial(data) }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;
