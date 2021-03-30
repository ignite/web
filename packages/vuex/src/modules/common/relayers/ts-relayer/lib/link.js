"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.otherSide = void 0;
const utils_1 = require("@cosmjs/utils");
const channel_1 = require("../codec/ibc/core/channel/v1/channel");
const endpoint_1 = require("./endpoint");
const ibcclient_1 = require("./ibcclient");
const logger_1 = require("./logger");
const utils_2 = require("./utils");
function otherSide(side) {
    if (side === 'A') {
        return 'B';
    }
    else {
        return 'A';
    }
}
exports.otherSide = otherSide;
// measured in seconds
// Note: client parameter is checked against the actual keeper - must use real values from genesis.json
// TODO: make this more adaptable for chains (query from staking?)
const genesisUnbondingTime = 1814400;
/**
 * Link represents a Connection between a pair of blockchains (Nodes).
 * An initialized Link requires a both sides to have a Client for the remote side
 * as well as an established Connection using those Clients. Channels can be added
 * and removed to a Link. There are constructors to find/create the basic requirements
 * if you don't know the client/connection IDs a priori.
 */
class Link {
    // you can use this if you already have the info out of bounds
    // FIXME: check the validity of that data?
    constructor(endA, endB, logger) {
        this.endA = endA;
        this.endB = endB;
        this.logger = logger !== null && logger !== void 0 ? logger : new logger_1.NoopLogger();
        this.chainA = endA.client.chainId;
        this.chainB = endB.client.chainId;
    }
    chain(side) {
        if (side === 'A') {
            return this.chainA;
        }
        else {
            return this.chainB;
        }
    }
    otherChain(side) {
        if (side === 'A') {
            return this.chainB;
        }
        else {
            return this.chainA;
        }
    }
    /**
     * findConnection attempts to reuse an existing Client/Connection.
     * If none exists, then it returns an error.
     *
     * @param nodeA
     * @param nodeB
     */
    static async createWithExistingConnections(nodeA, nodeB, connA, connB, logger) {
        const [chainA, chainB] = [nodeA.chainId, nodeB.chainId];
        const [{ connection: connectionA }, { connection: connectionB },] = await Promise.all([
            nodeA.query.ibc.connection.connection(connA),
            nodeB.query.ibc.connection.connection(connB),
        ]);
        if (!connectionA) {
            throw new Error(`[${chainA}] Connection not found for ID ${connA}`);
        }
        if (!connectionB) {
            throw new Error(`[${chainB}] Connection not found for ID ${connB}`);
        }
        if (!connectionA.counterparty) {
            throw new Error(`[${chainA}] Counterparty not found for connection with ID ${connA}`);
        }
        if (!connectionB.counterparty) {
            throw new Error(`[${chainB}] Counterparty not found for connection with ID ${connB}`);
        }
        // ensure the connection is open
        if (connectionA.state != channel_1.State.STATE_OPEN) {
            throw new Error(`Connection on ${chainA} must be in state open, it has state ${connectionA.state}`);
        }
        if (connectionB.state != channel_1.State.STATE_OPEN) {
            throw new Error(`Connection on ${chainB} must be in state open, it has state ${connectionB.state}`);
        }
        const [clientIdA, clientIdB] = [connectionA.clientId, connectionB.clientId];
        if (clientIdA !== connectionB.counterparty.clientId) {
            throw new Error(`Client ID ${connectionA.clientId} for connection with ID ${connA} does not match counterparty client ID ${connectionB.counterparty.clientId} for connection with ID ${connB}`);
        }
        if (clientIdB !== connectionA.counterparty.clientId) {
            throw new Error(`Client ID ${connectionB.clientId} for connection with ID ${connB} does not match counterparty client ID ${connectionA.counterparty.clientId} for connection with ID ${connA}`);
        }
        const [clientStateA, clientStateB] = await Promise.all([
            nodeA.query.ibc.client.stateTm(clientIdA),
            nodeB.query.ibc.client.stateTm(clientIdB),
        ]);
        if (nodeA.chainId !== clientStateB.chainId) {
            throw new Error(`Chain ID ${nodeA.chainId} for connection with ID ${connA} does not match remote chain ID ${clientStateA.chainId}`);
        }
        if (nodeB.chainId !== clientStateA.chainId) {
            throw new Error(`Chain ID ${nodeB.chainId} for connection with ID ${connB} does not match remote chain ID ${clientStateB.chainId}`);
        }
        const endA = new endpoint_1.Endpoint(nodeA, clientIdA, connA);
        const endB = new endpoint_1.Endpoint(nodeB, clientIdB, connB);
        const link = new Link(endA, endB, logger);
        await Promise.all([
            link.assertHeadersMatchConsensusState('A', clientIdA, clientStateA.latestHeight),
            link.assertHeadersMatchConsensusState('B', clientIdB, clientStateB.latestHeight),
        ]);
        return link;
    }
    /**
     * we do this assert inside createWithExistingConnections, but it could be a useful check
     * for submitting double-sign evidence later
     *
     * @param proofSide the side holding the consensus proof, we check the header from the other side
     * @param height the height of the consensus state and header we wish to compare
     */
    async assertHeadersMatchConsensusState(proofSide, clientId, height) {
        var _a;
        const { src, dest } = this.getEnds(proofSide);
        // Check headers match consensus state (at least validators)
        const [consensusState, header] = await Promise.all([
            src.client.query.ibc.client.consensusStateTm(clientId, height),
            dest.client.header(utils_2.toIntHeight(height)),
        ]);
        // ensure consensus and headers match for next validator hashes
        if (!utils_1.arrayContentEquals(consensusState.nextValidatorsHash, header.nextValidatorsHash)) {
            throw new Error(`NextValidatorHash doesn't match ConsensusState.`);
        }
        // ensure the committed apphash matches the actual node we have
        const hash = (_a = consensusState.root) === null || _a === void 0 ? void 0 : _a.hash;
        if (!hash) {
            throw new Error(`ConsensusState.root.hash missing.`);
        }
        if (!utils_1.arrayContentEquals(hash, header.appHash)) {
            throw new Error(`AppHash doesn't match ConsensusState.`);
        }
    }
    /**
     * createConnection will always create a new pair of clients and a Connection between the
     * two sides
     *
     * @param nodeA
     * @param nodeB
     */
    static async createWithNewConnections(nodeA, nodeB, logger, 
    // number of seconds the client (on B pointing to A) is valid without update
    trustPeriodA, 
    // number of seconds the client (on A pointing to B) is valid without update
    trustPeriodB) {
        const [clientIdA, clientIdB] = await createClients(nodeA, nodeB, trustPeriodA, trustPeriodB);
        // wait a block to ensure we have proper proofs for creating a connection (this has failed on CI before)
        await Promise.all([nodeA.waitOneBlock(), nodeB.waitOneBlock()]);
        // connectionInit on nodeA
        const { connectionId: connIdA } = await nodeA.connOpenInit(clientIdA, clientIdB);
        // connectionTry on nodeB
        const proof = await ibcclient_1.prepareConnectionHandshake(nodeA, nodeB, clientIdA, clientIdB, connIdA);
        const { connectionId: connIdB } = await nodeB.connOpenTry(clientIdB, proof);
        // connectionAck on nodeA
        const proofAck = await ibcclient_1.prepareConnectionHandshake(nodeB, nodeA, clientIdB, clientIdA, connIdB);
        await nodeA.connOpenAck(connIdA, proofAck);
        // connectionConfirm on dest
        const proofConfirm = await ibcclient_1.prepareConnectionHandshake(nodeA, nodeB, clientIdA, clientIdB, connIdA);
        await nodeB.connOpenConfirm(connIdB, proofConfirm);
        const endA = new endpoint_1.Endpoint(nodeA, clientIdA, connIdA);
        const endB = new endpoint_1.Endpoint(nodeB, clientIdB, connIdB);
        return new Link(endA, endB, logger);
    }
    /**
     * Writes the latest header from the sender chain to the other endpoint
     *
     * @param sender Which side we get the header/commit from
     * @returns header height (from sender) that is now known on dest
     *
     * Relayer binary should call this from a heartbeat which checks if needed and updates.
     * Just needs trusting period on both side
     */
    async updateClient(sender) {
        this.logger.info(`Update Client on ${this.otherChain(sender)}`);
        const { src, dest } = this.getEnds(sender);
        const height = await dest.client.doUpdateClient(dest.clientID, src.client);
        return height;
    }
    /**
     * Checks if the last proven header on the destination is older than maxAge,
     * and if so, update the client. Returns the new client height if updated,
     * or null if no update needed
     *
     * @param sender
     * @param maxAge
     */
    async updateClientIfStale(sender, maxAge) {
        var _a, _b;
        this.logger.verbose(`Checking if ${this.otherChain(sender)} has recent header of ${this.chain(sender)}`);
        const { src, dest } = this.getEnds(sender);
        const knownHeader = await dest.client.query.ibc.client.consensusStateTm(dest.clientID);
        const currentHeader = await src.client.latestHeader();
        // quit now if we don't need to update
        const knownSeconds = (_b = (_a = knownHeader.timestamp) === null || _a === void 0 ? void 0 : _a.seconds) === null || _b === void 0 ? void 0 : _b.toNumber();
        if (knownSeconds) {
            const curSeconds = utils_2.timestampFromDateNanos(currentHeader.time).seconds.toNumber();
            if (curSeconds - knownSeconds < maxAge) {
                return null;
            }
        }
        // otherwise, do the update
        return this.updateClient(sender);
    }
    /**
     * Ensures the dest has a proof of at least minHeight from source.
     * Will not execute any tx if not needed.
     * Will wait a block if needed until the header is available.
     *
     * Returns the latest header height now available on dest
     */
    async updateClientToHeight(source, minHeight) {
        var _a, _b, _c;
        this.logger.info(`Check whether client on ${this.otherChain(source)} >= height ${minHeight}`);
        const { src, dest } = this.getEnds(source);
        const client = await dest.client.query.ibc.client.stateTm(dest.clientID);
        // TODO: revisit where revision number comes from - this must be the number from the source chain
        const knownHeight = (_c = (_b = (_a = client.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight) === null || _b === void 0 ? void 0 : _b.toNumber()) !== null && _c !== void 0 ? _c : 0;
        if (knownHeight >= minHeight && client.latestHeight !== undefined) {
            return client.latestHeight;
        }
        const curHeight = (await src.client.latestHeader()).height;
        if (curHeight < minHeight) {
            await src.client.waitOneBlock();
        }
        return this.updateClient(source);
    }
    async createChannel(sender, srcPort, destPort, ordering, version) {
        this.logger.info(`Create channel with sender ${this.chain(sender)}: ${srcPort} => ${destPort}`);
        const { src, dest } = this.getEnds(sender);
        // init on src
        const { channelId: channelIdSrc } = await src.client.channelOpenInit(srcPort, destPort, ordering, src.connectionID, version);
        // try on dest
        const proof = await ibcclient_1.prepareChannelHandshake(src.client, dest.client, dest.clientID, srcPort, channelIdSrc);
        const { channelId: channelIdDest } = await dest.client.channelOpenTry(destPort, { portId: srcPort, channelId: channelIdSrc }, ordering, dest.connectionID, version, version, proof);
        // ack on src
        const proofAck = await ibcclient_1.prepareChannelHandshake(dest.client, src.client, src.clientID, destPort, channelIdDest);
        await src.client.channelOpenAck(srcPort, channelIdSrc, channelIdDest, version, proofAck);
        // confirm on dest
        const proofConfirm = await ibcclient_1.prepareChannelHandshake(src.client, dest.client, dest.clientID, srcPort, channelIdSrc);
        await dest.client.channelOpenConfirm(destPort, channelIdDest, proofConfirm);
        return {
            src: {
                portId: srcPort,
                channelId: channelIdSrc,
            },
            dest: {
                portId: destPort,
                channelId: channelIdDest,
            },
        };
    }
    /**
     * This will check both sides for pending packets and relay them.
     * It will then relay all acks (previous and generated by the just-submitted packets).
     * If pending packets have timed out, it will submit a timeout instead of attempting to relay them.
     *
     * Returns the most recent heights it relay, which can be used as a start for the next round
     */
    async checkAndRelayPacketsAndAcks(relayFrom, timedoutThresholdBlocks = 0, timedoutThresholdSeconds = 0) {
        // FIXME: is there a cleaner way to get the height we query at?
        const [packetHeightA, packetHeightB, packetsA, packetsB,] = await Promise.all([
            this.endA.client.currentHeight(),
            this.endB.client.currentHeight(),
            this.getPendingPackets('A', { minHeight: relayFrom.packetHeightA }),
            this.getPendingPackets('B', { minHeight: relayFrom.packetHeightB }),
        ]);
        const cutoffHeightA = await this.endB.client.timeoutHeight(timedoutThresholdBlocks);
        const cutoffTimeA = utils_2.secondsFromDateNanos(await this.endB.client.currentTime()) +
            timedoutThresholdSeconds;
        const { toSubmit: submitA, toTimeout: timeoutA } = utils_2.splitPendingPackets(cutoffHeightA, cutoffTimeA, packetsA);
        const cutoffHeightB = await this.endA.client.timeoutHeight(timedoutThresholdBlocks);
        const cutoffTimeB = utils_2.secondsFromDateNanos(await this.endA.client.currentTime()) +
            timedoutThresholdSeconds;
        const { toSubmit: submitB, toTimeout: timeoutB } = utils_2.splitPendingPackets(cutoffHeightB, cutoffTimeB, packetsB);
        // FIXME: use the returned acks first? Then query for others?
        await Promise.all([
            this.relayPackets('A', submitA),
            this.relayPackets('B', submitB),
        ]);
        // let's wait a bit to ensure our newly committed acks are indexed
        await Promise.all([
            this.endA.client.waitOneBlock(),
            this.endB.client.waitOneBlock(),
        ]);
        const [ackHeightA, ackHeightB, acksA, acksB] = await Promise.all([
            this.endA.client.currentHeight(),
            this.endB.client.currentHeight(),
            this.getPendingAcks('A', { minHeight: relayFrom.ackHeightA }),
            this.getPendingAcks('B', { minHeight: relayFrom.ackHeightB }),
        ]);
        await Promise.all([this.relayAcks('A', acksA), this.relayAcks('B', acksB)]);
        await Promise.all([
            this.timeoutPackets('A', timeoutA),
            this.timeoutPackets('B', timeoutB),
        ]);
        const nextRelay = {
            packetHeightA,
            packetHeightB,
            ackHeightA,
            ackHeightB,
        };
        this.logger.verbose('next heights to relay', nextRelay);
        return nextRelay;
    }
    async getPendingPackets(source, opts = {}) {
        this.logger.verbose(`Get pending packets on ${this.chain(source)}`);
        const { src, dest } = this.getEnds(source);
        const allPackets = await src.querySentPackets(opts);
        const toFilter = allPackets.map(({ packet }) => packet);
        const query = async (port, channel, sequences) => {
            const res = await dest.client.query.ibc.channel.unreceivedPackets(port, channel, sequences);
            return res.sequences.map((seq) => seq.toNumber());
        };
        // This gets the subset of packets that were already processed on the receiving chain
        const unreceived = await this.filterUnreceived(toFilter, query, packetId);
        const unreceivedPackets = allPackets.filter(({ packet }) => unreceived[packetId(packet)].has(packet.sequence.toNumber()));
        // However, some of these may have already been submitted as timeouts on the source chain. Check and filter
        const valid = await Promise.all(unreceivedPackets.map(async (packet) => {
            const { sourcePort, sourceChannel, sequence } = packet.packet;
            try {
                // this throws an error if no commitment there
                await src.client.query.ibc.channel.packetCommitment(sourcePort, sourceChannel, sequence);
                return packet;
            }
            catch (_a) {
                return undefined;
            }
        }));
        return valid.filter((x) => x !== undefined);
    }
    async getPendingAcks(source, opts = {}) {
        this.logger.verbose(`Get pending acks on ${this.chain(source)}`);
        const { src, dest } = this.getEnds(source);
        const allAcks = await src.queryWrittenAcks(opts);
        const toFilter = allAcks.map(({ originalPacket }) => originalPacket);
        const query = async (port, channel, sequences) => {
            const res = await dest.client.query.ibc.channel.unreceivedAcks(port, channel, sequences);
            return res.sequences.map((seq) => seq.toNumber());
        };
        const unreceived = await this.filterUnreceived(toFilter, query, ackId);
        return allAcks.filter(({ originalPacket: packet }) => unreceived[ackId(packet)].has(packet.sequence.toNumber()));
    }
    async filterUnreceived(packets, unreceivedQuery, idFunc) {
        if (packets.length === 0) {
            return {};
        }
        const packetsPerDestination = packets.reduce((sorted, packet) => {
            var _a;
            const key = idFunc(packet);
            return Object.assign(Object.assign({}, sorted), { [key]: [...((_a = sorted[key]) !== null && _a !== void 0 ? _a : []), packet.sequence.toNumber()] });
        }, {});
        const unreceivedResponses = await Promise.all(Object.entries(packetsPerDestination).map(async ([destination, sequences]) => {
            const [port, channel] = destination.split(idDelim);
            const notfound = await unreceivedQuery(port, channel, sequences);
            return { key: destination, sequences: notfound };
        }));
        const unreceived = unreceivedResponses.reduce((nested, { key, sequences }) => {
            return Object.assign(Object.assign({}, nested), { [key]: new Set(sequences) });
        }, {});
        return unreceived;
    }
    // Returns the last height that this side knows of the other blockchain
    async lastKnownHeader(side) {
        var _a, _b, _c;
        this.logger.verbose(`Get last known header on ${this.chain(side)}`);
        const { src } = this.getEnds(side);
        const client = await src.client.query.ibc.client.stateTm(src.clientID);
        return (_c = (_b = (_a = client.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight) === null || _b === void 0 ? void 0 : _b.toNumber()) !== null && _c !== void 0 ? _c : 0;
    }
    // this will update the client if needed and relay all provided packets from src -> dest
    // if packets are all older than the last consensusHeight, then we don't update the client.
    //
    // Returns all the acks that are associated with the just submitted packets
    async relayPackets(source, packets) {
        this.logger.info(`Relay ${packets.length} packets from ${this.chain(source)} => ${this.otherChain(source)}`);
        if (packets.length === 0) {
            return [];
        }
        const { src, dest } = this.getEnds(source);
        // check if we need to update client at all
        const neededHeight = Math.max(...packets.map((x) => x.height)) + 1;
        const headerHeight = await this.updateClientToHeight(source, neededHeight);
        const submit = packets.map(({ packet }) => packet);
        const proofs = await Promise.all(submit.map((packet) => src.client.getPacketProof(packet, headerHeight)));
        const { logs, height } = await dest.client.receivePackets(submit, proofs, headerHeight);
        const acks = utils_2.parseAcksFromLogs(logs);
        return acks.map((ack) => (Object.assign({ height }, ack)));
    }
    // this will update the client if needed and relay all provided acks from src -> dest
    // (yes, dest is where the packet was sent, but the ack was written on src).
    // if acks are all older than the last consensusHeight, then we don't update the client.
    //
    // Returns the block height the acks were included in, or null if no acks sent
    async relayAcks(source, acks) {
        this.logger.info(`Relay ${acks.length} acks from ${this.chain(source)} => ${this.otherChain(source)}`);
        if (acks.length === 0) {
            return null;
        }
        const { src, dest } = this.getEnds(source);
        // check if we need to update client at all
        const neededHeight = Math.max(...acks.map((x) => x.height)) + 1;
        const headerHeight = await this.updateClientToHeight(source, neededHeight);
        const proofs = await Promise.all(acks.map((ack) => src.client.getAckProof(ack, headerHeight)));
        const { height } = await dest.client.acknowledgePackets(acks, proofs, headerHeight);
        return height;
    }
    // Source: the side that originally sent the packet
    // We need to relay a proof from dest -> source
    async timeoutPackets(source, packets) {
        this.logger.info(`Timeout ${packets.length} packets sent from ${this.chain(source)}`);
        if (packets.length === 0) {
            return null;
        }
        const { src, dest } = this.getEnds(source);
        const destSide = otherSide(source);
        // We need a header that is after the timeout, not after the packet was committed
        // This can get complex with timeout timestamps. Let's just update to latest
        await dest.client.waitOneBlock();
        const headerHeight = await this.updateClient(destSide);
        const rawPackets = packets.map(({ packet }) => packet);
        const proofAndSeqs = await Promise.all(rawPackets.map(async (packet) => {
            const fakeAck = {
                originalPacket: packet,
                acknowledgement: new Uint8Array(),
            };
            const { nextSequenceReceive: sequence, } = await dest.client.query.ibc.channel.nextSequenceReceive(packet.destinationPort, packet.destinationChannel);
            const proof = await dest.client.getTimeoutProof(fakeAck, headerHeight);
            return { proof, sequence };
        }));
        const proofs = proofAndSeqs.map(({ proof }) => proof);
        const seqs = proofAndSeqs.map(({ sequence }) => sequence);
        const { height } = await src.client.timeoutPackets(rawPackets, proofs, seqs, headerHeight);
        return height;
    }
    getEnds(src) {
        if (src === 'A') {
            return {
                src: this.endA,
                dest: this.endB,
            };
        }
        else {
            return {
                src: this.endB,
                dest: this.endA,
            };
        }
    }
}
exports.Link = Link;
const idDelim = ':';
const packetId = (packet) => `${packet.destinationPort}${idDelim}${packet.destinationChannel}`;
const ackId = (packet) => `${packet.sourcePort}${idDelim}${packet.sourceChannel}`;
// 2 weeks of trust
const defaultTrustPeriod = 14 * 86400;
async function createClients(nodeA, nodeB, 
// number of seconds the client (on B pointing to A) is valid without update
trustPeriodA, 
// number of seconds the client (on A pointing to B) is valid without update
trustPeriodB) {
    // client on B pointing to A
    const args = await ibcclient_1.buildCreateClientArgs(nodeA, genesisUnbondingTime, trustPeriodA !== null && trustPeriodA !== void 0 ? trustPeriodA : defaultTrustPeriod);
    const { clientId: clientIdB } = await nodeB.createTendermintClient(args.clientState, args.consensusState);
    // client on A pointing to B
    const args2 = await ibcclient_1.buildCreateClientArgs(nodeB, genesisUnbondingTime, trustPeriodB !== null && trustPeriodB !== void 0 ? trustPeriodB : defaultTrustPeriod);
    const { clientId: clientIdA } = await nodeA.createTendermintClient(args2.clientState, args2.consensusState);
    return [clientIdA, clientIdB];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBbUQ7QUFFbkQsa0VBQTRFO0FBRzVFLHlDQUtvQjtBQUNwQiwyQ0FNcUI7QUFDckIscUNBQThDO0FBQzlDLG1DQU1pQjtBQVFqQixTQUFnQixTQUFTLENBQUMsSUFBVTtJQUNsQyxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7UUFDaEIsT0FBTyxHQUFHLENBQUM7S0FDWjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUM7QUFORCw4QkFNQztBQVdELHNCQUFzQjtBQUN0Qix1R0FBdUc7QUFDdkcsa0VBQWtFO0FBQ2xFLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDO0FBRXJDOzs7Ozs7R0FNRztBQUNILE1BQWEsSUFBSTtJQWtPZiw4REFBOEQ7SUFDOUQsMENBQTBDO0lBQzFDLFlBQW1CLElBQWMsRUFBRSxJQUFjLEVBQUUsTUFBZTtRQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLElBQUksbUJBQVUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBbE9PLEtBQUssQ0FBQyxJQUFVO1FBQ3RCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtJQUNILENBQUM7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