import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.spn.launch";
export interface Chain {
    launchID: number;
    coordinatorID: number;
    genesisChainID: string;
    createdAt: number;
    sourceURL: string;
    sourceHash: string;
    initialGenesis: InitialGenesis | undefined;
    hasCampaign: boolean;
    campaignID: number;
    isMainnet: boolean;
    launchTriggered: boolean;
    launchTimestamp: number;
}
export interface InitialGenesis {
    defaultInitialGenesis: DefaultInitialGenesis | undefined;
    genesisURL: GenesisURL | undefined;
}
/**
 * DefaultInitialGenesis specifies using the default CLI-generated genesis as an
 * initial genesis
 */
export interface DefaultInitialGenesis {
}
/** GenesisURL specifies using a custom genesis from a URL as the initial genesis */
export interface GenesisURL {
    url: string;
    hash: string;
}
export declare const Chain: {
    encode(message: Chain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Chain;
    fromJSON(object: any): Chain;
    toJSON(message: Chain): unknown;
    fromPartial(object: DeepPartial<Chain>): Chain;
};
export declare const InitialGenesis: {
    encode(message: InitialGenesis, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): InitialGenesis;
    fromJSON(object: any): InitialGenesis;
    toJSON(message: InitialGenesis): unknown;
    fromPartial(object: DeepPartial<InitialGenesis>): InitialGenesis;
};
export declare const DefaultInitialGenesis: {
    encode(_: DefaultInitialGenesis, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DefaultInitialGenesis;
    fromJSON(_: any): DefaultInitialGenesis;
    toJSON(_: DefaultInitialGenesis): unknown;
    fromPartial(_: DeepPartial<DefaultInitialGenesis>): DefaultInitialGenesis;
};
export declare const GenesisURL: {
    encode(message: GenesisURL, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisURL;
    fromJSON(object: any): GenesisURL;
    toJSON(message: GenesisURL): unknown;
    fromPartial(object: DeepPartial<GenesisURL>): GenesisURL;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};