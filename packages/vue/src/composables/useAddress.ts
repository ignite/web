import { useIgnite } from '@ignt/vue'
import { computed, ComputedRef } from 'vue'

type Response = {
  address: ComputedRef<string | undefined>
  shortAddress: ComputedRef<string>
}

export default function (): Response {
  // ignite
  let {
    state: { ignite }
  } = useIgnite()

  // computed
  let address = computed<string | undefined>(() => ignite.value.addr)
  let shortAddress = computed<string>(
    () => address.value?.substring(0, 10) + '...' + address.value?.slice(-4)
  )

  return {
    address,
    shortAddress
  }
}
