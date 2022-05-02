import { Account } from '@cosmjs/stargate'
import { useGaia } from 'cosmos-gaia-vue-client'
import { Ref, ref, watch } from 'vue'

import { useAddress } from '.'

type Response = {
  acc: Ref<Account | undefined>
}

export default async function (): Promise<Response> {
  // state
  let acc = ref<Account | undefined>()

  // composables
  let { address } = useAddress()

  // gaia
  let { gaia } = useGaia()

  // watch
  watch(
    () => address.value,
    async () => {
      if (gaia.signer && address.value) {
        acc.value = (await gaia.signer.value.client?.getAccount(
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
