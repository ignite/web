// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.slashing.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type SendMsgUnjailType = typeof Module.prototype.sendMsgUnjail

type QueryParamsType = typeof Module.prototype.queryParams
type QuerySigningInfoType = typeof Module.prototype.querySigningInfo
type QuerySigningInfosType = typeof Module.prototype.querySigningInfos

type Response = {
  $s: Store<'cosmos.slashing.v1beta1', PiniaState, {}, {}>
  sendMsgUnjail: SendMsgUnjailType

  queryParams: QueryParamsType
  querySigningInfo: QuerySigningInfoType
  querySigningInfos: QuerySigningInfosType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  } = $ignt.CosmosSlashingV1Beta1

  sendMsgUnjail = sendMsgUnjail.bind($ignt.CosmosSlashingV1Beta1)

  queryParams = queryParams.bind($ignt.CosmosSlashingV1Beta1)

  querySigningInfo = querySigningInfo.bind($ignt.CosmosSlashingV1Beta1)

  querySigningInfos = querySigningInfos.bind($ignt.CosmosSlashingV1Beta1)

  return {
    $s,

    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos
  }
}

export { useModule }
