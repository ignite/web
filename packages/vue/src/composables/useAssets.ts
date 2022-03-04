import {
  computed,
  ComputedRef,
  onBeforeMount,
  onUnmounted,
  Ref,
  ref,
  watch
} from 'vue'
import { Store } from 'vuex'

import { Amount, DenomTrace } from '@/utils/interfaces'

import { useAddress, useDenom } from '.'

type Response = {
  balances: Ref<{ isLoading: boolean; assets: AssetForUI[] }>
  balancesRaw: ComputedRef<any[]>
  normalize: (balance: object) => Promise<AssetForUI>
}
export type AssetForUI = {
  amount: Amount
  path?: string | string[]
}

type Params = {
  $s: Store<any>
  opts?: {
    extractChannels: boolean
  }
}

export default function ({ $s, opts }: Params): Response {
  // state
  let balances = ref({
    isLoading: true,
    assets: []
  })

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
      }).finally(() => {
        balances.value.isLoading = false
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
  let normalize = async (balance: any): Promise<AssetForUI> => {
    let isIBC = balance.denom.indexOf('ibc/') == 0

    let normalized: AssetForUI = {
      amount: {
        amount: '',
        denom: ''
      }
    }

    if (isIBC) {
      let denomTrace: DenomTrace = await getDenomTrace(balance.denom)

      normalized.path = opts?.extractChannels
        ? denomTrace.denom_trace.path.match(/\d+/g)?.reverse()
        : denomTrace.denom_trace.path
      normalized.amount.denom = denomTrace.denom_trace.base_denom
    } else {
      normalized.amount.denom = balance.denom
    }

    normalized.amount.amount = balance.amount

    return normalized
  }

  //watch
  watch(
    () => [address.value, balancesRaw.value],
    async ([newAddress], [oldAddress]) => {
      if (newAddress !== oldAddress) {
        queryAllBalances({
          params: { address: newAddress },
          options: { subscribe: true }
        }).finally(() => {
          balances.value.isLoading = false
        })
      }

      let arr: Promise<AssetForUI>[] = balancesRaw.value.map(normalize)

      Promise.all(arr).then((normalized) => {
        balances.value.assets = normalized as any
      })
    }
  )

  return { balancesRaw, normalize, balances }
}
