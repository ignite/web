// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.crisis.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type SendMsgVerifyInvariantType = typeof Module.prototype.sendMsgVerifyInvariant

type Response = {
  $s: Store<'cosmos.crisis.v1beta1', PiniaState, {}, {}>
  sendMsgVerifyInvariant: SendMsgVerifyInvariantType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { sendMsgVerifyInvariant } = $ignt.CosmosCrisisV1Beta1

  sendMsgVerifyInvariant = sendMsgVerifyInvariant.bind(
    $ignt.CosmosCrisisV1Beta1
  )

  return {
    $s,

    sendMsgVerifyInvariant
  }
}

export { useModule }
