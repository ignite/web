// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.tx.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type ServiceSimulateType = typeof Module.prototype.serviceSimulate
type ServiceGetTxType = typeof Module.prototype.serviceGetTx
type ServiceBroadcastTxType = typeof Module.prototype.serviceBroadcastTx
type ServiceGetTxsEventType = typeof Module.prototype.serviceGetTxsEvent

type Response = {
  $s: Store<'cosmos.tx.v1beta1', PiniaState, {}, {}>

  serviceSimulate: ServiceSimulateType
  serviceGetTx: ServiceGetTxType
  serviceBroadcastTx: ServiceBroadcastTxType
  serviceGetTxsEvent: ServiceGetTxsEventType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent
  } = $ignt.CosmosTxV1Beta1

  serviceSimulate = serviceSimulate.bind($ignt.CosmosTxV1Beta1)

  serviceGetTx = serviceGetTx.bind($ignt.CosmosTxV1Beta1)

  serviceBroadcastTx = serviceBroadcastTx.bind($ignt.CosmosTxV1Beta1)

  serviceGetTxsEvent = serviceGetTxsEvent.bind($ignt.CosmosTxV1Beta1)

  return {
    $s,

    serviceSimulate,

    serviceGetTx,

    serviceBroadcastTx,

    serviceGetTxsEvent
  }
}

export { useModule }
