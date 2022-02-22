import { Account, SigningStargateClient } from '@cosmjs/stargate'
import { EventEmitter } from 'events'
import { computed, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'

import { useAddress } from '.'

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

  // computed
  let spClient = computed<EventEmitter>(() => $s.getters['common/env/client'])
  let stargateClient = computed<SigningStargateClient>(
    () => (spClient.value as any)?.signingClient as SigningStargateClient
  )

  // watch
  watch(
    () => address.value,
    async () => {
      if (stargateClient.value && address.value) {
        acc.value = (await stargateClient.value.getAccount(
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
