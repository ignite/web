import { useGaia } from 'cosmos-gaia-vue-client'
import { computed, ComputedRef } from 'vue'

type Response = {
  address: ComputedRef<string | undefined>
  shortAddress: ComputedRef<string>
}

export default function (): Response {
  // gaia
  let { gaia } = useGaia()

  // computed
  let address = computed<string | undefined>(() => gaia.signer.value.addr)
  let shortAddress = computed<string>(
    () => address.value?.substring(0, 10) + '...' + address.value?.slice(-4)
  )

  return {
    address,
    shortAddress
  }
}
