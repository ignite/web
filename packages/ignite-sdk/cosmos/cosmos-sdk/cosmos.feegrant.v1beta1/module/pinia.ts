// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { BasicAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { PeriodicAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { AllowedMsgAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { Grant } from './types/cosmos/feegrant/v1beta1/feegrant'

type PiniaState = {
  BasicAllowanceAll: BasicAllowance[]
  PeriodicAllowanceAll: PeriodicAllowance[]
  AllowedMsgAllowanceAll: AllowedMsgAllowance[]
  GrantAll: Grant[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      BasicAllowanceAll: [],
      PeriodicAllowanceAll: [],
      AllowedMsgAllowanceAll: [],
      GrantAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
