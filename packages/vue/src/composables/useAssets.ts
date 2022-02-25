import { Ref, ref, watch } from 'vue'
import { Store } from 'vuex'

import { Amount, DenomTrace } from '@/utils/interfaces'

import { useAddress, useDenom, useIgnite } from '.'

type Response = {
  balances: Ref<{ isLoading: boolean; assets: AssetForUI[] }>
  balancesRaw: Ref<any[] | undefined>
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

export default async function ({ $s, opts }: Params): Promise<Response> {
  // state
  let balances = ref({
    isLoading: true,
    assets: []
  })
  let balancesRaw = ref<any[]>([])

  // composables
  let { $ignt } = await useIgnite()
  let { address } = useAddress({ $s })
  let { getDenomTrace } = useDenom({ $s })

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
    () => $ignt.value,
    async () => {
      if ($ignt.value) {
        balancesRaw.value =
          (
            await $ignt.value?.CosmosBankV1Beta1?.queryAllBalances(
              address.value
            )
          )?.data.balances || []
      }
    },
    { immediate: true }
  )
  watch(
    () => [address.value, balancesRaw.value],
    async () => {
      if (balancesRaw.value) {
        let arr: Promise<AssetForUI>[] = balancesRaw.value.map(normalize)

        Promise.all(arr)
          .then((normalized) => {
            balances.value.assets = normalized as any
          })
          .finally(() => {
            balances.value.isLoading = false
          })
      }
    }
  )

  return { balancesRaw, normalize, balances }
}
