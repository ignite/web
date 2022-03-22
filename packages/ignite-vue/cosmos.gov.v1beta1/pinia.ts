// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  Deposit,
  DepositParams,
  Proposal,
  TallyParams,
  TallyResult,
  TextProposal,
  Vote,
  VotingParams,
  WeightedVoteOption
} from '@ignt/client/cosmos.gov.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  WeightedVoteOptionAll: WeightedVoteOption[]
  TextProposalAll: TextProposal[]
  DepositAll: Deposit[]
  ProposalAll: Proposal[]
  TallyResultAll: TallyResult[]
  VoteAll: Vote[]
  DepositParamsAll: DepositParams[]
  VotingParamsAll: VotingParams[]
  TallyParamsAll: TallyParams[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      WeightedVoteOptionAll: [],
      TextProposalAll: [],
      DepositAll: [],
      ProposalAll: [],
      TallyResultAll: [],
      VoteAll: [],
      DepositParamsAll: [],
      VotingParamsAll: [],
      TallyParamsAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.gov.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
