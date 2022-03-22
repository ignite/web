// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.params.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  $s: Store<'cosmos.params.v1beta1', PiniaState, {}, {}>

  queryParams: QueryParamsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { queryParams } = $ignt.CosmosParamsV1Beta1

  queryParams = queryParams.bind($ignt.CosmosParamsV1Beta1)

  return {
    $s,

    queryParams
  }
}

export { useModule }
