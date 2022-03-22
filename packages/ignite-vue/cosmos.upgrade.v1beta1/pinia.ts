// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  CancelSoftwareUpgradeProposal,
  ModuleVersion,
  Plan,
  SoftwareUpgradeProposal
} from '@ignt/client/cosmos.upgrade.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  PlanAll: Plan[]
  SoftwareUpgradeProposalAll: SoftwareUpgradeProposal[]
  CancelSoftwareUpgradeProposalAll: CancelSoftwareUpgradeProposal[]
  ModuleVersionAll: ModuleVersion[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      PlanAll: [],
      SoftwareUpgradeProposalAll: [],
      CancelSoftwareUpgradeProposalAll: [],
      ModuleVersionAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.upgrade.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
