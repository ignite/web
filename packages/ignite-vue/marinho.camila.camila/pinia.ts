// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Params } from '@ignt/client/marinho.camila.camila/types'
import { defineStore } from 'pinia'

type PiniaState = {
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('marinho.camila.camila', piniaStore)

export { PiniaState, usePiniaStore }
