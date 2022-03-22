// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  Module,
  Validator,
  VersionInfo
} from '@ignt/client/cosmos.base.tendermint.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  ValidatorAll: Validator[]
  VersionInfoAll: VersionInfo[]
  ModuleAll: Module[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ValidatorAll: [],
      VersionInfoAll: [],
      ModuleAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.base.tendermint.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
