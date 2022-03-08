// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  MissedBlock,
  Params,
  SigningInfo,
  ValidatorMissedBlocks,
  ValidatorSigningInfo
} from 'ts-client/cosmos.slashing.v1beta1/types'

type PiniaState = {
  SigningInfoAll: SigningInfo[]
  ValidatorMissedBlocksAll: ValidatorMissedBlocks[]
  MissedBlockAll: MissedBlock[]
  ValidatorSigningInfoAll: ValidatorSigningInfo[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      SigningInfoAll: [],
      ValidatorMissedBlocksAll: [],
      MissedBlockAll: [],
      ValidatorSigningInfoAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.slashing.v1beta1', piniaStore)

export default usePiniaStore
