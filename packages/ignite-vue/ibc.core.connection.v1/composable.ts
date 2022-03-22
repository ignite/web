// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/ibc.core.connection.v1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryConnectionType = typeof Module.prototype.queryConnection
type QueryConnectionsType = typeof Module.prototype.queryConnections
type QueryClientConnectionsType = typeof Module.prototype.queryClientConnections
type QueryConnectionClientStateType =
  typeof Module.prototype.queryConnectionClientState
type QueryConnectionConsensusStateType =
  typeof Module.prototype.queryConnectionConsensusState

type Response = {
  $s: Store<'ibc.core.connection.v1', PiniaState, {}, {}>

  queryConnection: QueryConnectionType
  queryConnections: QueryConnectionsType
  queryClientConnections: QueryClientConnectionsType
  queryConnectionClientState: QueryConnectionClientStateType
  queryConnectionConsensusState: QueryConnectionConsensusStateType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryConnection,

    queryConnections,

    queryClientConnections,

    queryConnectionClientState,

    queryConnectionConsensusState
  } = $ignt.IbcCoreConnectionV1

  queryConnection = queryConnection.bind($ignt.IbcCoreConnectionV1)

  queryConnections = queryConnections.bind($ignt.IbcCoreConnectionV1)

  queryClientConnections = queryClientConnections.bind(
    $ignt.IbcCoreConnectionV1
  )

  queryConnectionClientState = queryConnectionClientState.bind(
    $ignt.IbcCoreConnectionV1
  )

  queryConnectionConsensusState = queryConnectionConsensusState.bind(
    $ignt.IbcCoreConnectionV1
  )

  return {
    $s,

    queryConnection,

    queryConnections,

    queryClientConnections,

    queryConnectionClientState,

    queryConnectionConsensusState
  }
}

export { useModule }
