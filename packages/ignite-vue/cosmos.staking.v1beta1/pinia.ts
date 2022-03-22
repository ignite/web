// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  Commission,
  CommissionRates,
  Delegation,
  DelegationResponse,
  Description,
  DVPair,
  DVPairs,
  DVVTriplet,
  DVVTriplets,
  HistoricalInfo,
  LastValidatorPower,
  Params,
  Pool,
  Redelegation,
  RedelegationEntry,
  RedelegationEntryResponse,
  RedelegationResponse,
  StakeAuthorization,
  StakeAuthorization_Validators,
  UnbondingDelegation,
  UnbondingDelegationEntry,
  ValAddresses,
  Validator
} from '@ignt/client/cosmos.staking.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  StakeAuthorizationAll: StakeAuthorization[]
  StakeAuthorization_ValidatorsAll: StakeAuthorization_Validators[]
  LastValidatorPowerAll: LastValidatorPower[]
  HistoricalInfoAll: HistoricalInfo[]
  CommissionRatesAll: CommissionRates[]
  CommissionAll: Commission[]
  DescriptionAll: Description[]
  ValidatorAll: Validator[]
  ValAddressesAll: ValAddresses[]
  DVPairAll: DVPair[]
  DVPairsAll: DVPairs[]
  DVVTripletAll: DVVTriplet[]
  DVVTripletsAll: DVVTriplets[]
  DelegationAll: Delegation[]
  UnbondingDelegationAll: UnbondingDelegation[]
  UnbondingDelegationEntryAll: UnbondingDelegationEntry[]
  RedelegationEntryAll: RedelegationEntry[]
  RedelegationAll: Redelegation[]
  ParamsAll: Params[]
  DelegationResponseAll: DelegationResponse[]
  RedelegationEntryResponseAll: RedelegationEntryResponse[]
  RedelegationResponseAll: RedelegationResponse[]
  PoolAll: Pool[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      StakeAuthorizationAll: [],
      StakeAuthorization_ValidatorsAll: [],
      LastValidatorPowerAll: [],
      HistoricalInfoAll: [],
      CommissionRatesAll: [],
      CommissionAll: [],
      DescriptionAll: [],
      ValidatorAll: [],
      ValAddressesAll: [],
      DVPairAll: [],
      DVPairsAll: [],
      DVVTripletAll: [],
      DVVTripletsAll: [],
      DelegationAll: [],
      UnbondingDelegationAll: [],
      UnbondingDelegationEntryAll: [],
      RedelegationEntryAll: [],
      RedelegationAll: [],
      ParamsAll: [],
      DelegationResponseAll: [],
      RedelegationEntryResponseAll: [],
      RedelegationResponseAll: [],
      PoolAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.staking.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
