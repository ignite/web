import { Coin, logs, StdFee } from '@cosmjs/launchpad';
import { BroadcastTxFailure } from '@cosmjs/stargate';
import { ReadonlyDateWithNanoseconds, Header as RpcHeader, ValidatorPubkey as RpcPubKey } from '@cosmjs/tendermint-rpc';
import Long from 'long';
import { Timestamp } from '../codec/google/protobuf/timestamp';
import { Packet } from '../codec/ibc/core/channel/v1/channel';
import { Height } from '../codec/ibc/core/client/v1/client';
import { ClientState as TendermintClientState, ConsensusState as TendermintConsensusState } from '../codec/ibc/lightclients/tendermint/v1/tendermint';
import { PublicKey as ProtoPubKey } from '../codec/tendermint/crypto/keys';
import { PacketWithMetadata } from './endpoint';
export interface Ack {
    readonly acknowledgement: Uint8Array;
    readonly originalPacket: Packet;
}
export declare function createBroadcastTxErrorMessage(result: BroadcastTxFailure): string;
export declare function toIntHeight(height?: Height): number;
export declare function ensureIntHeight(height: number | Height): number;
export declare function subtractBlock(height: Height, count?: number): Height;
export declare function parseRevisionNumber(chainId: string): Long;
export declare function may<T, U>(transform: (val: T) => U, value: T | null | undefined): U | undefined;
export declare function mapRpcPubKeyToProto(pubkey?: RpcPubKey): ProtoPubKey | undefined;
export declare function timestampFromDateNanos(date: ReadonlyDateWithNanoseconds): Timestamp;
export declare function secondsFromDateNanos(date: ReadonlyDateWithNanoseconds): number;
export declare function buildConsensusState(header: RpcHeader): TendermintConsensusState;
export declare function buildClientState(chainId: string, unbondingPeriodSec: number, trustPeriodSec: number, height: Height): TendermintClientState;
interface ParsedAttribute {
    readonly key: string;
    readonly value: string;
}
interface ParsedEvent {
    readonly type: string;
    readonly attributes: readonly ParsedAttribute[];
}
export declare function parsePacketsFromLogs(logs: readonly logs.Log[]): Packet[];
export declare function parseHeightAttribute(attribute?: string): Height | undefined;
export declare function parsePacket({ type, attributes }: ParsedEvent): Packet;
export declare function parseAcksFromLogs(logs: readonly logs.Log[]): Ack[];
export declare function parseAck({ type, attributes }: ParsedEvent): Ack;
export declare function multiplyFees({ gas, amount }: StdFee, mult: number): StdFee;
export declare function multiplyCoin({ amount, denom }: Coin, mult: number): Coin;
export declare function heightGreater(a: Height | undefined, b: Height): boolean;
export declare function timeGreater(a: Long | undefined, b: number): boolean;
export declare function splitPendingPackets(currentHeight: Height, currentTime: number, // in seconds
packets: readonly PacketWithMetadata[]): {
    readonly toSubmit: readonly PacketWithMetadata[];
    readonly toTimeout: readonly PacketWithMetadata[];
};
export declare function presentPacketData(data: Uint8Array): Record<string, unknown>;
export {};
