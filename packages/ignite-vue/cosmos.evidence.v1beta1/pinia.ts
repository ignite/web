// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Equivocation } from '@ignt/client/cosmos.evidence.v1beta1/types'
import { defineStore } from 'pinia'

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

const usePiniaStore = defineStore('cosmos.evidence.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
