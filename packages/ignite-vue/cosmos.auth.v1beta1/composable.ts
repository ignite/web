// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from '@ignt/client'
import Module from '@ignt/client/cosmos.auth.v1beta1/module'
import { Store } from 'pinia'

import { PiniaState, usePiniaStore } from './'

type QueryAccountsType = typeof Module.prototype.queryAccounts
type QueryAccountType = typeof Module.prototype.queryAccount
type QueryParamsType = typeof Module.prototype.queryParams

type Response = {
  $s: Store<'cosmos.auth.v1beta1', PiniaState, {}, {}>

  queryAccounts: QueryAccountsType
  queryAccount: QueryAccountType
  queryParams: QueryParamsType
}

type Params = {
  $ignt: Ignite
}

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore()

  let {
    queryAccounts,

    queryAccount,

    queryParams
  } = $ignt.CosmosAuthV1Beta1

  queryAccounts = queryAccounts.bind($ignt.CosmosAuthV1Beta1)

  queryAccount = queryAccount.bind($ignt.CosmosAuthV1Beta1)

  queryParams = queryParams.bind($ignt.CosmosAuthV1Beta1)

  return {
    $s,

    queryAccounts,

    queryAccount,

    queryParams
  }
}

export { useModule }
