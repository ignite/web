// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { SendAuthorization } from './types/cosmos/bank/v1beta1/authz'
import { Params } from './types/cosmos/bank/v1beta1/bank'
import { SendEnabled } from './types/cosmos/bank/v1beta1/bank'
import { Input } from './types/cosmos/bank/v1beta1/bank'
import { Output } from './types/cosmos/bank/v1beta1/bank'
import { Supply } from './types/cosmos/bank/v1beta1/bank'
import { DenomUnit } from './types/cosmos/bank/v1beta1/bank'
import { Metadata } from './types/cosmos/bank/v1beta1/bank'
import { Balance } from './types/cosmos/bank/v1beta1/genesis'

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

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
