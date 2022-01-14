import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.spn.campaign";
export interface CampaignChains {
    campaignID: number;
    chains: number[];
}
export declare const CampaignChains: {
    encode(message: CampaignChains, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CampaignChains;
    fromJSON(object: any): CampaignChains;
    toJSON(message: CampaignChains): unknown;
    fromPartial(object: DeepPartial<CampaignChains>): CampaignChains;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
