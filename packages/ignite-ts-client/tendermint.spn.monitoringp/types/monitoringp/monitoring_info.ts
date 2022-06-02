/* eslint-disable */
import { SignatureCounts } from '../types/monitoring'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.monitoringp'

export interface MonitoringInfo {
  transmitted: boolean
  signatureCounts: SignatureCounts | undefined
}

const baseMonitoringInfo: object = { transmitted: false }

export const MonitoringInfo = {
  encode(message: MonitoringInfo, writer: Writer = Writer.create()): Writer {
    if (message.transmitted === true) {
      writer.uint32(8).bool(message.transmitted)
    }
    if (message.signatureCounts !== undefined) {
      SignatureCounts.encode(
        message.signatureCounts,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MonitoringInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMonitoringInfo } as MonitoringInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.transmitted = reader.bool()
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

  fromJSON(object: any): MonitoringInfo {
    const message = { ...baseMonitoringInfo } as MonitoringInfo
    if (object.transmitted !== undefined && object.transmitted !== null) {
      message.transmitted = Boolean(object.transmitted)
    } else {
      message.transmitted = false
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

  toJSON(message: MonitoringInfo): unknown {
    const obj: any = {}
    message.transmitted !== undefined && (obj.transmitted = message.transmitted)
    message.signatureCounts !== undefined &&
      (obj.signatureCounts = message.signatureCounts
        ? SignatureCounts.toJSON(message.signatureCounts)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MonitoringInfo>): MonitoringInfo {
    const message = { ...baseMonitoringInfo } as MonitoringInfo
    if (object.transmitted !== undefined && object.transmitted !== null) {
      message.transmitted = object.transmitted
    } else {
      message.transmitted = false
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
