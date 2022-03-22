// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposalWithDeposit,
  DelegationDelegatorReward,
  DelegatorStartingInfo,
  DelegatorStartingInfoRecord,
  DelegatorWithdrawInfo,
  FeePool,
  Params,
  ValidatorAccumulatedCommission,
  ValidatorAccumulatedCommissionRecord,
  ValidatorCurrentRewards,
  ValidatorCurrentRewardsRecord,
  ValidatorHistoricalRewards,
  ValidatorHistoricalRewardsRecord,
  ValidatorOutstandingRewards,
  ValidatorOutstandingRewardsRecord,
  ValidatorSlashEvent,
  ValidatorSlashEventRecord,
  ValidatorSlashEvents
} from '@ignt/client/cosmos.distribution.v1beta1/types'
import { defineStore } from 'pinia'

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

const usePiniaStore = defineStore('cosmos.distribution.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
