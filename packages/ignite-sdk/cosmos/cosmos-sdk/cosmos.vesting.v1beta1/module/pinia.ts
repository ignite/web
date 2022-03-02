// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { BaseVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { ContinuousVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { DelayedVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { Period } from './types/cosmos/vesting/v1beta1/vesting'
import { PeriodicVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { PermanentLockedAccount } from './types/cosmos/vesting/v1beta1/vesting'

type PiniaState = {
  BaseVestingAccountAll: BaseVestingAccount[]
  ContinuousVestingAccountAll: ContinuousVestingAccount[]
  DelayedVestingAccountAll: DelayedVestingAccount[]
  PeriodAll: Period[]
  PeriodicVestingAccountAll: PeriodicVestingAccount[]
  PermanentLockedAccountAll: PermanentLockedAccount[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      BaseVestingAccountAll: [],
      ContinuousVestingAccountAll: [],
      DelayedVestingAccountAll: [],
      PeriodAll: [],
      PeriodicVestingAccountAll: [],
      PermanentLockedAccountAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
