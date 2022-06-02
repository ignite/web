import { useIgnite } from 'ignite-vue-client'
import { computed, ComputedRef } from 'vue'

type Response = {
  address: ComputedRef<string | undefined>
  shortAddress: ComputedRef<string>
}

export default function (): Response {
  // ignite
  let { ignite } = useIgnite()

  // computed
  let address = computed<string | undefined>(() => ignite.signer.value.addr)
  let shortAddress = computed<string>(
    () => address.value?.substring(0, 10) + '...' + address.value?.slice(-4)
  )

  return {
    address,
    shortAddress
  }
}
