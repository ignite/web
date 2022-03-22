// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.gov.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type SendMsgDepositType = typeof Module.prototype.sendMsgDeposit
type SendMsgSubmitProposalType = typeof Module.prototype.sendMsgSubmitProposal
type SendMsgVoteType = typeof Module.prototype.sendMsgVote
type SendMsgVoteWeightedType = typeof Module.prototype.sendMsgVoteWeighted

type QueryProposalType = typeof Module.prototype.queryProposal
type QueryProposalsType = typeof Module.prototype.queryProposals
type QueryVoteType = typeof Module.prototype.queryVote
type QueryVotesType = typeof Module.prototype.queryVotes
type QueryParamsType = typeof Module.prototype.queryParams
type QueryDepositType = typeof Module.prototype.queryDeposit
type QueryDepositsType = typeof Module.prototype.queryDeposits
type QueryTallyResultType = typeof Module.prototype.queryTallyResult

type Response = {
  $s: Store<'cosmos.gov.v1beta1', PiniaState, {}, {}>
  sendMsgDeposit: SendMsgDepositType
  sendMsgSubmitProposal: SendMsgSubmitProposalType
  sendMsgVote: SendMsgVoteType
  sendMsgVoteWeighted: SendMsgVoteWeightedType

  queryProposal: QueryProposalType
  queryProposals: QueryProposalsType
  queryVote: QueryVoteType
  queryVotes: QueryVotesType
  queryParams: QueryParamsType
  queryDeposit: QueryDepositType
  queryDeposits: QueryDepositsType
  queryTallyResult: QueryTallyResultType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgDeposit,

    sendMsgSubmitProposal,

    sendMsgVote,

    sendMsgVoteWeighted,

    queryProposal,

    queryProposals,

    queryVote,

    queryVotes,

    queryParams,

    queryDeposit,

    queryDeposits,

    queryTallyResult
  } = $ignt.CosmosGovV1Beta1

  sendMsgDeposit = sendMsgDeposit.bind($ignt.CosmosGovV1Beta1)

  sendMsgSubmitProposal = sendMsgSubmitProposal.bind($ignt.CosmosGovV1Beta1)

  sendMsgVote = sendMsgVote.bind($ignt.CosmosGovV1Beta1)

  sendMsgVoteWeighted = sendMsgVoteWeighted.bind($ignt.CosmosGovV1Beta1)

  queryProposal = queryProposal.bind($ignt.CosmosGovV1Beta1)

  queryProposals = queryProposals.bind($ignt.CosmosGovV1Beta1)

  queryVote = queryVote.bind($ignt.CosmosGovV1Beta1)

  queryVotes = queryVotes.bind($ignt.CosmosGovV1Beta1)

  queryParams = queryParams.bind($ignt.CosmosGovV1Beta1)

  queryDeposit = queryDeposit.bind($ignt.CosmosGovV1Beta1)

  queryDeposits = queryDeposits.bind($ignt.CosmosGovV1Beta1)

  queryTallyResult = queryTallyResult.bind($ignt.CosmosGovV1Beta1)

  return {
    $s,

    sendMsgDeposit,

    sendMsgSubmitProposal,

    sendMsgVote,

    sendMsgVoteWeighted,

    queryProposal,

    queryProposals,

    queryVote,

    queryVotes,

    queryParams,

    queryDeposit,

    queryDeposits,

    queryTallyResult
  }
}

export { useModule }
