/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringp'

export interface ConsumerClientID {
  clientID: string
}

const baseConsumerClientID: object = { clientID: '' }

export const ConsumerClientID = {
  encode(message: ConsumerClientID, writer: Writer = Writer.create()): Writer {
    if (message.clientID !== '') {
      writer.uint32(10).string(message.clientID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ConsumerClientID {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseConsumerClientID } as ConsumerClientID
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.clientID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ConsumerClientID {
    const message = { ...baseConsumerClientID } as ConsumerClientID
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = String(object.clientID)
    } else {
      message.clientID = ''
    }
    return message
  },

  toJSON(message: ConsumerClientID): unknown {
    const obj: any = {}
    message.clientID !== undefined && (obj.clientID = message.clientID)
    return obj
  },

  fromPartial(object: DeepPartial<ConsumerClientID>): ConsumerClientID {
    const message = { ...baseConsumerClientID } as ConsumerClientID
    if (object.clientID !== undefined && object.clientID !== null) {
      message.clientID = object.clientID
    } else {
      message.clientID = ''
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
