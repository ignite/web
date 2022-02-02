"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = exports.txClient = exports.registry = exports.MissingWalletError = exports.MsgTypes = void 0;
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const rest_1 = require("./rest");
const tx_1 = require("./types/cosmos/gov/v1beta1/tx");
const tx_2 = require("./types/cosmos/gov/v1beta1/tx");
const tx_3 = require("./types/cosmos/gov/v1beta1/tx");
const tx_4 = require("./types/cosmos/gov/v1beta1/tx");
exports.MsgTypes = [
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", tx_1.MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.MsgVoteWeighted", tx_2.MsgVoteWeighted],
    ["/cosmos.gov.v1beta1.MsgVote", tx_3.MsgVote],
    ["/cosmos.gov.v1beta1.MsgDeposit", tx_4.MsgDeposit],
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
        msgSubmitProposal: (data) => ({ typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal", value: tx_1.MsgSubmitProposal.fromPartial(data) }),
        msgVoteWeighted: (data) => ({ typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted", value: tx_2.MsgVoteWeighted.fromPartial(data) }),
        msgVote: (data) => ({ typeUrl: "/cosmos.gov.v1beta1.MsgVote", value: tx_3.MsgVote.fromPartial(data) }),
        msgDeposit: (data) => ({ typeUrl: "/cosmos.gov.v1beta1.MsgDeposit", value: tx_4.MsgDeposit.fromPartial(data) }),
    };
};
exports.txClient = txClient;
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseUrl: addr });
};
exports.queryClient = queryClient;
