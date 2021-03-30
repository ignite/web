import { Coin, FeeTable, GasLimits, logs, StdFee } from '@cosmjs/launchpad';
import { EncodeObject, OfflineSigner } from '@cosmjs/proto-signing';
import { AuthExtension, BankExtension, QueryClient, SigningStargateClient, SigningStargateClientOptions } from '@cosmjs/stargate';
import { CommitResponse, ReadonlyDateWithNanoseconds, Header as RpcHeader, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import Long from 'long';
import { Any } from '../codec/google/protobuf/any';
import { Order, Packet } from '../codec/ibc/core/channel/v1/channel';
import { Height } from '../codec/ibc/core/client/v1/client';
import { ClientState as TendermintClientState, ConsensusState as TendermintConsensusState, Header as TendermintHeader } from '../codec/ibc/lightclients/tendermint/v1/tendermint';
import { SignedHeader } from '../codec/tendermint/types/types';
import { ValidatorSet } from '../codec/tendermint/types/validator';
import { Logger } from './logger';
import { IbcExtension } from './queries/ibc';
import { Ack } from './utils';
export interface MsgResult {
    readonly logs: readonly logs.Log[];
    /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
    readonly transactionHash: string;
    /** block height where this transaction was committed - only set if we send 'block' mode */
    readonly height: number;
}
export declare type CreateClientResult = MsgResult & {
    readonly clientId: string;
};
export declare type CreateConnectionResult = MsgResult & {
    readonly connectionId: string;
};
export declare type CreateChannelResult = MsgResult & {
    readonly channelId: string;
};
interface ConnectionHandshakeProof {
    clientId: string;
    connectionId: string;
    clientState?: Any;
    proofHeight: Height;
    proofConnection: Uint8Array;
    proofClient: Uint8Array;
    proofConsensus: Uint8Array;
    consensusHeight?: Height;
}
export interface ChannelHandshake {
    id: ChannelInfo;
    proofHeight: Height;
    proof: Uint8Array;
}
export interface ChannelInfo {
    readonly portId: string;
    readonly channelId: string;
}
export interface IbcFeeTable extends FeeTable {
    readonly initClient: StdFee;
    readonly updateClient: StdFee;
    readonly initConnection: StdFee;
    readonly connectionHandshake: StdFee;
    readonly initChannel: StdFee;
    readonly channelHandshake: StdFee;
    readonly receivePacket: StdFee;
    readonly ackPacket: StdFee;
    readonly timeoutPacket: StdFee;
    readonly transfer: StdFee;
}
export declare type IbcClientOptions = SigningStargateClientOptions & {
    gasLimits?: Partial<GasLimits<IbcFeeTable>>;
    logger?: Logger;
};
export declare class IbcClient {
    readonly fees: IbcFeeTable;
    readonly sign: SigningStargateClient;
    readonly query: QueryClient & AuthExtension & BankExtension & IbcExtension;
    readonly tm: Tendermint34Client;
    readonly senderAddress: string;
    readonly logger: Logger;
    readonly chainId: string;
    readonly revisionNumber: Long;
    static connectWithSigner(endpoint: string, signer: OfflineSigner, senderAddress: string, options?: IbcClientOptions): Promise<IbcClient>;
    private constructor();
    revisionHeight(height: number): Height;
    ensureRevisionHeight(height: number | Height): Height;
    timeoutHeight(blocksInFuture: number): Promise<Height>;
    getChainId(): Promise<string>;
    header(height: number): Promise<RpcHeader>;
    latestHeader(): Promise<RpcHeader>;
    currentTime(): Promise<ReadonlyDateWithNanoseconds>;
    currentHeight(): Promise<number>;
    currentRevision(): Promise<Height>;
    waitOneBlock(): Promise<void>;
    waitForIndexer(): Promise<void>;
    getCommit(height?: number): Promise<CommitResponse>;
    getSignedHeader(height?: number): Promise<SignedHeader>;
    getValidatorSet(height: number): Promise<ValidatorSet>;
    buildHeader(lastHeight: number): Promise<TendermintHeader>;
    getConnectionProof(clientId: string, connectionId: string, headerHeight: Height | number): Promise<ConnectionHandshakeProof>;
    getChannelProof(id: ChannelInfo, headerHeight: Height | number): Promise<ChannelHandshake>;
    getPacketProof(packet: Packet, headerHeight: Height | number): Promise<Uint8Array>;
    getAckProof({ originalPacket }: Ack, headerHeight: Height | number): Promise<Uint8Array>;
    getTimeoutProof({ originalPacket }: Ack, headerHeight: Height | number): Promise<Uint8Array>;
    doUpdateClient(clientId: string, src: IbcClient): Promise<Height>;
    /***** These are all direct wrappers around message constructors ********/
    sendTokens(recipientAddress: string, transferAmount: readonly Coin[], memo?: string): Promise<MsgResult>;
    sendMultiMsg(msgs: EncodeObject[], fees: StdFee): Promise<MsgResult>;
    createTendermintClient(clientState: TendermintClientState, consensusState: TendermintConsensusState): Promise<CreateClientResult>;
    updateTendermintClient(clientId: string, header: TendermintHeader): Promise<MsgResult>;
    connOpenInit(clientId: string, remoteClientId: string): Promise<CreateConnectionResult>;
    connOpenTry(myClientId: string, proof: ConnectionHandshakeProof): Promise<CreateConnectionResult>;
    connOpenAck(myConnectionId: string, proof: ConnectionHandshakeProof): Promise<MsgResult>;
    connOpenConfirm(myConnectionId: string, proof: ConnectionHandshakeProof): Promise<MsgResult>;
    channelOpenInit(portId: string, remotePortId: string, ordering: Order, connectionId: string, version: string): Promise<CreateChannelResult>;
    channelOpenTry(portId: string, remote: ChannelInfo, ordering: Order, connectionId: string, version: string, counterpartyVersion: string, proof: ChannelHandshake): Promise<CreateChannelResult>;
    channelOpenAck(portId: string, channelId: string, counterpartyChannelId: string, counterpartyVersion: string, proof: ChannelHandshake): Promise<MsgResult>;
    channelOpenConfirm(portId: string, channelId: string, proof: ChannelHandshake): Promise<MsgResult>;
    receivePacket(packet: Packet, proofCommitment: Uint8Array, proofHeight?: Height): Promise<MsgResult>;
    receivePackets(packets: readonly Packet[], proofCommitments: readonly Uint8Array[], proofHeight?: Height): Promise<MsgResult>;
    acknowledgePacket(ack: Ack, proofAcked: Uint8Array, proofHeight?: Height): Promise<MsgResult>;
    acknowledgePackets(acks: readonly Ack[], proofAckeds: readonly Uint8Array[], proofHeight?: Height): Promise<MsgResult>;
    timeoutPacket(packet: Packet, proofUnreceived: Uint8Array, nextSequenceRecv: Long, proofHeight: Height): Promise<MsgResult>;
    timeoutPackets(packets: Packet[], proofsUnreceived: Uint8Array[], nextSequenceRecv: Long[], proofHeight: Height): Promise<MsgResult>;
    transferTokens(sourcePort: string, sourceChannel: string, token: Coin, receiver: string, timeoutHeight?: Height, timeoutTime?: number): Promise<MsgResult>;
}
export interface CreateClientArgs {
    clientState: TendermintClientState;
    consensusState: TendermintConsensusState;
}
export declare function buildCreateClientArgs(src: IbcClient, unbondingPeriodSec: number, trustPeriodSec: number): Promise<CreateClientArgs>;
export declare function prepareConnectionHandshake(src: IbcClient, dest: IbcClient, clientIdSrc: string, clientIdDest: string, connIdSrc: string): Promise<ConnectionHandshakeProof>;
export declare function prepareChannelHandshake(src: IbcClient, dest: IbcClient, clientIdDest: string, portId: string, channelId: string): Promise<ChannelHandshake>;
export {};
