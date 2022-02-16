import { computed, ComputedRef } from 'vue'
import { Store } from 'vuex'

type Response = {
  address: ComputedRef<string>
  shortAddress: ComputedRef<string>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default function ({ $s }: Params): Response {
  // computed
  let address = computed<string>(() => $s.getters['common/wallet/address'])
  let shortAddress = computed<string>(
    () => address.value.substring(0, 10) + '...' + address.value.slice(-4)
  )

  return {
    address,
    shortAddress
  }
}
