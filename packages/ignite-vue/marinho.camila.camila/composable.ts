// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/marinho.camila.camila/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  $s: Store<'marinho.camila.camila', PiniaState, {}, {}>

  queryParams: QueryParamsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { queryParams } = $ignt.MarinhoCamilaCamila

  queryParams = queryParams.bind($ignt.MarinhoCamilaCamila)

  return {
    $s,

    queryParams
  }
}

export { useModule }
