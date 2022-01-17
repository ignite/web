import { Writer, Reader } from "protobufjs/minimal";
import { Chain } from "../launch/chain";
import { GenesisAccount } from "../launch/genesis_account";
import { VestingAccount } from "../launch/vesting_account";
import { GenesisValidator } from "../launch/genesis_validator";
import { Request } from "../launch/request";
import { Params } from "../launch/params";
export declare const protobufPackage = "tendermint.spn.launch";
/** GenesisState defines the launch module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    chainList: Chain[];
    chainCounter: number;
    genesisAccountList: GenesisAccount[];
    vestingAccountList: VestingAccount[];
    genesisValidatorList: GenesisValidator[];
    requestList: Request[];
    requestCounterList: RequestCounter[];
    params: Params | undefined;
}
export interface RequestCounter {
    launchID: number;
    counter: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const RequestCounter: {
    encode(message: RequestCounter, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RequestCounter;
    fromJSON(object: any): RequestCounter;
    toJSON(message: RequestCounter): unknown;
    fromPartial(object: DeepPartial<RequestCounter>): RequestCounter;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
