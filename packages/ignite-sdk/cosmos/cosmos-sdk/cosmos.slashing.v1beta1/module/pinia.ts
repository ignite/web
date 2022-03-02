// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { SigningInfo } from './types/cosmos/slashing/v1beta1/genesis'
import { ValidatorMissedBlocks } from './types/cosmos/slashing/v1beta1/genesis'
import { MissedBlock } from './types/cosmos/slashing/v1beta1/genesis'
import { ValidatorSigningInfo } from './types/cosmos/slashing/v1beta1/slashing'
import { Params } from './types/cosmos/slashing/v1beta1/slashing'

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

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
