// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgCreatePool } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgDepositWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
import { MsgSwapWithinBatch } from "./types/tendermint/liquidity/v1beta1/tx";
const types = [
    ["/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch", MsgWithdrawWithinBatch],
    ["/tendermint.liquidity.v1beta1.MsgCreatePool", MsgCreatePool],
    ["/tendermint.liquidity.v1beta1.MsgDepositWithinBatch", MsgDepositWithinBatch],
    ["/tendermint.liquidity.v1beta1.MsgSwapWithinBatch", MsgSwapWithinBatch],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgWithdrawWithinBatch: (data) => ({ typeUrl: "/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch", value: MsgWithdrawWithinBatch.fromPartial(data) }),
        msgCreatePool: (data) => ({ typeUrl: "/tendermint.liquidity.v1beta1.MsgCreatePool", value: MsgCreatePool.fromPartial(data) }),
        msgDepositWithinBatch: (data) => ({ typeUrl: "/tendermint.liquidity.v1beta1.MsgDepositWithinBatch", value: MsgDepositWithinBatch.fromPartial(data) }),
        msgSwapWithinBatch: (data) => ({ typeUrl: "/tendermint.liquidity.v1beta1.MsgSwapWithinBatch", value: MsgSwapWithinBatch.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
