// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { Equivocation } from './types/cosmos/evidence/v1beta1/evidence'

type PiniaState = {
  EquivocationAll: Equivocation[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      EquivocationAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
