// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Minter, Params } from '@ignt/client/cosmos.mint.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  MinterAll: Minter[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      MinterAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.mint.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
