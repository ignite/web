// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.evidence.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type SendMsgSubmitEvidenceType = typeof Module.prototype.sendMsgSubmitEvidence

type QueryEvidenceType = typeof Module.prototype.queryEvidence
type QueryAllEvidenceType = typeof Module.prototype.queryAllEvidence

type Response = {
  $s: Store<'cosmos.evidence.v1beta1', PiniaState, {}, {}>
  sendMsgSubmitEvidence: SendMsgSubmitEvidenceType

  queryEvidence: QueryEvidenceType
  queryAllEvidence: QueryAllEvidenceType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  } = $ignt.CosmosEvidenceV1Beta1

  sendMsgSubmitEvidence = sendMsgSubmitEvidence.bind(
    $ignt.CosmosEvidenceV1Beta1
  )

  queryEvidence = queryEvidence.bind($ignt.CosmosEvidenceV1Beta1)

  queryAllEvidence = queryAllEvidence.bind($ignt.CosmosEvidenceV1Beta1)

  return {
    $s,

    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  }
}

export { useModule }
