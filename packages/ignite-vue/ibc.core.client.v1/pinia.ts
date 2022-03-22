// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  ClientConsensusStates,
  ClientUpdateProposal,
  ConsensusStateWithHeight,
  GenesisMetadata,
  Height,
  IdentifiedClientState,
  IdentifiedGenesisMetadata,
  Params,
  UpgradeProposal
} from '@ignt/client/ibc.core.client.v1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  IdentifiedClientStateAll: IdentifiedClientState[]
  ConsensusStateWithHeightAll: ConsensusStateWithHeight[]
  ClientConsensusStatesAll: ClientConsensusStates[]
  ClientUpdateProposalAll: ClientUpdateProposal[]
  UpgradeProposalAll: UpgradeProposal[]
  HeightAll: Height[]
  ParamsAll: Params[]
  GenesisMetadataAll: GenesisMetadata[]
  IdentifiedGenesisMetadataAll: IdentifiedGenesisMetadata[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      IdentifiedClientStateAll: [],
      ConsensusStateWithHeightAll: [],
      ClientConsensusStatesAll: [],
      ClientUpdateProposalAll: [],
      UpgradeProposalAll: [],
      HeightAll: [],
      ParamsAll: [],
      GenesisMetadataAll: [],
      IdentifiedGenesisMetadataAll: []
    }
  }
}

const usePiniaStore = defineStore('ibc.core.client.v1', piniaStore)

export { PiniaState, usePiniaStore }
