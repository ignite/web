// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/ibc.core.channel.v1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryChannelType = typeof Module.prototype.queryChannel
type QueryChannelsType = typeof Module.prototype.queryChannels
type QueryConnectionChannelsType =
  typeof Module.prototype.queryConnectionChannels
type QueryChannelClientStateType =
  typeof Module.prototype.queryChannelClientState
type QueryChannelConsensusStateType =
  typeof Module.prototype.queryChannelConsensusState
type QueryPacketCommitmentType = typeof Module.prototype.queryPacketCommitment
type QueryPacketCommitmentsType = typeof Module.prototype.queryPacketCommitments
type QueryPacketReceiptType = typeof Module.prototype.queryPacketReceipt
type QueryPacketAcknowledgementType =
  typeof Module.prototype.queryPacketAcknowledgement
type QueryPacketAcknowledgementsType =
  typeof Module.prototype.queryPacketAcknowledgements
type QueryUnreceivedPacketsType = typeof Module.prototype.queryUnreceivedPackets
type QueryUnreceivedAcksType = typeof Module.prototype.queryUnreceivedAcks
type QueryNextSequenceReceiveType =
  typeof Module.prototype.queryNextSequenceReceive

type Response = {
  $s: Store<'ibc.core.channel.v1', PiniaState, {}, {}>

  queryChannel: QueryChannelType
  queryChannels: QueryChannelsType
  queryConnectionChannels: QueryConnectionChannelsType
  queryChannelClientState: QueryChannelClientStateType
  queryChannelConsensusState: QueryChannelConsensusStateType
  queryPacketCommitment: QueryPacketCommitmentType
  queryPacketCommitments: QueryPacketCommitmentsType
  queryPacketReceipt: QueryPacketReceiptType
  queryPacketAcknowledgement: QueryPacketAcknowledgementType
  queryPacketAcknowledgements: QueryPacketAcknowledgementsType
  queryUnreceivedPackets: QueryUnreceivedPacketsType
  queryUnreceivedAcks: QueryUnreceivedAcksType
  queryNextSequenceReceive: QueryNextSequenceReceiveType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryChannel,

    queryChannels,

    queryConnectionChannels,

    queryChannelClientState,

    queryChannelConsensusState,

    queryPacketCommitment,

    queryPacketCommitments,

    queryPacketReceipt,

    queryPacketAcknowledgement,

    queryPacketAcknowledgements,

    queryUnreceivedPackets,

    queryUnreceivedAcks,

    queryNextSequenceReceive
  } = $ignt.IbcCoreChannelV1

  queryChannel = queryChannel.bind($ignt.IbcCoreChannelV1)

  queryChannels = queryChannels.bind($ignt.IbcCoreChannelV1)

  queryConnectionChannels = queryConnectionChannels.bind($ignt.IbcCoreChannelV1)

  queryChannelClientState = queryChannelClientState.bind($ignt.IbcCoreChannelV1)

  queryChannelConsensusState = queryChannelConsensusState.bind(
    $ignt.IbcCoreChannelV1
  )

  queryPacketCommitment = queryPacketCommitment.bind($ignt.IbcCoreChannelV1)

  queryPacketCommitments = queryPacketCommitments.bind($ignt.IbcCoreChannelV1)

  queryPacketReceipt = queryPacketReceipt.bind($ignt.IbcCoreChannelV1)

  queryPacketAcknowledgement = queryPacketAcknowledgement.bind(
    $ignt.IbcCoreChannelV1
  )

  queryPacketAcknowledgements = queryPacketAcknowledgements.bind(
    $ignt.IbcCoreChannelV1
  )

  queryUnreceivedPackets = queryUnreceivedPackets.bind($ignt.IbcCoreChannelV1)

  queryUnreceivedAcks = queryUnreceivedAcks.bind($ignt.IbcCoreChannelV1)

  queryNextSequenceReceive = queryNextSequenceReceive.bind(
    $ignt.IbcCoreChannelV1
  )

  return {
    $s,

    queryChannel,

    queryChannels,

    queryConnectionChannels,

    queryChannelClientState,

    queryChannelConsensusState,

    queryPacketCommitment,

    queryPacketCommitments,

    queryPacketReceipt,

    queryPacketAcknowledgement,

    queryPacketAcknowledgements,

    queryUnreceivedPackets,

    queryUnreceivedAcks,

    queryNextSequenceReceive
  }
}

export { useModule }
