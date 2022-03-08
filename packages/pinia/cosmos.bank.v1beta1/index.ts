// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
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
} from 'ts-client/cosmos.bank.v1beta1/types'

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

const usePiniaStore = defineStore('cosmos.bank.v1beta1', piniaStore)

export default usePiniaStore
