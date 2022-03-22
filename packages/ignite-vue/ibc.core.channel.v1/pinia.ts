// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  Acknowledgement,
  Channel,
  Counterparty,
  IdentifiedChannel,
  Packet,
  PacketSequence,
  PacketState
} from '@ignt/client/ibc.core.channel.v1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  ChannelAll: Channel[]
  IdentifiedChannelAll: IdentifiedChannel[]
  CounterpartyAll: Counterparty[]
  PacketAll: Packet[]
  PacketStateAll: PacketState[]
  AcknowledgementAll: Acknowledgement[]
  PacketSequenceAll: PacketSequence[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ChannelAll: [],
      IdentifiedChannelAll: [],
      CounterpartyAll: [],
      PacketAll: [],
      PacketStateAll: [],
      AcknowledgementAll: [],
      PacketSequenceAll: []
    }
  }
}

const usePiniaStore = defineStore('ibc.core.channel.v1', piniaStore)

export { PiniaState, usePiniaStore }
