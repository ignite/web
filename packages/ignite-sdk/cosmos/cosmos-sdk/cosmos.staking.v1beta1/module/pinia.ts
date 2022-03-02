// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { StakeAuthorization } from './types/cosmos/staking/v1beta1/authz'
import { StakeAuthorization_Validators } from './types/cosmos/staking/v1beta1/authz'
import { LastValidatorPower } from './types/cosmos/staking/v1beta1/genesis'
import { HistoricalInfo } from './types/cosmos/staking/v1beta1/staking'
import { CommissionRates } from './types/cosmos/staking/v1beta1/staking'
import { Commission } from './types/cosmos/staking/v1beta1/staking'
import { Description } from './types/cosmos/staking/v1beta1/staking'
import { Validator } from './types/cosmos/staking/v1beta1/staking'
import { ValAddresses } from './types/cosmos/staking/v1beta1/staking'
import { DVPair } from './types/cosmos/staking/v1beta1/staking'
import { DVPairs } from './types/cosmos/staking/v1beta1/staking'
import { DVVTriplet } from './types/cosmos/staking/v1beta1/staking'
import { DVVTriplets } from './types/cosmos/staking/v1beta1/staking'
import { Delegation } from './types/cosmos/staking/v1beta1/staking'
import { UnbondingDelegation } from './types/cosmos/staking/v1beta1/staking'
import { UnbondingDelegationEntry } from './types/cosmos/staking/v1beta1/staking'
import { RedelegationEntry } from './types/cosmos/staking/v1beta1/staking'
import { Redelegation } from './types/cosmos/staking/v1beta1/staking'
import { Params } from './types/cosmos/staking/v1beta1/staking'
import { DelegationResponse } from './types/cosmos/staking/v1beta1/staking'
import { RedelegationEntryResponse } from './types/cosmos/staking/v1beta1/staking'
import { RedelegationResponse } from './types/cosmos/staking/v1beta1/staking'
import { Pool } from './types/cosmos/staking/v1beta1/staking'

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

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
