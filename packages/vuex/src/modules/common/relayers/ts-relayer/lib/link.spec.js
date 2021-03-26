"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@cosmjs/utils");
const ava_1 = __importDefault(require("ava"));
const channel_1 = require("../codec/ibc/core/channel/v1/channel");
const ibcclient_1 = require("./ibcclient");
const link_1 = require("./link");
const testutils_1 = require("./testutils");
const utils_2 = require("./utils");
ava_1.default.serial('establish new client-connection', async (t) => {
    const logger = new testutils_1.TestLogger();
    const [src, dest] = await testutils_1.setup();
    const link = await link_1.Link.createWithNewConnections(src, dest, logger);
    // ensure the data makes sense (TODO: more?)
    t.assert(link.endA.clientID.startsWith('07-tendermint-'), link.endA.clientID);
    t.assert(link.endB.clientID.startsWith('07-tendermint-'), link.endB.clientID);
    // try to update both clients, ensuring this connection is stable
    await link.updateClient('A');
    // TODO: ensure it is updated
    await link.updateClient('B');
    // TODO: ensure it is updated
    t.assert(logger.info.calledTwice, logger.info.callCount.toString());
});
ava_1.default.serial('initialized connection and start channel handshake', async (t) => {
    const [src, dest] = await testutils_1.setup();
    const link = await link_1.Link.createWithNewConnections(src, dest);
    // reject channels with invalid ports
    await t.throwsAsync(() => src.channelOpenInit(testutils_1.ics20.destPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version));
    // we need to wait a block for a new checkTx state, and proper sequences
    await src.waitOneBlock();
    // reject channels with invalid version
    await t.throwsAsync(() => src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, 'ics27'));
    // we need to wait a block for a new checkTx state, and proper sequences
    await src.waitOneBlock();
    // this is valid and works
    const { channelId: channelIdSrc } = await src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version);
    t.assert(channelIdSrc.startsWith('channel-'), channelIdSrc);
});
ava_1.default.serial('automated channel handshake on initialized connection', async (t) => {
    var _a;
    const [nodeA, nodeB] = await testutils_1.setup();
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB);
    // increment the channel sequence on src, to guarantee unique ids
    await nodeA.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, link.endA.connectionID, testutils_1.ics20.version);
    // open a channel
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    // ensure we bound expected ports
    t.is(channels.src.portId, testutils_1.ics20.srcPortId);
    t.is(channels.dest.portId, testutils_1.ics20.destPortId);
    // and have different channel ids (this depends on the increment above)
    t.not(channels.src.channelId, channels.dest.channelId);
    // query data
    const { channel } = await link.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, channels.dest.channelId);
    t.is(channel === null || channel === void 0 ? void 0 : channel.state, channel_1.State.STATE_OPEN);
    t.is(channel === null || channel === void 0 ? void 0 : channel.ordering, testutils_1.ics20.ordering);
    t.is((_a = channel === null || channel === void 0 ? void 0 : channel.counterparty) === null || _a === void 0 ? void 0 : _a.channelId, channels.src.channelId);
});
// createWithExistingConnections
ava_1.default.serial('reuse existing connections', async (t) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [src, dest] = await testutils_1.setup();
    const oldLink = await link_1.Link.createWithNewConnections(src, dest);
    const connA = oldLink.endA.connectionID;
    const connB = oldLink.endB.connectionID;
    const oldChannels = await oldLink.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    const newLink = await link_1.Link.createWithExistingConnections(src, dest, connA, connB);
    const channelSrc = await newLink.endA.client.query.ibc.channel.channel(testutils_1.ics20.srcPortId, oldChannels.src.channelId);
    t.is((_a = channelSrc.channel) === null || _a === void 0 ? void 0 : _a.state, channel_1.State.STATE_OPEN);
    t.is((_b = channelSrc.channel) === null || _b === void 0 ? void 0 : _b.ordering, testutils_1.ics20.ordering);
    t.is((_d = (_c = channelSrc.channel) === null || _c === void 0 ? void 0 : _c.counterparty) === null || _d === void 0 ? void 0 : _d.channelId, oldChannels.dest.channelId);
    const channelDest = await newLink.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, oldChannels.dest.channelId);
    t.is((_e = channelDest.channel) === null || _e === void 0 ? void 0 : _e.state, channel_1.State.STATE_OPEN);
    t.is((_f = channelDest.channel) === null || _f === void 0 ? void 0 : _f.ordering, testutils_1.ics20.ordering);
    t.is((_h = (_g = channelDest.channel) === null || _g === void 0 ? void 0 : _g.counterparty) === null || _h === void 0 ? void 0 : _h.channelId, oldChannels.src.channelId);
    // Check everything is fine by creating a new channel
    // switch src and dest just to test another path
    const newChannels = await newLink.createChannel('B', testutils_1.ics20.destPortId, testutils_1.ics20.srcPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    t.notDeepEqual(newChannels.dest, oldChannels.src);
});
ava_1.default.serial('reuse existing connections with partially open channel', async (t) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [src, dest] = await testutils_1.setup();
    const oldLink = await link_1.Link.createWithNewConnections(src, dest);
    const connA = oldLink.endA.connectionID;
    const connB = oldLink.endB.connectionID;
    const { channelId: srcChannelId } = await src.channelOpenInit(testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, connA, testutils_1.ics20.version);
    const proof = await ibcclient_1.prepareChannelHandshake(src, dest, oldLink.endB.clientID, testutils_1.ics20.srcPortId, srcChannelId);
    const { channelId: destChannelId } = await dest.channelOpenTry(testutils_1.ics20.destPortId, { portId: testutils_1.ics20.srcPortId, channelId: srcChannelId }, testutils_1.ics20.ordering, connB, testutils_1.ics20.version, testutils_1.ics20.version, proof);
    const newLink = await link_1.Link.createWithExistingConnections(src, dest, connA, connB);
    const channelSrc = await newLink.endA.client.query.ibc.channel.channel(testutils_1.ics20.srcPortId, srcChannelId);
    t.is((_a = channelSrc.channel) === null || _a === void 0 ? void 0 : _a.state, channel_1.State.STATE_INIT);
    t.is((_b = channelSrc.channel) === null || _b === void 0 ? void 0 : _b.ordering, testutils_1.ics20.ordering);
    // Counterparty channel ID not yet known
    t.is((_d = (_c = channelSrc.channel) === null || _c === void 0 ? void 0 : _c.counterparty) === null || _d === void 0 ? void 0 : _d.channelId, '');
    const channelDest = await newLink.endB.client.query.ibc.channel.channel(testutils_1.ics20.destPortId, destChannelId);
    t.is((_e = channelDest.channel) === null || _e === void 0 ? void 0 : _e.state, channel_1.State.STATE_TRYOPEN);
    t.is((_f = channelDest.channel) === null || _f === void 0 ? void 0 : _f.ordering, testutils_1.ics20.ordering);
    t.is((_h = (_g = channelDest.channel) === null || _g === void 0 ? void 0 : _g.counterparty) === null || _h === void 0 ? void 0 : _h.channelId, srcChannelId);
    // Check everything is fine by creating a new channel
    // switch src and dest just to test another path
    const newChannels = await newLink.createChannel('B', testutils_1.ics20.destPortId, testutils_1.ics20.srcPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    t.notDeepEqual(newChannels.dest, {
        portId: testutils_1.ics20.srcPortId,
        channelId: srcChannelId,
    });
});
ava_1.default.serial('errors when reusing an invalid connection', async (t) => {
    const [src, dest] = await testutils_1.setup();
    // Make sure valid connections do exist
    await link_1.Link.createWithNewConnections(src, dest);
    const connA = 'whatever';
    const connB = 'unreal';
    await t.throwsAsync(() => link_1.Link.createWithExistingConnections(src, dest, connA, connB));
});
ava_1.default.serial(`errors when reusing connections on the same node`, async (t) => {
    const [src, dest] = await testutils_1.setup();
    const oldLink = await link_1.Link.createWithNewConnections(src, dest);
    const connA = oldLink.endA.connectionID;
    await t.throwsAsync(() => link_1.Link.createWithExistingConnections(src, src, connA, connA));
});
ava_1.default.serial(`errors when reusing connections which don’t match`, async (t) => {
    const [src, dest] = await testutils_1.setup();
    const oldLink1 = await link_1.Link.createWithNewConnections(src, dest);
    const connA = oldLink1.endA.connectionID;
    const oldLink2 = await link_1.Link.createWithNewConnections(src, dest);
    const connB = oldLink2.endB.connectionID;
    await t.throwsAsync(() => link_1.Link.createWithExistingConnections(src, dest, connA, connB));
});
ava_1.default.serial('submit multiple tx, get unreceived packets', async (t) => {
    // setup a channel
    const [nodeA, nodeB] = await testutils_1.setup();
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB);
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    // no packets here
    const noPackets = await link.endA.querySentPackets();
    t.is(noPackets.length, 0);
    // let's make 3 transfer tx at different heights
    const amounts = [1000, 2222, 3456];
    const txHeights = await testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels.src, amounts);
    // ensure these are different
    t.assert(txHeights[1] > txHeights[0], txHeights.toString());
    t.assert(txHeights[2] > txHeights[1], txHeights.toString());
    // need to wait briefly for it to be indexed
    await nodeA.waitOneBlock();
    // now query for all packets
    const packets = await link.getPendingPackets('A');
    t.is(packets.length, 3);
    t.deepEqual(packets.map(({ height }) => height), txHeights);
    // ensure the sender is set properly
    for (const packet of packets) {
        t.is(packet.sender, nodeA.senderAddress);
    }
    // ensure no acks yet
    const preAcks = await link.getPendingAcks('B');
    t.is(preAcks.length, 0);
    // let's pre-update to test conditional logic (no need to update below)
    await nodeA.waitOneBlock();
    await link.updateClient('A');
    // submit 2 of them (out of order)
    const submit = [packets[0], packets[2]];
    const txAcks = await link.relayPackets('A', submit);
    t.is(txAcks.length, 2);
    // need to wait briefly for it to be indexed
    await nodeA.waitOneBlock();
    // ensure only one marked pending (for tx1)
    const postPackets = await link.getPendingPackets('A');
    t.is(postPackets.length, 1);
    t.is(postPackets[0].height, txHeights[1]);
    // ensure acks can be queried
    const acks = await link.getPendingAcks('B');
    t.is(acks.length, 2);
    // submit one of the acks, without waiting (it must update client)
    await link.relayAcks('B', acks.slice(0, 1));
    // ensure only one ack is still pending
    const postAcks = await link.getPendingAcks('B');
    t.is(postAcks.length, 1);
    // and it matches the one we did not send
    t.deepEqual(postAcks[0], acks[1]);
});
ava_1.default.serial('submit multiple tx on multiple channels, get unreceived packets', async (t) => {
    const logger = new testutils_1.TestLogger();
    // setup a channel
    const [nodeA, nodeB] = await testutils_1.setup(logger);
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    const channels1 = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    const channels2 = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    t.not(channels1.src.channelId, channels2.src.channelId);
    // no packets here
    const noPackets = await link.endA.querySentPackets();
    t.is(noPackets.length, 0);
    // let's make 3 transfer tx at different heights on each channel pair
    const amounts = [1000, 2222, 3456];
    const tx1 = await testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels1.src, amounts);
    const tx2 = await testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels2.src, amounts);
    const txHeights = {
        channels1: tx1.map((height) => ({
            height,
            channelId: channels1.src.channelId,
        })),
        channels2: tx2.map((height) => ({
            height,
            channelId: channels2.src.channelId,
        })),
    };
    // need to wait briefly for it to be indexed
    await utils_1.sleep(100);
    // now query for all packets, ensuring we mapped the channels properly
    const packets = await link.getPendingPackets('A');
    t.is(packets.length, 6);
    t.deepEqual(packets.map(({ height, packet }) => ({
        height,
        channelId: packet.sourceChannel,
    })), [...txHeights.channels1, ...txHeights.channels2]);
    // ensure the sender is set properly
    for (const packet of packets) {
        t.is(packet.sender, nodeA.senderAddress);
    }
    // ensure no acks yet
    const preAcks = await link.getPendingAcks('B');
    t.is(preAcks.length, 0);
    // submit 4 of them (out of order) - make sure not to use same sequences on both sides
    const packetsToSubmit = [packets[0], packets[1], packets[4], packets[5]];
    const txAcks = await link.relayPackets('A', packetsToSubmit);
    t.is(txAcks.length, 4);
    await nodeA.waitOneBlock();
    // ensure only two marked pending (for tx1)
    const postPackets = await link.getPendingPackets('A');
    t.is(postPackets.length, 2);
    t.is(postPackets[0].height, txHeights.channels1[2].height);
    t.is(postPackets[1].height, txHeights.channels2[0].height);
    // ensure acks can be queried
    const acks = await link.getPendingAcks('B');
    t.is(acks.length, 4);
    // make sure we ack on different channels (and different sequences)
    t.not(acks[0].originalPacket.sourceChannel, acks[3].originalPacket.sourceChannel);
    t.not(acks[0].originalPacket.sequence, acks[3].originalPacket.sequence);
    await link.relayAcks('B', [acks[0], acks[3]]);
    await nodeA.waitOneBlock();
    // ensure only two acks are still pending
    const postAcks = await link.getPendingAcks('B');
    t.is(postAcks.length, 2);
    // and it matches the ones we did not send
    t.deepEqual(postAcks[0], acks[1]);
    t.deepEqual(postAcks[1], acks[2]);
});
ava_1.default.serial('updateClientIfStale only runs if it is too long since an update', async (t) => {
    // setup
    const logger = new testutils_1.TestLogger();
    const [nodeA, nodeB] = await testutils_1.setup(logger);
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    // height before waiting
    const heightA = (await nodeA.latestHeader()).height;
    const heightB = (await nodeB.latestHeader()).height;
    // wait a few seconds so we can get stale ones
    await utils_1.sleep(3000);
    // we definitely have updated within the last 1000 seconds, this should do nothing
    const noUpdateA = await link.updateClientIfStale('A', 1000);
    t.is(noUpdateA, null);
    const noUpdateB = await link.updateClientIfStale('B', 1000);
    t.is(noUpdateB, null);
    // we haven't updated in the last 2 seconds, this should trigger the update
    const updateA = await link.updateClientIfStale('A', 2);
    utils_1.assert(updateA);
    t.assert(updateA.revisionHeight.toNumber() > heightA);
    const updateB = await link.updateClientIfStale('B', 2);
    utils_1.assert(updateB);
    t.assert(updateB.revisionHeight.toNumber() > heightB);
});
ava_1.default.serial('checkAndRelayPacketsAndAcks relays packets properly', async (t) => {
    const logger = new testutils_1.TestLogger();
    const [nodeA, nodeB] = await testutils_1.setup(logger);
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    const checkPending = async (packA, packB, ackA, ackB) => {
        const packetsA = await link.getPendingPackets('A');
        t.is(packetsA.length, packA);
        const packetsB = await link.getPendingPackets('B');
        t.is(packetsB.length, packB);
        const acksA = await link.getPendingAcks('A');
        t.is(acksA.length, ackA);
        const acksB = await link.getPendingAcks('B');
        t.is(acksB.length, ackB);
    };
    // no packets here
    await checkPending(0, 0, 0, 0);
    // ensure no problems running relayer with no packets
    await link.checkAndRelayPacketsAndAcks({});
    // send 3 from A -> B
    const amountsA = [1000, 2222, 3456];
    const txHeightsA = await testutils_1.transferTokens(nodeA, testutils_1.simapp.denomFee, nodeB, testutils_1.wasmd.prefix, channels.src, amountsA, 5000 // never time out
    );
    // send 2 from B -> A
    const amountsB = [76543, 12345];
    const txHeightsB = await testutils_1.transferTokens(nodeB, testutils_1.wasmd.denomFee, nodeA, testutils_1.simapp.prefix, channels.dest, amountsB, 5000 // never time out
    );
    await nodeA.waitOneBlock();
    // ensure these packets are present in query
    await checkPending(3, 2, 0, 0);
    // let's one on each side (should filter only the last == minHeight)
    const relayFrom = {
        packetHeightA: txHeightsA[2],
        packetHeightB: txHeightsB[1],
    };
    // check the result here and ensure it is after the latest height
    const nextRelay = await link.checkAndRelayPacketsAndAcks(relayFrom);
    // next acket is more recent than the transactions
    utils_1.assert(nextRelay.packetHeightA);
    t.assert(nextRelay.packetHeightA > txHeightsA[2]);
    utils_1.assert(nextRelay.packetHeightB);
    // since we don't wait a block after this transfer, it may be the same
    t.assert(nextRelay.packetHeightB >= txHeightsB[1]);
    // next ack queries is more recent than the packet queries
    utils_1.assert(nextRelay.ackHeightA);
    t.assert(nextRelay.ackHeightA > nextRelay.packetHeightA);
    utils_1.assert(nextRelay.ackHeightB);
    t.assert(nextRelay.ackHeightB > nextRelay.packetHeightB);
    // ensure those packets were sent, and their acks as well
    await checkPending(2, 1, 0, 0);
    // if we send again with the return of this last relay, we don't get anything new
    await link.checkAndRelayPacketsAndAcks(nextRelay);
    await checkPending(2, 1, 0, 0);
    // sent the remaining packets (no minimum)
    await link.checkAndRelayPacketsAndAcks({});
    // ensure those packets were sent, and their acks as well
    await checkPending(0, 0, 0, 0);
});
ava_1.default.serial('timeout expired packets', async (t) => {
    const logger = new testutils_1.TestLogger();
    const [nodeA, nodeB] = await testutils_1.setup(logger);
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    // no packets here
    const noPackets = await link.endA.querySentPackets();
    t.is(noPackets.length, 0);
    // some basic setup for the transfers
    const recipient = testutils_1.randomAddress(testutils_1.wasmd.prefix);
    const timeoutDestHeight = await nodeB.timeoutHeight(2);
    const submitDestHeight = await nodeB.timeoutHeight(500);
    const amounts = [1000, 2222, 3456];
    const timeoutHeights = [
        submitDestHeight,
        timeoutDestHeight,
        submitDestHeight,
    ];
    const timedOut = utils_2.secondsFromDateNanos(await nodeB.currentTime()) + 1;
    const plentyTime = timedOut + 3000;
    const timeoutTimes = [timedOut, plentyTime, plentyTime];
    // Note: 1st times out with time, 2nd with height, 3rd is valid
    // let's make 3 transfer tx at different heights
    const txHeights = [];
    for (let i = 0; i < amounts.length; ++i) {
        const token = { amount: amounts[i].toString(), denom: testutils_1.simapp.denomFee };
        const { height } = await nodeA.transferTokens(channels.src.portId, channels.src.channelId, token, recipient, timeoutHeights[i], timeoutTimes[i]);
        txHeights.push(height);
    }
    // ensure these are different
    t.assert(txHeights[1] > txHeights[0], txHeights.toString());
    t.assert(txHeights[2] > txHeights[1], txHeights.toString());
    // need to wait briefly for it to be indexed
    await utils_1.sleep(100);
    // now query for all packets
    const packets = await link.getPendingPackets('A');
    t.is(packets.length, 3);
    t.deepEqual(packets.map(({ height }) => height), txHeights);
    // ensure no acks yet
    const preAcks = await link.getPendingAcks('B');
    t.is(preAcks.length, 0);
    // wait to trigger timeout
    await nodeA.waitOneBlock();
    await nodeA.waitOneBlock();
    await nodeA.waitOneBlock();
    // get the new state on dest (and give a little lee-way - 2 blocks / 1 second)
    const currentHeight = await link.endB.client.timeoutHeight(2);
    const currentTime = utils_2.secondsFromDateNanos(await link.endB.client.currentTime()) + 1;
    const { toSubmit, toTimeout } = utils_2.splitPendingPackets(currentHeight, currentTime, packets);
    t.is(toSubmit.length, 1);
    t.is(toTimeout.length, 2);
    // submit the ones which didn't timeout
    const txAcks = await link.relayPackets('A', toSubmit);
    t.is(txAcks.length, 1);
    // one completed after relay
    const afterRelay = await link.getPendingPackets('A');
    t.is(afterRelay.length, 2);
    // try to submit the one which did timeout
    await t.throwsAsync(() => link.relayPackets('A', toTimeout));
    // timeout remaining packet
    await link.timeoutPackets('A', toTimeout);
    // nothing left after timeout
    const afterTimeout = await link.getPendingPackets('A');
    t.is(afterTimeout.length, 0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9saW5rLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBOEM7QUFDOUMsOENBQXVCO0FBRXZCLGtFQUE2RDtBQUU3RCwyQ0FBc0Q7QUFDdEQsaUNBQThDO0FBQzlDLDJDQVFxQjtBQUNyQixtQ0FBb0U7QUFFcEUsYUFBSSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekQsTUFBTSxNQUFNLEdBQUcsSUFBSSxzQkFBVSxFQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLGlCQUFLLEVBQUUsQ0FBQztJQUVsQyxNQUFNLElBQUksR0FBRyxNQUFNLFdBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLDRDQUE0QztJQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlFLGlFQUFpRTtJQUNqRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsNkJBQTZCO0lBQzdCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3Qiw2QkFBNkI7SUFFN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxN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