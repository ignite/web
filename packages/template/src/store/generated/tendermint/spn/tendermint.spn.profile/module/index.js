// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCoordinator } from "./types/profile/tx";
import { MsgUpdateCoordinatorAddress } from "./types/profile/tx";
import { MsgDeleteValidator } from "./types/profile/tx";
import { MsgCreateCoordinator } from "./types/profile/tx";
import { MsgUpdateValidatorDescription } from "./types/profile/tx";
import { MsgUpdateCoordinatorDescription } from "./types/profile/tx";
const types = [
    ["/tendermint.spn.profile.MsgDeleteCoordinator", MsgDeleteCoordinator],
    ["/tendermint.spn.profile.MsgUpdateCoordinatorAddress", MsgUpdateCoordinatorAddress],
    ["/tendermint.spn.profile.MsgDeleteValidator", MsgDeleteValidator],
    ["/tendermint.spn.profile.MsgCreateCoordinator", MsgCreateCoordinator],
    ["/tendermint.spn.profile.MsgUpdateValidatorDescription", MsgUpdateValidatorDescription],
    ["/tendermint.spn.profile.MsgUpdateCoordinatorDescription", MsgUpdateCoordinatorDescription],
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
        msgDeleteCoordinator: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgDeleteCoordinator", value: MsgDeleteCoordinator.fromPartial(data) }),
        msgUpdateCoordinatorAddress: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateCoordinatorAddress", value: MsgUpdateCoordinatorAddress.fromPartial(data) }),
        msgDeleteValidator: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgDeleteValidator", value: MsgDeleteValidator.fromPartial(data) }),
        msgCreateCoordinator: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgCreateCoordinator", value: MsgCreateCoordinator.fromPartial(data) }),
        msgUpdateValidatorDescription: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateValidatorDescription", value: MsgUpdateValidatorDescription.fromPartial(data) }),
        msgUpdateCoordinatorDescription: (data) => ({ typeUrl: "/tendermint.spn.profile.MsgUpdateCoordinatorDescription", value: MsgUpdateCoordinatorDescription.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
