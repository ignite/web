// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  ParamChange,
  ParameterChangeProposal
} from '@ignt/client/cosmos.params.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  ParameterChangeProposalAll: ParameterChangeProposal[]
  ParamChangeAll: ParamChange[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ParameterChangeProposalAll: [],
      ParamChangeAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.params.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
