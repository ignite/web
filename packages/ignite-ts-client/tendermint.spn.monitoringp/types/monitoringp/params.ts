/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { ConsensusState } from '../types/ibc'

export const protobufPackage = 'tendermint.spn.monitoringp'

/** Params defines the parameters for the module. */
export interface Params {
  lastBlockHeight: number
  consumerChainID: string
  consumerConsensusState: ConsensusState | undefined
  consumerUnbondingPeriod: number
  consumerRevisionHeight: number
}

const baseParams: object = {
  lastBlockHeight: 0,
  consumerChainID: '',
  consumerUnbondingPeriod: 0,
  consumerRevisionHeight: 0
}

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.lastBlockHeight !== 0) {
      writer.uint32(8).int64(message.lastBlockHeight)
    }
    if (message.consumerChainID !== '') {
      writer.uint32(18).string(message.consumerChainID)
    }
    if (message.consumerConsensusState !== undefined) {
      ConsensusState.encode(
        message.consumerConsensusState,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.consumerUnbondingPeriod !== 0) {
      writer.uint32(32).int64(message.consumerUnbondingPeriod)
    }
    if (message.consumerRevisionHeight !== 0) {
      writer.uint32(40).uint64(message.consumerRevisionHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lastBlockHeight = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.consumerChainID = reader.string()
          break
        case 3:
          message.consumerConsensusState = ConsensusState.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.consumerUnbondingPeriod = longToNumber(reader.int64() as Long)
          break
        case 5:
          message.consumerRevisionHeight = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params
    if (
      object.lastBlockHeight !== undefined &&
      object.lastBlockHeight !== null
    ) {
      message.lastBlockHeight = Number(object.lastBlockHeight)
    } else {
      message.lastBlockHeight = 0
    }
    if (
      object.consumerChainID !== undefined &&
      object.consumerChainID !== null
    ) {
      message.consumerChainID = String(object.consumerChainID)
    } else {
      message.consumerChainID = ''
    }
    if (
      object.consumerConsensusState !== undefined &&
      object.consumerConsensusState !== null
    ) {
      message.consumerConsensusState = ConsensusState.fromJSON(
        object.consumerConsensusState
      )
    } else {
      message.consumerConsensusState = undefined
    }
    if (
      object.consumerUnbondingPeriod !== undefined &&
      object.consumerUnbondingPeriod !== null
    ) {
      message.consumerUnbondingPeriod = Number(object.consumerUnbondingPeriod)
    } else {
      message.consumerUnbondingPeriod = 0
    }
    if (
      object.consumerRevisionHeight !== undefined &&
      object.consumerRevisionHeight !== null
    ) {
      message.consumerRevisionHeight = Number(object.consumerRevisionHeight)
    } else {
      message.consumerRevisionHeight = 0
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.lastBlockHeight !== undefined &&
      (obj.lastBlockHeight = message.lastBlockHeight)
    message.consumerChainID !== undefined &&
      (obj.consumerChainID = message.consumerChainID)
    message.consumerConsensusState !== undefined &&
      (obj.consumerConsensusState = message.consumerConsensusState
        ? ConsensusState.toJSON(message.consumerConsensusState)
        : undefined)
    message.consumerUnbondingPeriod !== undefined &&
      (obj.consumerUnbondingPeriod = message.consumerUnbondingPeriod)
    message.consumerRevisionHeight !== undefined &&
      (obj.consumerRevisionHeight = message.consumerRevisionHeight)
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    if (
      object.lastBlockHeight !== undefined &&
      object.lastBlockHeight !== null
    ) {
      message.lastBlockHeight = object.lastBlockHeight
    } else {
      message.lastBlockHeight = 0
    }
    if (
      object.consumerChainID !== undefined &&
      object.consumerChainID !== null
    ) {
      message.consumerChainID = object.consumerChainID
    } else {
      message.consumerChainID = ''
    }
    if (
      object.consumerConsensusState !== undefined &&
      object.consumerConsensusState !== null
    ) {
      message.consumerConsensusState = ConsensusState.fromPartial(
        object.consumerConsensusState
      )
    } else {
      message.consumerConsensusState = undefined
    }
    if (
      object.consumerUnbondingPeriod !== undefined &&
      object.consumerUnbondingPeriod !== null
    ) {
      message.consumerUnbondingPeriod = object.consumerUnbondingPeriod
    } else {
      message.consumerUnbondingPeriod = 0
    }
    if (
      object.consumerRevisionHeight !== undefined &&
      object.consumerRevisionHeight !== null
    ) {
      message.consumerRevisionHeight = object.consumerRevisionHeight
    } else {
      message.consumerRevisionHeight = 0
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
