// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/ibc.core.client.v1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryClientStateType = typeof Module.prototype.queryClientState
type QueryClientStatesType = typeof Module.prototype.queryClientStates
type QueryConsensusStateType = typeof Module.prototype.queryConsensusState
type QueryConsensusStatesType = typeof Module.prototype.queryConsensusStates
type QueryClientStatusType = typeof Module.prototype.queryClientStatus
type QueryClientParamsType = typeof Module.prototype.queryClientParams
type QueryUpgradedClientStateType =
  typeof Module.prototype.queryUpgradedClientState
type QueryUpgradedConsensusStateType =
  typeof Module.prototype.queryUpgradedConsensusState

type Response = {
  $s: Store<'ibc.core.client.v1', PiniaState, {}, {}>

  queryClientState: QueryClientStateType
  queryClientStates: QueryClientStatesType
  queryConsensusState: QueryConsensusStateType
  queryConsensusStates: QueryConsensusStatesType
  queryClientStatus: QueryClientStatusType
  queryClientParams: QueryClientParamsType
  queryUpgradedClientState: QueryUpgradedClientStateType
  queryUpgradedConsensusState: QueryUpgradedConsensusStateType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryClientState,

    queryClientStates,

    queryConsensusState,

    queryConsensusStates,

    queryClientStatus,

    queryClientParams,

    queryUpgradedClientState,

    queryUpgradedConsensusState
  } = $ignt.IbcCoreClientV1

  queryClientState = queryClientState.bind($ignt.IbcCoreClientV1)

  queryClientStates = queryClientStates.bind($ignt.IbcCoreClientV1)

  queryConsensusState = queryConsensusState.bind($ignt.IbcCoreClientV1)

  queryConsensusStates = queryConsensusStates.bind($ignt.IbcCoreClientV1)

  queryClientStatus = queryClientStatus.bind($ignt.IbcCoreClientV1)

  queryClientParams = queryClientParams.bind($ignt.IbcCoreClientV1)

  queryUpgradedClientState = queryUpgradedClientState.bind(
    $ignt.IbcCoreClientV1
  )

  queryUpgradedConsensusState = queryUpgradedConsensusState.bind(
    $ignt.IbcCoreClientV1
  )

  return {
    $s,

    queryClientState,

    queryClientStates,

    queryConsensusState,

    queryConsensusStates,

    queryClientStatus,

    queryClientParams,

    queryUpgradedClientState,

    queryUpgradedConsensusState
  }
}

export { useModule }
