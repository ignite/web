import { CommitResponse } from '@cosmjs/tendermint-rpc';
import { Packet } from '../codec/ibc/core/channel/v1/channel';
import { IbcClient } from './ibcclient';
import { Ack } from './utils';
export interface PacketWithMetadata {
    packet: Packet;
    height: number;
    sender: string;
}
export declare type AckWithMetadata = Ack & {
    height: number;
};
export interface QueryOpts {
    minHeight?: number;
    maxHeight?: number;
}
/**
 * Endpoint is a wrapper around SigningStargateClient as well as ClientID
 * and ConnectionID. Two Endpoints compose a Link and this should expose all the
 * methods you need to work on one half of an IBC Connection, the higher-level
 * orchestration is handled in Link.
 */
export declare class Endpoint {
    readonly client: IbcClient;
    readonly clientID: string;
    readonly connectionID: string;
    constructor(client: IbcClient, clientID: string, connectionID: string);
    chainId(): string;
    getLatestCommit(): Promise<CommitResponse>;
    querySentPackets({ minHeight, maxHeight, }?: QueryOpts): Promise<PacketWithMetadata[]>;
    queryWrittenAcks({ minHeight, maxHeight, }?: QueryOpts): Promise<AckWithMetadata[]>;
}
/**
 * Requires a match of any set field
 *
 * This is designed to easily produce search/subscription query strings,
 * not principally for in-memory filtering.
 */
export interface Filter {
    readonly srcPortId?: string;
    readonly srcChannelId?: string;
    readonly destPortId?: string;
    readonly destChannelId?: string;
}
