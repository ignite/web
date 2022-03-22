// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.base.tendermint.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type ServiceGetNodeInfoType = typeof Module.prototype.serviceGetNodeInfo
type ServiceGetSyncingType = typeof Module.prototype.serviceGetSyncing
type ServiceGetLatestBlockType = typeof Module.prototype.serviceGetLatestBlock
type ServiceGetBlockByHeightType =
  typeof Module.prototype.serviceGetBlockByHeight
type ServiceGetLatestValidatorSetType =
  typeof Module.prototype.serviceGetLatestValidatorSet
type ServiceGetValidatorSetByHeightType =
  typeof Module.prototype.serviceGetValidatorSetByHeight

type Response = {
  $s: Store<'cosmos.base.tendermint.v1beta1', PiniaState, {}, {}>

  serviceGetNodeInfo: ServiceGetNodeInfoType
  serviceGetSyncing: ServiceGetSyncingType
  serviceGetLatestBlock: ServiceGetLatestBlockType
  serviceGetBlockByHeight: ServiceGetBlockByHeightType
  serviceGetLatestValidatorSet: ServiceGetLatestValidatorSetType
  serviceGetValidatorSetByHeight: ServiceGetValidatorSetByHeightType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    serviceGetNodeInfo,

    serviceGetSyncing,

    serviceGetLatestBlock,

    serviceGetBlockByHeight,

    serviceGetLatestValidatorSet,

    serviceGetValidatorSetByHeight
  } = $ignt.CosmosBaseTendermintV1Beta1

  serviceGetNodeInfo = serviceGetNodeInfo.bind(
    $ignt.CosmosBaseTendermintV1Beta1
  )

  serviceGetSyncing = serviceGetSyncing.bind($ignt.CosmosBaseTendermintV1Beta1)

  serviceGetLatestBlock = serviceGetLatestBlock.bind(
    $ignt.CosmosBaseTendermintV1Beta1
  )

  serviceGetBlockByHeight = serviceGetBlockByHeight.bind(
    $ignt.CosmosBaseTendermintV1Beta1
  )

  serviceGetLatestValidatorSet = serviceGetLatestValidatorSet.bind(
    $ignt.CosmosBaseTendermintV1Beta1
  )

  serviceGetValidatorSetByHeight = serviceGetValidatorSetByHeight.bind(
    $ignt.CosmosBaseTendermintV1Beta1
  )

  return {
    $s,

    serviceGetNodeInfo,

    serviceGetSyncing,

    serviceGetLatestBlock,

    serviceGetBlockByHeight,

    serviceGetLatestValidatorSet,

    serviceGetValidatorSetByHeight
  }
}

export { useModule }
