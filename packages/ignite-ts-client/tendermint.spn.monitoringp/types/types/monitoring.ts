/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.types'

/** MonitoringPacketData is the IBC packet for monitoring modules */
export interface MonitoringPacketData {
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  monitoringPacket: MonitoringPacket | undefined
}

/** MonitoringPacketAck defines a struct for the packet acknowledgment */
export interface MonitoringPacketAck {}

/** MonitoringPacket is the packet sent over IBC that contains all the signature counts */
export interface MonitoringPacket {
  blockHeight: number
  signatureCounts: SignatureCounts | undefined
}

/** SignatureCounts contains information about signature reporting for a number of blocks */
export interface SignatureCounts {
  blockCount: number
  counts: SignatureCount[]
}

/**
 * SignatureCount contains information of signature reporting for one specific validator with consensus address
 * RelativeSignatures is the sum of all signatures relative to the validator set size
 */
export interface SignatureCount {
  opAddress: string
  RelativeSignatures: string
}

const baseMonitoringPacketData: object = {}

export const MonitoringPacketData = {
  encode(
    message: MonitoringPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monitoringPacket !== undefined) {
      MonitoringPacket.encode(
        message.monitoringPacket,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MonitoringPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMonitoringPacketData } as MonitoringPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.monitoringPacket = MonitoringPacket.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MonitoringPacketData {
    const message = { ...baseMonitoringPacketData } as MonitoringPacketData
    if (
      object.monitoringPacket !== undefined &&
      object.monitoringPacket !== null
    ) {
      message.monitoringPacket = MonitoringPacket.fromJSON(
        object.monitoringPacket
      )
    } else {
      message.monitoringPacket = undefined
    }
    return message
  },

  toJSON(message: MonitoringPacketData): unknown {
    const obj: any = {}
    message.monitoringPacket !== undefined &&
      (obj.monitoringPacket = message.monitoringPacket
        ? MonitoringPacket.toJSON(message.monitoringPacket)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MonitoringPacketData>): MonitoringPacketData {
    const message = { ...baseMonitoringPacketData } as MonitoringPacketData
    if (
      object.monitoringPacket !== undefined &&
      object.monitoringPacket !== null
    ) {
      message.monitoringPacket = MonitoringPacket.fromPartial(
        object.monitoringPacket
      )
    } else {
      message.monitoringPacket = undefined
    }
    return message
  }
}

const baseMonitoringPacketAck: object = {}

export const MonitoringPacketAck = {
  encode(_: MonitoringPacketAck, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MonitoringPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMonitoringPacketAck } as MonitoringPacketAck
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MonitoringPacketAck {
    const message = { ...baseMonitoringPacketAck } as MonitoringPacketAck
    return message
  },

  toJSON(_: MonitoringPacketAck): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MonitoringPacketAck>): MonitoringPacketAck {
    const message = { ...baseMonitoringPacketAck } as MonitoringPacketAck
    return message
  }
}

const baseMonitoringPacket: object = { blockHeight: 0 }

export const MonitoringPacket = {
  encode(message: MonitoringPacket, writer: Writer = Writer.create()): Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).int64(message.blockHeight)
    }
    if (message.signatureCounts !== undefined) {
      SignatureCounts.encode(
        message.signatureCounts,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MonitoringPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMonitoringPacket } as MonitoringPacket
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.signatureCounts = SignatureCounts.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MonitoringPacket {
    const message = { ...baseMonitoringPacket } as MonitoringPacket
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    if (
      object.signatureCounts !== undefined &&
      object.signatureCounts !== null
    ) {
      message.signatureCounts = SignatureCounts.fromJSON(object.signatureCounts)
    } else {
      message.signatureCounts = undefined
    }
    return message
  },

  toJSON(message: MonitoringPacket): unknown {
    const obj: any = {}
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    message.signatureCounts !== undefined &&
      (obj.signatureCounts = message.signatureCounts
        ? SignatureCounts.toJSON(message.signatureCounts)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MonitoringPacket>): MonitoringPacket {
    const message = { ...baseMonitoringPacket } as MonitoringPacket
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    if (
      object.signatureCounts !== undefined &&
      object.signatureCounts !== null
    ) {
      message.signatureCounts = SignatureCounts.fromPartial(
        object.signatureCounts
      )
    } else {
      message.signatureCounts = undefined
    }
    return message
  }
}

const baseSignatureCounts: object = { blockCount: 0 }

export const SignatureCounts = {
  encode(message: SignatureCounts, writer: Writer = Writer.create()): Writer {
    if (message.blockCount !== 0) {
      writer.uint32(8).uint64(message.blockCount)
    }
    for (const v of message.counts) {
      SignatureCount.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SignatureCounts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSignatureCounts } as SignatureCounts
    message.counts = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blockCount = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.counts.push(SignatureCount.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SignatureCounts {
    const message = { ...baseSignatureCounts } as SignatureCounts
    message.counts = []
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = Number(object.blockCount)
    } else {
      message.blockCount = 0
    }
    if (object.counts !== undefined && object.counts !== null) {
      for (const e of object.counts) {
        message.counts.push(SignatureCount.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: SignatureCounts): unknown {
    const obj: any = {}
    message.blockCount !== undefined && (obj.blockCount = message.blockCount)
    if (message.counts) {
      obj.counts = message.counts.map((e) =>
        e ? SignatureCount.toJSON(e) : undefined
      )
    } else {
      obj.counts = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<SignatureCounts>): SignatureCounts {
    const message = { ...baseSignatureCounts } as SignatureCounts
    message.counts = []
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = object.blockCount
    } else {
      message.blockCount = 0
    }
    if (object.counts !== undefined && object.counts !== null) {
      for (const e of object.counts) {
        message.counts.push(SignatureCount.fromPartial(e))
      }
    }
    return message
  }
}

const baseSignatureCount: object = { opAddress: '', RelativeSignatures: '' }

export const SignatureCount = {
  encode(message: SignatureCount, writer: Writer = Writer.create()): Writer {
    if (message.opAddress !== '') {
      writer.uint32(10).string(message.opAddress)
    }
    if (message.RelativeSignatures !== '') {
      writer.uint32(18).string(message.RelativeSignatures)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SignatureCount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSignatureCount } as SignatureCount
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.opAddress = reader.string()
          break
        case 2:
          message.RelativeSignatures = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SignatureCount {
    const message = { ...baseSignatureCount } as SignatureCount
    if (object.opAddress !== undefined && object.opAddress !== null) {
      message.opAddress = String(object.opAddress)
    } else {
      message.opAddress = ''
    }
    if (
      object.RelativeSignatures !== undefined &&
      object.RelativeSignatures !== null
    ) {
      message.RelativeSignatures = String(object.RelativeSignatures)
    } else {
      message.RelativeSignatures = ''
    }
    return message
  },

  toJSON(message: SignatureCount): unknown {
    const obj: any = {}
    message.opAddress !== undefined && (obj.opAddress = message.opAddress)
    message.RelativeSignatures !== undefined &&
      (obj.RelativeSignatures = message.RelativeSignatures)
    return obj
  },

  fromPartial(object: DeepPartial<SignatureCount>): SignatureCount {
    const message = { ...baseSignatureCount } as SignatureCount
    if (object.opAddress !== undefined && object.opAddress !== null) {
      message.opAddress = object.opAddress
    } else {
      message.opAddress = ''
    }
    if (
      object.RelativeSignatures !== undefined &&
      object.RelativeSignatures !== null
    ) {
      message.RelativeSignatures = object.RelativeSignatures
    } else {
      message.RelativeSignatures = ''
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
