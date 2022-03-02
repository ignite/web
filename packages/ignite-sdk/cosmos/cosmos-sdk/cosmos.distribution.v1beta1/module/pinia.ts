// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { Params } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorHistoricalRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorCurrentRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorAccumulatedCommission } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorOutstandingRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorSlashEvent } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorSlashEvents } from './types/cosmos/distribution/v1beta1/distribution'
import { FeePool } from './types/cosmos/distribution/v1beta1/distribution'
import { CommunityPoolSpendProposal } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegatorStartingInfo } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegationDelegatorReward } from './types/cosmos/distribution/v1beta1/distribution'
import { CommunityPoolSpendProposalWithDeposit } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegatorWithdrawInfo } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorOutstandingRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorAccumulatedCommissionRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorHistoricalRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorCurrentRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { DelegatorStartingInfoRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorSlashEventRecord } from './types/cosmos/distribution/v1beta1/genesis'

type PiniaState = {
  ParamsAll: Params[]
  ValidatorHistoricalRewardsAll: ValidatorHistoricalRewards[]
  ValidatorCurrentRewardsAll: ValidatorCurrentRewards[]
  ValidatorAccumulatedCommissionAll: ValidatorAccumulatedCommission[]
  ValidatorOutstandingRewardsAll: ValidatorOutstandingRewards[]
  ValidatorSlashEventAll: ValidatorSlashEvent[]
  ValidatorSlashEventsAll: ValidatorSlashEvents[]
  FeePoolAll: FeePool[]
  CommunityPoolSpendProposalAll: CommunityPoolSpendProposal[]
  DelegatorStartingInfoAll: DelegatorStartingInfo[]
  DelegationDelegatorRewardAll: DelegationDelegatorReward[]
  CommunityPoolSpendProposalWithDepositAll: CommunityPoolSpendProposalWithDeposit[]
  DelegatorWithdrawInfoAll: DelegatorWithdrawInfo[]
  ValidatorOutstandingRewardsRecordAll: ValidatorOutstandingRewardsRecord[]
  ValidatorAccumulatedCommissionRecordAll: ValidatorAccumulatedCommissionRecord[]
  ValidatorHistoricalRewardsRecordAll: ValidatorHistoricalRewardsRecord[]
  ValidatorCurrentRewardsRecordAll: ValidatorCurrentRewardsRecord[]
  DelegatorStartingInfoRecordAll: DelegatorStartingInfoRecord[]
  ValidatorSlashEventRecordAll: ValidatorSlashEventRecord[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ParamsAll: [],
      ValidatorHistoricalRewardsAll: [],
      ValidatorCurrentRewardsAll: [],
      ValidatorAccumulatedCommissionAll: [],
      ValidatorOutstandingRewardsAll: [],
      ValidatorSlashEventAll: [],
      ValidatorSlashEventsAll: [],
      FeePoolAll: [],
      CommunityPoolSpendProposalAll: [],
      DelegatorStartingInfoAll: [],
      DelegationDelegatorRewardAll: [],
      CommunityPoolSpendProposalWithDepositAll: [],
      DelegatorWithdrawInfoAll: [],
      ValidatorOutstandingRewardsRecordAll: [],
      ValidatorAccumulatedCommissionRecordAll: [],
      ValidatorHistoricalRewardsRecordAll: [],
      ValidatorCurrentRewardsRecordAll: [],
      DelegatorStartingInfoRecordAll: [],
      ValidatorSlashEventRecordAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
