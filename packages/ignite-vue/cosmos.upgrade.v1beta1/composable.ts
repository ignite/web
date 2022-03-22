// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.upgrade.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryCurrentPlanType = typeof Module.prototype.queryCurrentPlan
type QueryAppliedPlanType = typeof Module.prototype.queryAppliedPlan
type QueryUpgradedConsensusStateType =
  typeof Module.prototype.queryUpgradedConsensusState
type QueryModuleVersionsType = typeof Module.prototype.queryModuleVersions

type Response = {
  $s: Store<'cosmos.upgrade.v1beta1', PiniaState, {}, {}>

  queryCurrentPlan: QueryCurrentPlanType
  queryAppliedPlan: QueryAppliedPlanType
  queryUpgradedConsensusState: QueryUpgradedConsensusStateType
  queryModuleVersions: QueryModuleVersionsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryCurrentPlan,

    queryAppliedPlan,

    queryUpgradedConsensusState,

    queryModuleVersions
  } = $ignt.CosmosUpgradeV1Beta1

  queryCurrentPlan = queryCurrentPlan.bind($ignt.CosmosUpgradeV1Beta1)

  queryAppliedPlan = queryAppliedPlan.bind($ignt.CosmosUpgradeV1Beta1)

  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(
    $ignt.CosmosUpgradeV1Beta1
  )

  queryModuleVersions = queryModuleVersions.bind($ignt.CosmosUpgradeV1Beta1)

  return {
    $s,

    queryCurrentPlan,

    queryAppliedPlan,

    queryUpgradedConsensusState,

    queryModuleVersions
  }
}

export { useModule }
