// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { defineStore } from 'pinia'
import {
  EventGrant,
  EventRevoke,
  GenericAuthorization,
  Grant,
  GrantAuthorization
} from 'ts-client/cosmos.authz.v1beta1/types'

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

const usePiniaStore = defineStore('cosmos.authz.v1beta1', piniaStore)

export default usePiniaStore
