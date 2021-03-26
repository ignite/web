"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupIbcExtension = exports.heightQueryString = void 0;
const encoding_1 = require("@cosmjs/encoding");
const stargate_1 = require("@cosmjs/stargate");
const long_1 = __importDefault(require("long"));
const proofs_1 = require("../../codec/confio/proofs");
const any_1 = require("../../codec/google/protobuf/any");
const channel_1 = require("../../codec/ibc/core/channel/v1/channel");
const query_1 = require("../../codec/ibc/core/channel/v1/query");
const query_2 = require("../../codec/ibc/core/client/v1/query");
const commitment_1 = require("../../codec/ibc/core/commitment/v1/commitment");
const connection_1 = require("../../codec/ibc/core/connection/v1/connection");
const query_3 = require("../../codec/ibc/core/connection/v1/query");
const tendermint_1 = require("../../codec/ibc/lightclients/tendermint/v1/tendermint");
function decodeTendermintClientStateAny(clientState) {
    if ((clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl) !== '/ibc.lightclients.tendermint.v1.ClientState') {
        throw new Error(`Unexpected client state type: ${clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl}`);
    }
    return tendermint_1.ClientState.decode(clientState.value);
}
function decodeTendermintConsensusStateAny(clientState) {
    if ((clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl) !== '/ibc.lightclients.tendermint.v1.ConsensusState') {
        throw new Error(`Unexpected client state type: ${clientState === null || clientState === void 0 ? void 0 : clientState.typeUrl}`);
    }
    return tendermint_1.ConsensusState.decode(clientState.value);
}
function heightQueryString(height) {
    return `${height.revisionNumber}-${height.revisionHeight}`;
}
exports.heightQueryString = heightQueryString;
function setupIbcExtension(base) {
    const rpc = stargate_1.createRpc(base);
    // Use these services to get easy typed access to query methods
    // These cannot be used for proof verification
    const channelQueryService = new query_1.QueryClientImpl(rpc);
    const clientQueryService = new query_2.QueryClientImpl(rpc);
    const connectionQueryService = new query_3.QueryClientImpl(rpc);
    return {
        ibc: {
            channel: {
                channel: async (portId, channelId) => channelQueryService.Channel({
                    portId: portId,
                    channelId: channelId,
                }),
                channels: async (paginationKey) => channelQueryService.Channels({
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allChannels: async () => {
                    var _a;
                    const channels = [];
                    let response;
                    let key;
                    do {
                        response = await channelQueryService.Channels({
                            pagination: stargate_1.createPagination(key),
                        });
                        channels.push(...response.channels);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        channels: channels,
                        height: response.height,
                    };
                },
                connectionChannels: async (connection, paginationKey) => channelQueryService.ConnectionChannels({
                    connection: connection,
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allConnectionChannels: async (connection) => {
                    var _a;
                    const channels = [];
                    let response;
                    let key;
                    do {
                        response = await channelQueryService.ConnectionChannels({
                            connection: connection,
                            pagination: stargate_1.createPagination(key),
                        });
                        channels.push(...response.channels);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        channels: channels,
                        height: response.height,
                    };
                },
                clientState: async (portId, channelId) => channelQueryService.ChannelClientState({
                    portId: portId,
                    channelId: channelId,
                }),
                consensusState: async (portId, channelId, revisionNumber, revisionHeight) => channelQueryService.ChannelConsensusState({
                    portId: portId,
                    channelId: channelId,
                    revisionNumber: long_1.default.fromNumber(revisionNumber, true),
                    revisionHeight: long_1.default.fromNumber(revisionHeight, true),
                }),
                packetCommitment: async (portId, channelId, sequence) => channelQueryService.PacketCommitment({
                    portId: portId,
                    channelId: channelId,
                    sequence: sequence,
                }),
                packetCommitments: async (portId, channelId, paginationKey) => channelQueryService.PacketCommitments({
                    channelId: channelId,
                    portId: portId,
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allPacketCommitments: async (portId, channelId) => {
                    var _a;
                    const commitments = [];
                    let response;
                    let key;
                    do {
                        response = await channelQueryService.PacketCommitments({
                            channelId: channelId,
                            portId: portId,
                            pagination: stargate_1.createPagination(key),
                        });
                        commitments.push(...response.commitments);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        commitments: commitments,
                        height: response.height,
                    };
                },
                packetReceipt: async (portId, channelId, sequence) => channelQueryService.PacketReceipt({
                    portId: portId,
                    channelId: channelId,
                    sequence: long_1.default.fromNumber(sequence, true),
                }),
                packetAcknowledgement: async (portId, channelId, sequence) => channelQueryService.PacketAcknowledgement({
                    portId: portId,
                    channelId: channelId,
                    sequence: long_1.default.fromNumber(sequence, true),
                }),
                packetAcknowledgements: async (portId, channelId, paginationKey) => channelQueryService.PacketAcknowledgements({
                    portId: portId,
                    channelId: channelId,
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allPacketAcknowledgements: async (portId, channelId) => {
                    var _a;
                    const acknowledgements = [];
                    let response;
                    let key;
                    do {
                        response = await channelQueryService.PacketAcknowledgements({
                            channelId: channelId,
                            portId: portId,
                            pagination: stargate_1.createPagination(key),
                        });
                        acknowledgements.push(...response.acknowledgements);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        acknowledgements: acknowledgements,
                        height: response.height,
                    };
                },
                unreceivedPackets: async (portId, channelId, packetCommitmentSequences) => channelQueryService.UnreceivedPackets({
                    portId: portId,
                    channelId: channelId,
                    packetCommitmentSequences: packetCommitmentSequences.map((s) => long_1.default.fromNumber(s, true)),
                }),
                unreceivedAcks: async (portId, channelId, packetAckSequences) => channelQueryService.UnreceivedAcks({
                    portId: portId,
                    channelId: channelId,
                    packetAckSequences: packetAckSequences.map((s) => long_1.default.fromNumber(s, true)),
                }),
                nextSequenceReceive: async (portId, channelId) => channelQueryService.NextSequenceReceive({
                    portId: portId,
                    channelId: channelId,
                }),
            },
            client: {
                state: (clientId) => clientQueryService.ClientState({ clientId }),
                states: (paginationKey) => clientQueryService.ClientStates({
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allStates: async () => {
                    var _a;
                    const clientStates = [];
                    let response;
                    let key;
                    do {
                        response = await clientQueryService.ClientStates({
                            pagination: stargate_1.createPagination(key),
                        });
                        clientStates.push(...response.clientStates);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        clientStates: clientStates,
                    };
                },
                consensusState: (clientId, consensusHeight) => clientQueryService.ConsensusState(query_2.QueryConsensusStateRequest.fromPartial({
                    clientId: clientId,
                    revisionHeight: consensusHeight !== undefined
                        ? long_1.default.fromNumber(consensusHeight, true)
                        : undefined,
                    latestHeight: consensusHeight === undefined,
                })),
                consensusStates: (clientId, paginationKey) => clientQueryService.ConsensusStates({
                    clientId: clientId,
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allConsensusStates: async (clientId) => {
                    var _a;
                    const consensusStates = [];
                    let response;
                    let key;
                    do {
                        response = await clientQueryService.ConsensusStates({
                            clientId: clientId,
                            pagination: stargate_1.createPagination(key),
                        });
                        consensusStates.push(...response.consensusStates);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        consensusStates: consensusStates,
                    };
                },
                params: () => clientQueryService.ClientParams({}),
                stateTm: async (clientId) => {
                    const response = await clientQueryService.ClientState({ clientId });
                    return decodeTendermintClientStateAny(response.clientState);
                },
                statesTm: async (paginationKey) => {
                    const { clientStates } = await clientQueryService.ClientStates({
                        pagination: stargate_1.createPagination(paginationKey),
                    });
                    return clientStates.map(({ clientState }) => decodeTendermintClientStateAny(clientState));
                },
                allStatesTm: async () => {
                    var _a;
                    const clientStates = [];
                    let response;
                    let key;
                    do {
                        response = await clientQueryService.ClientStates({
                            pagination: stargate_1.createPagination(key),
                        });
                        clientStates.push(...response.clientStates);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return clientStates.map(({ clientState }) => decodeTendermintClientStateAny(clientState));
                },
                consensusStateTm: async (clientId, consensusHeight) => {
                    const response = await clientQueryService.ConsensusState(query_2.QueryConsensusStateRequest.fromPartial({
                        clientId: clientId,
                        revisionHeight: consensusHeight === null || consensusHeight === void 0 ? void 0 : consensusHeight.revisionHeight,
                        revisionNumber: consensusHeight === null || consensusHeight === void 0 ? void 0 : consensusHeight.revisionNumber,
                        latestHeight: consensusHeight === undefined,
                    }));
                    return decodeTendermintConsensusStateAny(response.consensusState);
                },
            },
            connection: {
                connection: async (connectionId) => connectionQueryService.Connection({
                    connectionId: connectionId,
                }),
                connections: async (paginationKey) => connectionQueryService.Connections({
                    pagination: stargate_1.createPagination(paginationKey),
                }),
                allConnections: async () => {
                    var _a;
                    const connections = [];
                    let response;
                    let key;
                    do {
                        response = await connectionQueryService.Connections({
                            pagination: stargate_1.createPagination(key),
                        });
                        connections.push(...response.connections);
                        key = (_a = response.pagination) === null || _a === void 0 ? void 0 : _a.nextKey;
                    } while (key);
                    return {
                        connections: connections,
                        height: response.height,
                    };
                },
                clientConnections: async (clientId) => connectionQueryService.ClientConnections({
                    clientId: clientId,
                }),
                clientState: async (connectionId) => connectionQueryService.ConnectionClientState({
                    connectionId: connectionId,
                }),
                consensusState: async (connectionId, revisionHeight) => connectionQueryService.ConnectionConsensusState(query_3.QueryConnectionConsensusStateRequest.fromPartial({
                    connectionId: connectionId,
                    revisionHeight: long_1.default.fromNumber(revisionHeight, true),
                })),
            },
            proof: {
                // these keys can all be found here: https://github.com/cosmos/cosmos-sdk/blob/v0.41.1/x/ibc/core/24-host/keys.go
                // note some have changed since the v0.40 pre-release this code was based on
                channel: {
                    channel: async (portId, channelId, proofHeight) => {
                        // key: https://github.com/cosmos/cosmos-sdk/blob/ef0a7344af345882729598bc2958a21143930a6b/x/ibc/24-host/keys.go#L117-L120
                        const key = encoding_1.toAscii(`channelEnds/ports/${portId}/channels/${channelId}`);
                        const proven = await base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());
                        const channel = channel_1.Channel.decode(proven.value);
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            channel: channel,
                            proof: proof,
                            proofHeight,
                        };
                    },
                    // designed only for timeout, modify if we need actual value not just proof
                    // could not verify absence of key receipts/ports/transfer/channels/channel-5/sequences/2
                    receiptProof: async (portId, channelId, sequence, proofHeight) => {
                        const key = encoding_1.toAscii(`receipts/ports/${portId}/channels/${channelId}/sequences/${sequence}`);
                        const proven = await base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());
                        const proof = convertProofsToIcs23(proven.proof);
                        return proof;
                    },
                    packetCommitment: async (portId, channelId, sequence, proofHeight) => {
                        const key = encoding_1.toAscii(`commitments/ports/${portId}/channels/${channelId}/sequences/${sequence.toNumber()}`);
                        const proven = await base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());
                        const commitment = proven.value;
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            commitment: commitment,
                            proof: proof,
                            proofHeight: proofHeight,
                        };
                    },
                    packetAcknowledgement: async (portId, channelId, sequence, proofHeight) => {
                        const key = encoding_1.toAscii(`acks/ports/${portId}/channels/${channelId}/sequences/${sequence}`);
                        const proven = await base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());
                        const acknowledgement = proven.value;
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            acknowledgement: acknowledgement,
                            proof: proof,
                            proofHeight: proofHeight,
                        };
                    },
                    nextSequenceReceive: async (portId, channelId, proofHeight) => {
                        const key = encoding_1.toAscii(`nextSequenceRecv/ports/${portId}/channels/${channelId}`);
                        const proven = await base.queryRawProof('ibc', key, proofHeight.revisionHeight.toNumber());
                        const nextSequenceReceive = long_1.default.fromBytesBE([...proven.value]);
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            nextSequenceReceive: nextSequenceReceive,
                            proof: proof,
                            proofHeight: proofHeight,
                        };
                    },
                },
                client: {
                    state: async (clientId, proofHeight) => {
                        const key = `clients/${clientId}/clientState`;
                        const proven = await base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());
                        const clientState = any_1.Any.decode(proven.value);
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            clientState,
                            proof,
                            proofHeight,
                        };
                    },
                    consensusState: async (clientId, consensusHeight, proofHeight) => {
                        const height = heightQueryString(consensusHeight);
                        const key = `clients/${clientId}/consensusStates/${height}`;
                        const proven = await base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());
                        const consensusState = any_1.Any.decode(proven.value);
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            consensusState,
                            proof,
                            proofHeight,
                        };
                    },
                },
                connection: {
                    connection: async (connectionId, proofHeight) => {
                        const key = `connections/${connectionId}`;
                        const proven = await base.queryRawProof('ibc', encoding_1.toAscii(key), proofHeight.revisionHeight.toNumber());
                        const connection = connection_1.ConnectionEnd.decode(proven.value);
                        const proof = convertProofsToIcs23(proven.proof);
                        return {
                            connection,
                            proof,
                            proofHeight,
                        };
                    },
                },
            },
        },
    };
}
exports.setupIbcExtension = setupIbcExtension;
function convertProofsToIcs23(ops) {
    const proofs = ops.ops.map((op) => proofs_1.CommitmentProof.decode(op.data));
    const resp = commitment_1.MerkleProof.fromPartial({
        proofs,
    });
    return commitment_1.MerkleProof.encode(resp).finish();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9xdWVyaWVzL2liYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrQ0FBMkM7QUFDM0MsK0NBQTRFO0FBQzVFLGdEQUF3QjtBQUV4QixzREFBNEQ7QUFDNUQseURBQXNEO0FBQ3RELHFFQUFrRTtBQUNsRSxpRUFlK0M7QUFFL0MsZ0VBUThDO0FBQzlDLDhFQUE0RTtBQUM1RSw4RUFBOEU7QUFDOUUsb0VBUWtEO0FBQ2xELHNGQUcrRDtBQUcvRCxTQUFTLDhCQUE4QixDQUNyQyxXQUE0QjtJQUU1QixJQUFJLENBQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE9BQU8sTUFBSyw2Q0FBNkMsRUFBRTtRQUMxRSxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUMxRTtJQUNELE9BQU8sd0JBQXFCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxpQ0FBaUMsQ0FDeEMsV0FBNEI7SUFFNUIsSUFDRSxDQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxPQUFPLE1BQUssZ0RBQWdELEVBQ3pFO1FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDMUU7SUFDRCxPQUFPLDJCQUF3QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdELENBQUM7QUFGRCw4Q0FF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