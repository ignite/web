// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { WeightedVoteOption } from './types/cosmos/gov/v1beta1/gov'
import { TextProposal } from './types/cosmos/gov/v1beta1/gov'
import { Deposit } from './types/cosmos/gov/v1beta1/gov'
import { Proposal } from './types/cosmos/gov/v1beta1/gov'
import { TallyResult } from './types/cosmos/gov/v1beta1/gov'
import { Vote } from './types/cosmos/gov/v1beta1/gov'
import { DepositParams } from './types/cosmos/gov/v1beta1/gov'
import { VotingParams } from './types/cosmos/gov/v1beta1/gov'
import { TallyParams } from './types/cosmos/gov/v1beta1/gov'

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

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
