/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringp'

export interface ConnectionChannelID {
  channelID: string
}

const baseConnectionChannelID: object = { channelID: '' }

export const ConnectionChannelID = {
  encode(
    message: ConnectionChannelID,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channelID !== '') {
      writer.uint32(10).string(message.channelID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ConnectionChannelID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseConnectionChannelID } as ConnectionChannelID
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.channelID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ConnectionChannelID {
    const message = { ...baseConnectionChannelID } as ConnectionChannelID
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID)
    } else {
      message.channelID = ''
    }
    return message
  },

  toJSON(message: ConnectionChannelID): unknown {
    const obj: any = {}
    message.channelID !== undefined && (obj.channelID = message.channelID)
    return obj
  },

  fromPartial(object: DeepPartial<ConnectionChannelID>): ConnectionChannelID {
    const message = { ...baseConnectionChannelID } as ConnectionChannelID
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID
    } else {
      message.channelID = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
