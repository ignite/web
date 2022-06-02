/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'tendermint.spn.types'

/** MerkelRool represents a Merkel Root in ConsensusState */
export interface MerkelRool {
  hash: string
}

/**
 * ConsensusState represents a Consensus State
 * it is compatible with the dumped state from `appd q ibc client self-consensus-state` command
 */
export interface ConsensusState {
  nextValidatorsHash: string
  timestamp: string
  root: MerkelRool | undefined
}

/** PubKey represents a public key in Validator */
export interface PubKey {
  type: string
  value: string
}

/** Validator represents a validator in ValSet */
export interface Validator {
  proposerPriority: string
  votingPower: string
  pubKey: PubKey | undefined
}

/**
 * ValidatorSet represents a Validator Set
 * it is compatible with the dumped set from `appd q tendermint-validator-set n` command
 */
export interface ValidatorSet {
  validators: Validator[]
}

const baseMerkelRool: object = { hash: '' }

export const MerkelRool = {
  encode(message: MerkelRool, writer: Writer = Writer.create()): Writer {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MerkelRool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMerkelRool } as MerkelRool
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MerkelRool {
    const message = { ...baseMerkelRool } as MerkelRool
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash)
    } else {
      message.hash = ''
    }
    return message
  },

  toJSON(message: MerkelRool): unknown {
    const obj: any = {}
    message.hash !== undefined && (obj.hash = message.hash)
    return obj
  },

  fromPartial(object: DeepPartial<MerkelRool>): MerkelRool {
    const message = { ...baseMerkelRool } as MerkelRool
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash
    } else {
      message.hash = ''
    }
    return message
  }
}

const baseConsensusState: object = { nextValidatorsHash: '', timestamp: '' }

export const ConsensusState = {
  encode(message: ConsensusState, writer: Writer = Writer.create()): Writer {
    if (message.nextValidatorsHash !== '') {
      writer.uint32(10).string(message.nextValidatorsHash)
    }
    if (message.timestamp !== '') {
      writer.uint32(18).string(message.timestamp)
    }
    if (message.root !== undefined) {
      MerkelRool.encode(message.root, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseConsensusState } as ConsensusState
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.nextValidatorsHash = reader.string()
          break
        case 2:
          message.timestamp = reader.string()
          break
        case 3:
          message.root = MerkelRool.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ConsensusState {
    const message = { ...baseConsensusState } as ConsensusState
    if (
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
    ) {
      message.nextValidatorsHash = String(object.nextValidatorsHash)
    } else {
      message.nextValidatorsHash = ''
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp)
    } else {
      message.timestamp = ''
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkelRool.fromJSON(object.root)
    } else {
      message.root = undefined
    }
    return message
  },

  toJSON(message: ConsensusState): unknown {
    const obj: any = {}
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = message.nextValidatorsHash)
    message.timestamp !== undefined && (obj.timestamp = message.timestamp)
    message.root !== undefined &&
      (obj.root = message.root ? MerkelRool.toJSON(message.root) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = { ...baseConsensusState } as ConsensusState
    if (
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
    ) {
      message.nextValidatorsHash = object.nextValidatorsHash
    } else {
      message.nextValidatorsHash = ''
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp
    } else {
      message.timestamp = ''
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkelRool.fromPartial(object.root)
    } else {
      message.root = undefined
    }
    return message
  }
}

const basePubKey: object = { type: '', value: '' }

export const PubKey = {
  encode(message: PubKey, writer: Writer = Writer.create()): Writer {
    if (message.type !== '') {
      writer.uint32(10).string(message.type)
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePubKey } as PubKey
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string()
          break
        case 2:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PubKey {
    const message = { ...basePubKey } as PubKey
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type)
    } else {
      message.type = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: PubKey): unknown {
    const obj: any = {}
    message.type !== undefined && (obj.type = message.type)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = { ...basePubKey } as PubKey
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  }
}

const baseValidator: object = { proposerPriority: '', votingPower: '' }

export const Validator = {
  encode(message: Validator, writer: Writer = Writer.create()): Writer {
    if (message.proposerPriority !== '') {
      writer.uint32(10).string(message.proposerPriority)
    }
    if (message.votingPower !== '') {
      writer.uint32(18).string(message.votingPower)
    }
    if (message.pubKey !== undefined) {
      PubKey.encode(message.pubKey, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseValidator } as Validator
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.proposerPriority = reader.string()
          break
        case 2:
          message.votingPower = reader.string()
          break
        case 3:
          message.pubKey = PubKey.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator
    if (
      object.proposerPriority !== undefined &&
      object.proposerPriority !== null
    ) {
      message.proposerPriority = String(object.proposerPriority)
    } else {
      message.proposerPriority = ''
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = String(object.votingPower)
    } else {
      message.votingPower = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PubKey.fromJSON(object.pubKey)
    } else {
      message.pubKey = undefined
    }
    return message
  },

  toJSON(message: Validator): unknown {
    const obj: any = {}
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = message.proposerPriority)
    message.votingPower !== undefined && (obj.votingPower = message.votingPower)
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? PubKey.toJSON(message.pubKey) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator
    if (
      object.proposerPriority !== undefined &&
      object.proposerPriority !== null
    ) {
      message.proposerPriority = object.proposerPriority
    } else {
      message.proposerPriority = ''
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower
    } else {
      message.votingPower = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PubKey.fromPartial(object.pubKey)
    } else {
      message.pubKey = undefined
    }
    return message
  }
}

const baseValidatorSet: object = {}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: Writer = Writer.create()): Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseValidatorSet } as ValidatorSet
    message.validators = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ValidatorSet {
    const message = { ...baseValidatorSet } as ValidatorSet
    message.validators = []
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {}
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      )
    } else {
      obj.validators = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = { ...baseValidatorSet } as ValidatorSet
    message.validators = []
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e))
      }
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
