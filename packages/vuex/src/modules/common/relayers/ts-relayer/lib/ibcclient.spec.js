"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@cosmjs/utils");
const ava_1 = __importDefault(require("ava"));
const tx_1 = require("../codec/ibc/applications/transfer/v1/tx");
const ibcclient_1 = require("./ibcclient");
const link_1 = require("./link");
const testutils_1 = require("./testutils");
const utils_2 = require("./utils");
ava_1.default.serial('create simapp client on wasmd', async (t) => {
    const logger = new testutils_1.TestLogger();
    const [src, dest] = await testutils_1.setup(logger);
    const preClients = await dest.query.ibc.client.allStates();
    const preLen = preClients.clientStates.length;
    const header = await src.latestHeader();
    const conState = utils_2.buildConsensusState(header);
    const cliState = utils_2.buildClientState(await src.getChainId(), 1000, 500, src.revisionHeight(header.height));
    const res = await dest.createTendermintClient(cliState, conState);
    t.assert(res.clientId.startsWith('07-tendermint-'));
    await dest.waitOneBlock();
    const postClients = await dest.query.ibc.client.allStates();
    t.is(postClients.clientStates.length, preLen + 1);
});
ava_1.default.serial('create and update wasmd client on simapp', async (t) => {
    var _a, _b, _c, _d;
    const [src, dest] = await testutils_1.setup();
    const header = await src.latestHeader();
    const conState = utils_2.buildConsensusState(header);
    const cliState = utils_2.buildClientState(await src.getChainId(), 1000, 500, src.revisionHeight(header.height));
    const { clientId } = await dest.createTendermintClient(cliState, conState);
    const state = await dest.query.ibc.client.stateTm(clientId);
    // console.error(state);
    // TODO: check more details?
    t.is((_a = state.latestHeight) === null || _a === void 0 ? void 0 : _a.revisionHeight.toNumber(), header.height);
    t.deepEqual(state.chainId, await src.getChainId());
    // wait for a few blocks, then try
    await utils_1.sleep(1000);
    const newHeader = await src.buildHeader(header.height);
    const newHeight = (_c = (_b = newHeader.signedHeader) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.height;
    t.not(newHeight === null || newHeight === void 0 ? void 0 : newHeight.toNumber(), header.height);
    await dest.updateTendermintClient(clientId, newHeader);
    // any other checks?
    const upstate = await dest.query.ibc.client.stateTm(clientId);
    t.assert(sameLong((_d = upstate.latestHeight) === null || _d === void 0 ? void 0 : _d.revisionHeight, newHeight));
});
// handles both as optional fields, does Long.equal to ignore signed/unsigned difference
function sameLong(a, b) {
    if (a === undefined) {
        return false;
    }
    if (b === undefined) {
        return false;
    }
    return a.equals(b);
}
// measured in seconds
// Note: client parameter is checked against the actual keeper - must use real values from genesis.json
const genesisUnbondingTime = 1814400;
// make 2 clients, and try to establish a connection
ava_1.default.serial('perform connection handshake', async (t) => {
    const [src, dest] = await testutils_1.setup();
    // client on dest -> src
    const args = await ibcclient_1.buildCreateClientArgs(src, genesisUnbondingTime, 5000);
    const { clientId: destClientId } = await dest.createTendermintClient(args.clientState, args.consensusState);
    t.assert(destClientId.startsWith('07-tendermint-'));
    // client on src -> dest
    const args2 = await ibcclient_1.buildCreateClientArgs(dest, genesisUnbondingTime, 5000);
    const { clientId: srcClientId } = await src.createTendermintClient(args2.clientState, args2.consensusState);
    t.assert(srcClientId.startsWith('07-tendermint-'));
    // connectionInit on src
    const { connectionId: srcConnId } = await src.connOpenInit(srcClientId, destClientId);
    t.assert(srcConnId.startsWith('connection-'), srcConnId);
    // connectionTry on dest
    const proof = await ibcclient_1.prepareConnectionHandshake(src, dest, srcClientId, destClientId, srcConnId);
    // now post and hope it is accepted
    const { connectionId: destConnId } = await dest.connOpenTry(destClientId, proof);
    t.assert(destConnId.startsWith('connection-'), destConnId);
    // connectionAck on src
    const proofAck = await ibcclient_1.prepareConnectionHandshake(dest, src, destClientId, srcClientId, destConnId);
    await src.connOpenAck(srcConnId, proofAck);
    // connectionConfirm on dest
    const proofConfirm = await ibcclient_1.prepareConnectionHandshake(src, dest, srcClientId, destClientId, srcConnId);
    await dest.connOpenConfirm(destConnId, proofConfirm);
});
ava_1.default.serial('transfer message and send packets', async (t) => {
    const logger = new testutils_1.TestLogger();
    // set up ics20 channel
    const [nodeA, nodeB] = await testutils_1.setup();
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    t.is(channels.src.portId, testutils_1.ics20.srcPortId);
    // make an account on remote chain, and check it is empty
    const recipient = testutils_1.randomAddress(testutils_1.wasmd.prefix);
    const preBalance = await nodeB.query.bank.unverified.allBalances(recipient);
    t.is(preBalance.length, 0);
    // submit a transfer message
    const destHeight = await nodeB.timeoutHeight(500); // valid for 500 blocks
    const token = { amount: '12345', denom: testutils_1.simapp.denomFee };
    const transferResult = await nodeA.transferTokens(channels.src.portId, channels.src.channelId, token, recipient, destHeight);
    const packets = utils_2.parsePacketsFromLogs(transferResult.logs);
    t.is(packets.length, 1);
    const packet = packets[0];
    // base the proof sequence on prepareChannelHandshake
    // update client on dest
    await nodeA.waitOneBlock();
    const headerHeight = await nodeB.doUpdateClient(link.endB.clientID, nodeA);
    const proof = await nodeA.getPacketProof(packet, headerHeight);
    const relayResult = await nodeB.receivePacket(packet, proof, headerHeight);
    // query balance of recipient (should be "12345" or some odd hash...)
    const postBalance = await nodeB.query.bank.unverified.allBalances(recipient);
    t.is(postBalance.length, 1);
    const recvCoin = postBalance[0];
    t.is(recvCoin.amount, '12345');
    t.assert(recvCoin.denom.startsWith('ibc/'), recvCoin.denom);
    // get the acknowledgement from the receivePacket tx
    const acks = utils_2.parseAcksFromLogs(relayResult.logs);
    t.is(acks.length, 1);
    const ack = acks[0];
    // get an ack proof and return to node A
    await nodeB.waitOneBlock();
    const ackHeaderHeight = await nodeA.doUpdateClient(link.endA.clientID, nodeB);
    const ackProof = await nodeB.getAckProof(ack, ackHeaderHeight);
    await nodeA.acknowledgePacket(ack, ackProof, ackHeaderHeight);
    // Do we need to check the result? or just see the tx succeeded?
});
ava_1.default.serial('tests parsing with multi-message', async (t) => {
    const logger = new testutils_1.TestLogger();
    // set up ics20 channel
    const [nodeA, nodeB] = await testutils_1.setup(logger);
    const link = await link_1.Link.createWithNewConnections(nodeA, nodeB, logger);
    const channels = await link.createChannel('A', testutils_1.ics20.srcPortId, testutils_1.ics20.destPortId, testutils_1.ics20.ordering, testutils_1.ics20.version);
    // make an account on remote chain for testing
    const destAddr = testutils_1.randomAddress(testutils_1.wasmd.prefix);
    const srcAddr = testutils_1.randomAddress(testutils_1.simapp.prefix);
    // submit a send message - no events
    const { logs: sendLogs } = await nodeA.sendTokens(srcAddr, [
        { amount: '5000', denom: testutils_1.simapp.denomFee },
    ]);
    t.assert(logger.verbose.calledWithMatch(/Send tokens to/), logger.verbose.callCount.toString());
    t.assert(logger.debug.calledWithMatch(/Send tokens:/), logger.debug.callCount.toString());
    const sendPackets = utils_2.parsePacketsFromLogs(sendLogs);
    t.is(sendPackets.length, 0);
    const sendAcks = utils_2.parseAcksFromLogs(sendLogs);
    t.is(sendAcks.length, 0);
    // submit 2 transfer messages
    const timeoutHeight = await nodeB.timeoutHeight(500);
    const msg = {
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: tx_1.MsgTransfer.fromPartial({
            sourcePort: channels.src.portId,
            sourceChannel: channels.src.channelId,
            sender: nodeA.senderAddress,
            token: { amount: '6000', denom: testutils_1.simapp.denomFee },
            receiver: destAddr,
            timeoutHeight,
        }),
    };
    const msg2 = {
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: tx_1.MsgTransfer.fromPartial({
            sourcePort: channels.src.portId,
            sourceChannel: channels.src.channelId,
            sender: nodeA.senderAddress,
            token: { amount: '9000', denom: testutils_1.simapp.denomFee },
            receiver: destAddr,
            timeoutHeight,
        }),
    };
    const { logs: multiLog } = await nodeA.sendMultiMsg([msg, msg2], nodeA.fees.updateClient);
    const multiPackets = utils_2.parsePacketsFromLogs(multiLog);
    t.is(multiPackets.length, 2);
    // no acks here
    const multiAcks = utils_2.parseAcksFromLogs(multiLog);
    t.is(multiAcks.length, 0);
    // post them to the other side
    await nodeA.waitOneBlock();
    const headerHeight = await nodeB.doUpdateClient(link.endB.clientID, nodeA);
    const proofs = await Promise.all(multiPackets.map((packet) => nodeA.getPacketProof(packet, headerHeight)));
    const { logs: relayLog } = await nodeB.receivePackets(multiPackets, proofs, headerHeight);
    // no recv packets here
    const relayPackets = utils_2.parsePacketsFromLogs(relayLog);
    t.is(relayPackets.length, 0);
    // but we got 2 acks
    const relayAcks = utils_2.parseAcksFromLogs(relayLog);
    t.is(relayAcks.length, 2);
    // relay them together
    await nodeB.waitOneBlock();
    const ackHeaderHeight = await nodeA.doUpdateClient(link.endA.clientID, nodeB);
    const ackProofs = await Promise.all(relayAcks.map((ack) => nodeB.getAckProof(ack, ackHeaderHeight)));
    await nodeA.acknowledgePackets(relayAcks, ackProofs, ackHeaderHeight);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJjY2xpZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2liY2NsaWVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLDhDQUF1QjtBQUV2QixpRUFBdUU7QUFFdkUsMkNBQWdGO0FBQ2hGLGlDQUE4QjtBQUM5QiwyQ0FPcUI7QUFDckIsbUNBS2lCO0FBRWpCLGFBQUksQ0FBQyxNQUFNLENBQUMsK0JBQStCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sTUFBTSxHQUFHLElBQUksc0JBQVUsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsTUFBTSxpQkFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBRTlDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXhDLE1BQU0sUUFBUSxHQUFHLDJCQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sUUFBUSxHQUFHLHdCQUFnQixDQUMvQixNQUFNLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFDdEIsSUFBSSxFQUNKLEdBQUcsRUFDSCxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbEMsQ0FBQztJQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFn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