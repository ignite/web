// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'

import { GenericAuthorization } from './types/cosmos/authz/v1beta1/authz'
import { Grant } from './types/cosmos/authz/v1beta1/authz'
import { EventGrant } from './types/cosmos/authz/v1beta1/event'
import { EventRevoke } from './types/cosmos/authz/v1beta1/event'
import { GrantAuthorization } from './types/cosmos/authz/v1beta1/genesis'

type PiniaState = {
  GenericAuthorizationAll: GenericAuthorization[]
  GrantAll: Grant[]
  EventGrantAll: EventGrant[]
  EventRevokeAll: EventRevoke[]
  GrantAuthorizationAll: GrantAuthorization[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      GenericAuthorizationAll: [],
      GrantAll: [],
      EventGrantAll: [],
      EventRevokeAll: [],
      GrantAuthorizationAll: []
    }
  }
}

const usePiniaStore = defineStore('module', piniaStore)

export default usePiniaStore
