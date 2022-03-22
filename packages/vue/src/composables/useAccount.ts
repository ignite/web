import { Account, SigningStargateClient } from '@cosmjs/stargate'
import { EventEmitter } from 'events'
import { computed, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'

import { useAddress } from '.'
import useIgnite from './useIgnite'

type Response = {
  acc: Ref<Account | undefined>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default async function ({ $s }: Params): Promise<Response> {
  // state
  let acc = ref<Account | undefined>()

  // composables
  let { address } = useAddress({ $s })

  // ignite
  let { ignite } = useIgnite()

  // watch
  watch(
    () => address.value,
    async () => {
      if (ignite.value?.signer && address.value) {
        acc.value = (await ignite.value?.signer.getAccount(
          address.value
        )) as Account
      } else {
        acc.value = undefined
      }
    },
    { immediate: true }
  )

  return {
    acc
  }
}
