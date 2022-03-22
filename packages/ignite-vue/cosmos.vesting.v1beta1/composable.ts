// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.vesting.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type SendMsgCreateVestingAccountType =
  typeof Module.prototype.sendMsgCreateVestingAccount

type Response = {
  $s: Store<'cosmos.vesting.v1beta1', PiniaState, {}, {}>
  sendMsgCreateVestingAccount: SendMsgCreateVestingAccountType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let { sendMsgCreateVestingAccount } = $ignt.CosmosVestingV1Beta1

  sendMsgCreateVestingAccount = sendMsgCreateVestingAccount.bind(
    $ignt.CosmosVestingV1Beta1
  )

  return {
    $s,

    sendMsgCreateVestingAccount
  }
}

export { useModule }
