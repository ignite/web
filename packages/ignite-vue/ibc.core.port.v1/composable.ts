// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/ibc.core.port.v1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type Response = {
  $s: Store<'ibc.core.port.v1', PiniaState, {}, {}>
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {} = $ignt.IbcCorePortV1

  return {
    $s
  }
}

export { useModule }
