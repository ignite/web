// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  AllowedMsgAllowance,
  BasicAllowance,
  Grant,
  PeriodicAllowance
} from 'ts-client/cosmos.feegrant.v1beta1/types'

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

const usePiniaStore = defineStore('cosmos.feegrant.v1beta1', piniaStore)

export default usePiniaStore
