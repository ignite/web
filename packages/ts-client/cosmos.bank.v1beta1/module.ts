// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgMultiSend } from "./types/cosmos/bank/v1beta1/tx";
import { MsgSend } from "./types/cosmos/bank/v1beta1/tx";

import { SendAuthorization as typeSendAuthorization} from "./types"
import { Params as typeParams} from "./types"
import { SendEnabled as typeSendEnabled} from "./types"
import { Input as typeInput} from "./types"
import { Output as typeOutput} from "./types"
import { Supply as typeSupply} from "./types"
import { DenomUnit as typeDenomUnit} from "./types"
import { Metadata as typeMetadata} from "./types"
import { Balance as typeBalance} from "./types"
import { DenomOwner as typeDenomOwner} from "./types"

export { MsgMultiSend, MsgSend };

type sendMsgMultiSendParams = {
  value: MsgMultiSend,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendParams = {
  value: MsgSend,
  fee?: StdFee,
  memo?: string
};


type msgMultiSendParams = {
  value: MsgMultiSend,
};

type msgSendParams = {
  value: MsgSend,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgMultiSend({ value, fee, memo }: sendMsgMultiSendParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMultiSend: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMultiSend({ value: MsgMultiSend.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMultiSend: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSend({ value, fee, memo }: sendMsgSendParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSend: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSend({ value: MsgSend.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSend: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgMultiSend({ value }: msgMultiSendParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend", value: MsgMultiSend.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMultiSend: Could not create message: ' + e.message)
			}
		},
		
		msgSend({ value }: msgSendParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: MsgSend.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSend: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						SendAuthorization: getStructure(typeSendAuthorization.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						SendEnabled: getStructure(typeSendEnabled.fromPartial({})),
						Input: getStructure(typeInput.fromPartial({})),
						Output: getStructure(typeOutput.fromPartial({})),
						Supply: getStructure(typeSupply.fromPartial({})),
						DenomUnit: getStructure(typeDenomUnit.fromPartial({})),
						Metadata: getStructure(typeMetadata.fromPartial({})),
						Balance: getStructure(typeBalance.fromPartial({})),
						DenomOwner: getStructure(typeDenomOwner.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			CosmosBankV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;