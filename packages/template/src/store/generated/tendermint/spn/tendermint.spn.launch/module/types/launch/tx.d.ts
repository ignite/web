import { Reader, Writer } from "protobufjs/minimal";
import { InitialGenesis } from "../launch/chain";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { VestingOptions } from "../launch/vesting_account";
export declare const protobufPackage = "tendermint.spn.launch";
export interface MsgCreateChain {
    coordinator: string;
    genesisChainID: string;
    sourceURL: string;
    sourceHash: string;
    genesisURL: string;
    genesisHash: string;
    hasCampaign: boolean;
    campaignID: number;
}
export interface MsgCreateChainResponse {
    launchID: number;
}
export interface MsgEditChain {
    coordinator: string;
    launchID: number;
    genesisChainID: string;
    sourceURL: string;
    sourceHash: string;
    initialGenesis: InitialGenesis | undefined;
}
export interface MsgEditChainResponse {
}
export interface MsgRequestAddAccount {
    creator: string;
    launchID: number;
    address: string;
    coins: Coin[];
}
export interface MsgRequestAddAccountResponse {
    requestID: number;
    autoApproved: boolean;
}
export interface MsgRequestAddVestingAccount {
    creator: string;
    launchID: number;
    address: string;
    options: VestingOptions | undefined;
}
export interface MsgRequestAddVestingAccountResponse {
    requestID: number;
    autoApproved: boolean;
}
export interface MsgRequestRemoveAccount {
    creator: string;
    launchID: number;
    address: string;
}
export interface MsgRequestRemoveAccountResponse {
    requestID: number;
    autoApproved: boolean;
}
export interface MsgRequestAddValidator {
    creator: string;
    launchID: number;
    valAddress: string;
    genTx: Uint8Array;
    consPubKey: Uint8Array;
    selfDelegation: Coin | undefined;
    peer: string;
}
export interface MsgRequestAddValidatorResponse {
    requestID: number;
    autoApproved: boolean;
}
export interface MsgRequestRemoveValidator {
    creator: string;
    launchID: number;
    validatorAddress: string;
}
export interface MsgRequestRemoveValidatorResponse {
    requestID: number;
    autoApproved: boolean;
}
export interface MsgSettleRequest {
    coordinator: string;
    launchID: number;
    requestID: number;
    approve: boolean;
}
export interface MsgSettleRequestResponse {
}
export interface MsgTriggerLaunch {
    coordinator: string;
    launchID: number;
    remainingTime: number;
}
export interface MsgTriggerLaunchResponse {
}
export interface MsgRevertLaunch {
    coordinator: string;
    launchID: number;
}
export interface MsgRevertLaunchResponse {
}
export declare const MsgCreateChain: {
    encode(message: MsgCreateChain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChain;
    fromJSON(object: any): MsgCreateChain;
    toJSON(message: MsgCreateChain): unknown;
    fromPartial(object: DeepPartial<MsgCreateChain>): MsgCreateChain;
};
export declare const MsgCreateChainResponse: {
    encode(message: MsgCreateChainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChainResponse;
    fromJSON(object: any): MsgCreateChainResponse;
    toJSON(message: MsgCreateChainResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateChainResponse>): MsgCreateChainResponse;
};
export declare const MsgEditChain: {
    encode(message: MsgEditChain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditChain;
    fromJSON(object: any): MsgEditChain;
    toJSON(message: MsgEditChain): unknown;
    fromPartial(object: DeepPartial<MsgEditChain>): MsgEditChain;
};
export declare const MsgEditChainResponse: {
    encode(_: MsgEditChainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEditChainResponse;
    fromJSON(_: any): MsgEditChainResponse;
    toJSON(_: MsgEditChainResponse): unknown;
    fromPartial(_: DeepPartial<MsgEditChainResponse>): MsgEditChainResponse;
};
export declare const MsgRequestAddAccount: {
    encode(message: MsgRequestAddAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddAccount;
    fromJSON(object: any): MsgRequestAddAccount;
    toJSON(message: MsgRequestAddAccount): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddAccount>): MsgRequestAddAccount;
};
export declare const MsgRequestAddAccountResponse: {
    encode(message: MsgRequestAddAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddAccountResponse;
    fromJSON(object: any): MsgRequestAddAccountResponse;
    toJSON(message: MsgRequestAddAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddAccountResponse>): MsgRequestAddAccountResponse;
};
export declare const MsgRequestAddVestingAccount: {
    encode(message: MsgRequestAddVestingAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddVestingAccount;
    fromJSON(object: any): MsgRequestAddVestingAccount;
    toJSON(message: MsgRequestAddVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddVestingAccount>): MsgRequestAddVestingAccount;
};
export declare const MsgRequestAddVestingAccountResponse: {
    encode(message: MsgRequestAddVestingAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddVestingAccountResponse;
    fromJSON(object: any): MsgRequestAddVestingAccountResponse;
    toJSON(message: MsgRequestAddVestingAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddVestingAccountResponse>): MsgRequestAddVestingAccountResponse;
};
export declare const MsgRequestRemoveAccount: {
    encode(message: MsgRequestRemoveAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestRemoveAccount;
    fromJSON(object: any): MsgRequestRemoveAccount;
    toJSON(message: MsgRequestRemoveAccount): unknown;
    fromPartial(object: DeepPartial<MsgRequestRemoveAccount>): MsgRequestRemoveAccount;
};
export declare const MsgRequestRemoveAccountResponse: {
    encode(message: MsgRequestRemoveAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestRemoveAccountResponse;
    fromJSON(object: any): MsgRequestRemoveAccountResponse;
    toJSON(message: MsgRequestRemoveAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestRemoveAccountResponse>): MsgRequestRemoveAccountResponse;
};
export declare const MsgRequestAddValidator: {
    encode(message: MsgRequestAddValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddValidator;
    fromJSON(object: any): MsgRequestAddValidator;
    toJSON(message: MsgRequestAddValidator): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddValidator>): MsgRequestAddValidator;
};
export declare const MsgRequestAddValidatorResponse: {
    encode(message: MsgRequestAddValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestAddValidatorResponse;
    fromJSON(object: any): MsgRequestAddValidatorResponse;
    toJSON(message: MsgRequestAddValidatorResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestAddValidatorResponse>): MsgRequestAddValidatorResponse;
};
export declare const MsgRequestRemoveValidator: {
    encode(message: MsgRequestRemoveValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestRemoveValidator;
    fromJSON(object: any): MsgRequestRemoveValidator;
    toJSON(message: MsgRequestRemoveValidator): unknown;
    fromPartial(object: DeepPartial<MsgRequestRemoveValidator>): MsgRequestRemoveValidator;
};
export declare const MsgRequestRemoveValidatorResponse: {
    encode(message: MsgRequestRemoveValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestRemoveValidatorResponse;
    fromJSON(object: any): MsgRequestRemoveValidatorResponse;
    toJSON(message: MsgRequestRemoveValidatorResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestRemoveValidatorResponse>): MsgRequestRemoveValidatorResponse;
};
export declare const MsgSettleRequest: {
    encode(message: MsgSettleRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSettleRequest;
    fromJSON(object: any): MsgSettleRequest;
    toJSON(message: MsgSettleRequest): unknown;
    fromPartial(object: DeepPartial<MsgSettleRequest>): MsgSettleRequest;
};
export declare const MsgSettleRequestResponse: {
    encode(_: MsgSettleRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSettleRequestResponse;
    fromJSON(_: any): MsgSettleRequestResponse;
    toJSON(_: MsgSettleRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgSettleRequestResponse>): MsgSettleRequestResponse;
};
export declare const MsgTriggerLaunch: {
    encode(message: MsgTriggerLaunch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTriggerLaunch;
    fromJSON(object: any): MsgTriggerLaunch;
    toJSON(message: MsgTriggerLaunch): unknown;
    fromPartial(object: DeepPartial<MsgTriggerLaunch>): MsgTriggerLaunch;
};
export declare const MsgTriggerLaunchResponse: {
    encode(_: MsgTriggerLaunchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTriggerLaunchResponse;
    fromJSON(_: any): MsgTriggerLaunchResponse;
    toJSON(_: MsgTriggerLaunchResponse): unknown;
    fromPartial(_: DeepPartial<MsgTriggerLaunchResponse>): MsgTriggerLaunchResponse;
};
export declare const MsgRevertLaunch: {
    encode(message: MsgRevertLaunch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevertLaunch;
    fromJSON(object: any): MsgRevertLaunch;
    toJSON(message: MsgRevertLaunch): unknown;
    fromPartial(object: DeepPartial<MsgRevertLaunch>): MsgRevertLaunch;
};
export declare const MsgRevertLaunchResponse: {
    encode(_: MsgRevertLaunchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevertLaunchResponse;
    fromJSON(_: any): MsgRevertLaunchResponse;
    toJSON(_: MsgRevertLaunchResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevertLaunchResponse>): MsgRevertLaunchResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateChain(request: MsgCreateChain): Promise<MsgCreateChainResponse>;
    EditChain(request: MsgEditChain): Promise<MsgEditChainResponse>;
    RequestAddAccount(request: MsgRequestAddAccount): Promise<MsgRequestAddAccountResponse>;
    RequestAddVestingAccount(request: MsgRequestAddVestingAccount): Promise<MsgRequestAddVestingAccountResponse>;
    RequestRemoveAccount(request: MsgRequestRemoveAccount): Promise<MsgRequestRemoveAccountResponse>;
    RequestAddValidator(request: MsgRequestAddValidator): Promise<MsgRequestAddValidatorResponse>;
    RequestRemoveValidator(request: MsgRequestRemoveValidator): Promise<MsgRequestRemoveValidatorResponse>;
    SettleRequest(request: MsgSettleRequest): Promise<MsgSettleRequestResponse>;
    TriggerLaunch(request: MsgTriggerLaunch): Promise<MsgTriggerLaunchResponse>;
    RevertLaunch(request: MsgRevertLaunch): Promise<MsgRevertLaunchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateChain(request: MsgCreateChain): Promise<MsgCreateChainResponse>;
    EditChain(request: MsgEditChain): Promise<MsgEditChainResponse>;
    RequestAddAccount(request: MsgRequestAddAccount): Promise<MsgRequestAddAccountResponse>;
    RequestAddVestingAccount(request: MsgRequestAddVestingAccount): Promise<MsgRequestAddVestingAccountResponse>;
    RequestRemoveAccount(request: MsgRequestRemoveAccount): Promise<MsgRequestRemoveAccountResponse>;
    RequestAddValidator(request: MsgRequestAddValidator): Promise<MsgRequestAddValidatorResponse>;
    RequestRemoveValidator(request: MsgRequestRemoveValidator): Promise<MsgRequestRemoveValidatorResponse>;
    SettleRequest(request: MsgSettleRequest): Promise<MsgSettleRequestResponse>;
    TriggerLaunch(request: MsgTriggerLaunch): Promise<MsgTriggerLaunchResponse>;
    RevertLaunch(request: MsgRevertLaunch): Promise<MsgRevertLaunchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
