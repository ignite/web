import { Writer, Reader } from "protobufjs/minimal";
import { Validator } from "../profile/validator";
import { Coordinator, CoordinatorByAddress } from "../profile/coordinator";
export declare const protobufPackage = "tendermint.spn.profile";
/** GenesisState defines the profile module's genesis state. */
export interface GenesisState {
    validatorList: Validator[];
    coordinatorList: Coordinator[];
    coordinatorCounter: number;
    /** this line is used by starport scaffolding # genesis/proto/state */
    coordinatorByAddressList: CoordinatorByAddress[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
