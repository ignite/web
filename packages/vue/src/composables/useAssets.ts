import { Amount, DenomTrace } from '@/utils/interfaces'
import {
  computed,
  ComputedRef,
  onMounted,
  watch,
  ref,
  Ref,
  onBeforeMount
} from 'vue'

import { Store } from 'vuex'

import { useAddress, useDenom } from '.'

type Response = {
  balances: Ref<AssetForUI[]>
  balancesRaw: ComputedRef<any[]>
  normalize: (balance: object) => Promise<AssetForUI>
}
export type AssetForUI = {
  amount: Amount
  path?: string
}

type Params = {
  $s: Store<any>
  opts?: {}
}

export default function ({ $s }: Params): Response {
  // state
  let balances = ref([])

  // composables
  let { address } = useAddress({ $s })
  let { getDenomTrace } = useDenom({ $s })

  // actions
  let queryAllBalances = (opts: any) =>
    $s.dispatch('cosmos.bank.v1beta1/QueryAllBalances', opts)

  // lh
  onBeforeMount(async () => {
    if (address.value) {
      queryAllBalances({
        params: { address: address.value },
        options: { subscribe: true }
      })
    }
  })

  // computed
  let balancesRaw = computed<any[]>(() => {
    return (
      $s.getters['cosmos.bank.v1beta1/getAllBalances']({
        params: { address: address.value }
      })?.balances ?? []
    )
  })

  // methods
  let normalize = async (balance: any) => {
    let isIBC = balance.denom.indexOf('ibc/') == 0

    let normalized: AssetForUI = {
      amount: {
        amount: '',
        denom: ''
      }
    }

    if (isIBC) {
      let denomTrace: DenomTrace = await getDenomTrace(balance.denom)

      normalized.path = denomTrace.denom_trace.path
      normalized.amount.denom = denomTrace.denom_trace.base_denom
    } else {
      normalized.amount.denom = balance.denom
    }

    normalized.amount.amount = balance.amount

    return normalized as AssetForUI
  }

  //watch
  watch(
    () => address.value,
    async (newValue, oldValue) => {
      if (newValue !== oldValue) {
        queryAllBalances({
          params: { address: newValue },
          options: { subscribe: true }
        })
      }
    }
  )
  watch(
    () => balancesRaw.value,
    async () => {
      let arr: Promise<AssetForUI>[] = balancesRaw.value.map(normalize)

      Promise.all(arr).then((normalized) => {
        balances.value = normalized as any
      })
    }
  )

  return { balancesRaw, normalize, balances }
}
