// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  Period,
  PeriodicVestingAccount,
  PermanentLockedAccount
} from 'ts-client/cosmos.vesting.v1beta1/types'

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

const usePiniaStore = defineStore('cosmos.vesting.v1beta1', piniaStore)

export default usePiniaStore
