import { Writer, Reader } from "protobufjs/minimal";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
export declare const protobufPackage = "tendermint.spn.launch";
export interface Request {
    launchID: number;
    requestID: number;
    creator: string;
    createdAt: number;
    content: RequestContent | undefined;
}
export interface RequestContent {
    genesisAccount: GenesisAccount | undefined;
    vestingAccount: VestingAccount | undefined;
    genesisValidator: GenesisValidator | undefined;
    accountRemoval: AccountRemoval | undefined;
    validatorRemoval: ValidatorRemoval | undefined;
}
export interface AccountRemoval {
    address: string;
}
export interface ValidatorRemoval {
    valAddress: string;
}
export declare const Request: {
    encode(message: Request, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    fromPartial(object: DeepPartial<Request>): Request;
};
export declare const RequestContent: {
    encode(message: RequestContent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RequestContent;
    fromJSON(object: any): RequestContent;
    toJSON(message: RequestContent): unknown;
    fromPartial(object: DeepPartial<RequestContent>): RequestContent;
};
export declare const AccountRemoval: {
    encode(message: AccountRemoval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AccountRemoval;
    fromJSON(object: any): AccountRemoval;
    toJSON(message: AccountRemoval): unknown;
    fromPartial(object: DeepPartial<AccountRemoval>): AccountRemoval;
};
export declare const ValidatorRemoval: {
    encode(message: ValidatorRemoval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ValidatorRemoval;
    fromJSON(object: any): ValidatorRemoval;
    toJSON(message: ValidatorRemoval): unknown;
    fromPartial(object: DeepPartial<ValidatorRemoval>): ValidatorRemoval;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
