// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/launchpad";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintVouchers } from "./types/campaign/tx";
import { MsgCreateCampaign } from "./types/campaign/tx";
import { MsgUpdateCampaignName } from "./types/campaign/tx";
import { MsgUpdateTotalSupply } from "./types/campaign/tx";
import { MsgUpdateTotalShares } from "./types/campaign/tx";
import { MsgInitializeMainnet } from "./types/campaign/tx";
import { MsgAddVestingOptions } from "./types/campaign/tx";
import { MsgAddShares } from "./types/campaign/tx";
import { MsgBurnVouchers } from "./types/campaign/tx";
import { MsgUnredeemVouchers } from "./types/campaign/tx";
import { MsgRedeemVouchers } from "./types/campaign/tx";
const types = [
    ["/tendermint.spn.campaign.MsgMintVouchers", MsgMintVouchers],
    ["/tendermint.spn.campaign.MsgCreateCampaign", MsgCreateCampaign],
    ["/tendermint.spn.campaign.MsgUpdateCampaignName", MsgUpdateCampaignName],
    ["/tendermint.spn.campaign.MsgUpdateTotalSupply", MsgUpdateTotalSupply],
    ["/tendermint.spn.campaign.MsgUpdateTotalShares", MsgUpdateTotalShares],
    ["/tendermint.spn.campaign.MsgInitializeMainnet", MsgInitializeMainnet],
    ["/tendermint.spn.campaign.MsgAddVestingOptions", MsgAddVestingOptions],
    ["/tendermint.spn.campaign.MsgAddShares", MsgAddShares],
    ["/tendermint.spn.campaign.MsgBurnVouchers", MsgBurnVouchers],
    ["/tendermint.spn.campaign.MsgUnredeemVouchers", MsgUnredeemVouchers],
    ["/tendermint.spn.campaign.MsgRedeemVouchers", MsgRedeemVouchers],
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
        msgMintVouchers: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgMintVouchers", value: MsgMintVouchers.fromPartial(data) }),
        msgCreateCampaign: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgCreateCampaign", value: MsgCreateCampaign.fromPartial(data) }),
        msgUpdateCampaignName: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgUpdateCampaignName", value: MsgUpdateCampaignName.fromPartial(data) }),
        msgUpdateTotalSupply: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgUpdateTotalSupply", value: MsgUpdateTotalSupply.fromPartial(data) }),
        msgUpdateTotalShares: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgUpdateTotalShares", value: MsgUpdateTotalShares.fromPartial(data) }),
        msgInitializeMainnet: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgInitializeMainnet", value: MsgInitializeMainnet.fromPartial(data) }),
        msgAddVestingOptions: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgAddVestingOptions", value: MsgAddVestingOptions.fromPartial(data) }),
        msgAddShares: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgAddShares", value: MsgAddShares.fromPartial(data) }),
        msgBurnVouchers: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgBurnVouchers", value: MsgBurnVouchers.fromPartial(data) }),
        msgUnredeemVouchers: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgUnredeemVouchers", value: MsgUnredeemVouchers.fromPartial(data) }),
        msgRedeemVouchers: (data) => ({ typeUrl: "/tendermint.spn.campaign.MsgRedeemVouchers", value: MsgRedeemVouchers.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
