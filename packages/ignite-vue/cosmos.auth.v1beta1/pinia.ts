// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  BaseAccount,
  ModuleAccount,
  Params
} from '@ignt/client/cosmos.auth.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  BaseAccountAll: BaseAccount[]
  ModuleAccountAll: ModuleAccount[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      BaseAccountAll: [],
      ModuleAccountAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.auth.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
