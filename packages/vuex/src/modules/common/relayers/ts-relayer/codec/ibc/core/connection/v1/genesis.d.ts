import Long from 'long';
import { IdentifiedConnection, ConnectionPaths } from '../../../../ibc/core/connection/v1/connection';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "ibc.core.connection.v1";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    clientConnectionPaths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    nextConnectionSequence: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
