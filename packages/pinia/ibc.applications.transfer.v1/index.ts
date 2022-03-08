// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  DenomTrace,
  Params
} from 'ts-client/ibc.applications.transfer.v1/types'

type PiniaState = {
  DenomTraceAll: DenomTrace[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      DenomTraceAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('ibc.applications.transfer.v1', piniaStore)

export default usePiniaStore
