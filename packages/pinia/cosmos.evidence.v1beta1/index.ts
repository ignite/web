// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import { Equivocation } from 'ts-client/cosmos.evidence.v1beta1/types'

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

export default usePiniaStore
