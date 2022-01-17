// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateChain } from "./types/launch/tx";
import { MsgRequestRemoveValidator } from "./types/launch/tx";
import { MsgRequestAddValidator } from "./types/launch/tx";
import { MsgRequestAddVestingAccount } from "./types/launch/tx";
import { MsgRevertLaunch } from "./types/launch/tx";
import { MsgSettleRequest } from "./types/launch/tx";
import { MsgEditChain } from "./types/launch/tx";
import { MsgRequestRemoveAccount } from "./types/launch/tx";
import { MsgRequestAddAccount } from "./types/launch/tx";
import { MsgTriggerLaunch } from "./types/launch/tx";


const types = [
  ["/tendermint.spn.launch.MsgCreateChain", MsgCreateChain],
  ["/tendermint.spn.launch.MsgRequestRemoveValidator", MsgRequestRemoveValidator],
  ["/tendermint.spn.launch.MsgRequestAddValidator", MsgRequestAddValidator],
  ["/tendermint.spn.launch.MsgRequestAddVestingAccount", MsgRequestAddVestingAccount],
  ["/tendermint.spn.launch.MsgRevertLaunch", MsgRevertLaunch],
  ["/tendermint.spn.launch.MsgSettleRequest", MsgSettleRequest],
  ["/tendermint.spn.launch.MsgEditChain", MsgEditChain],
  ["/tendermint.spn.launch.MsgRequestRemoveAccount", MsgRequestRemoveAccount],
  ["/tendermint.spn.launch.MsgRequestAddAccount", MsgRequestAddAccount],
  ["/tendermint.spn.launch.MsgTriggerLaunch", MsgTriggerLaunch],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateChain: (data: MsgCreateChain): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgCreateChain", value: MsgCreateChain.fromPartial( data ) }),
    msgRequestRemoveValidator: (data: MsgRequestRemoveValidator): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRequestRemoveValidator", value: MsgRequestRemoveValidator.fromPartial( data ) }),
    msgRequestAddValidator: (data: MsgRequestAddValidator): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRequestAddValidator", value: MsgRequestAddValidator.fromPartial( data ) }),
    msgRequestAddVestingAccount: (data: MsgRequestAddVestingAccount): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRequestAddVestingAccount", value: MsgRequestAddVestingAccount.fromPartial( data ) }),
    msgRevertLaunch: (data: MsgRevertLaunch): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRevertLaunch", value: MsgRevertLaunch.fromPartial( data ) }),
    msgSettleRequest: (data: MsgSettleRequest): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgSettleRequest", value: MsgSettleRequest.fromPartial( data ) }),
    msgEditChain: (data: MsgEditChain): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgEditChain", value: MsgEditChain.fromPartial( data ) }),
    msgRequestRemoveAccount: (data: MsgRequestRemoveAccount): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRequestRemoveAccount", value: MsgRequestRemoveAccount.fromPartial( data ) }),
    msgRequestAddAccount: (data: MsgRequestAddAccount): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgRequestAddAccount", value: MsgRequestAddAccount.fromPartial( data ) }),
    msgTriggerLaunch: (data: MsgTriggerLaunch): EncodeObject => ({ typeUrl: "/tendermint.spn.launch.MsgTriggerLaunch", value: MsgTriggerLaunch.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
