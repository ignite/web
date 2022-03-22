// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  ClientPaths,
  ConnectionEnd,
  ConnectionPaths,
  Counterparty,
  IdentifiedConnection,
  Params,
  Version
} from '@ignt/client/ibc.core.connection.v1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  ConnectionEndAll: ConnectionEnd[]
  IdentifiedConnectionAll: IdentifiedConnection[]
  CounterpartyAll: Counterparty[]
  ClientPathsAll: ClientPaths[]
  ConnectionPathsAll: ConnectionPaths[]
  VersionAll: Version[]
  ParamsAll: Params[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      ConnectionEndAll: [],
      IdentifiedConnectionAll: [],
      CounterpartyAll: [],
      ClientPathsAll: [],
      ConnectionPathsAll: [],
      VersionAll: [],
      ParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('ibc.core.connection.v1', piniaStore)

export { PiniaState, usePiniaStore }
