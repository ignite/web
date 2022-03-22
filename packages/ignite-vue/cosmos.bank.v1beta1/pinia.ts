// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { V1Beta1Coin } from '@ignt/client/cosmos.bank.v1beta1/rest'
import {
  Balance,
  DenomUnit,
  Input,
  Metadata,
  Output,
  Params,
  SendAuthorization,
  SendEnabled,
  Supply
} from '@ignt/client/cosmos.bank.v1beta1/types'
import { defineStore } from 'pinia'
type PiniaState = {
  SendAuthorizationAll: SendAuthorization[]
  ParamsAll: Params[]
  SendEnabledAll: SendEnabled[]
  InputAll: Input[]
  OutputAll: Output[]
  SupplyAll: Supply[]
  DenomUnitAll: DenomUnit[]
  MetadataAll: Metadata[]
  BalanceAll: Balance[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      SendAuthorizationAll: [],
      ParamsAll: [],
      SendEnabledAll: [],
      InputAll: [],
      OutputAll: [],
      SupplyAll: [],
      DenomUnitAll: [],
      MetadataAll: [],
      BalanceAll: []
    }
  }
}

let c: V1Beta1Coin = {
  amount: '1',
  denom: 'usp'
}

let b: Balance = c as Balance

const usePiniaStore = defineStore('cosmos.bank.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
