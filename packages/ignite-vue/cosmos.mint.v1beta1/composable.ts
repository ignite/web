// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.mint.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryParamsType = typeof Module.prototype.queryParams
type QueryInflationType = typeof Module.prototype.queryInflation
type QueryAnnualProvisionsType = typeof Module.prototype.queryAnnualProvisions

type Response = {
  $s: Store<'cosmos.mint.v1beta1', PiniaState, {}, {}>

  queryParams: QueryParamsType
  queryInflation: QueryInflationType
  queryAnnualProvisions: QueryAnnualProvisionsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  } = $ignt.CosmosMintV1Beta1

  queryParams = queryParams.bind($ignt.CosmosMintV1Beta1)

  queryInflation = queryInflation.bind($ignt.CosmosMintV1Beta1)

  queryAnnualProvisions = queryAnnualProvisions.bind($ignt.CosmosMintV1Beta1)

  return {
    $s,

    queryParams,

    queryInflation,

    queryAnnualProvisions
  }
}

export { useModule }
