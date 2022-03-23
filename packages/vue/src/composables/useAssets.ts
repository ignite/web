import { computed, ComputedRef, reactive, watch } from 'vue'
import { Amount } from '@/utils/interfaces'

import { useAddress, useDenom } from '.'

import { useCosmosBankV1Beta1Module, useIgnite } from '@ignt/vue'
import { Balance } from '@ignt/client/cosmos.bank.v1beta1'
import { V1DenomTrace } from '@ignt/client/ibc.applications.transfer.v1/rest'
import { Ignite } from '@ignt/client'

type Response = {
  balances: ComputedRef<AssetForUI[]>
  balancesRaw: ComputedRef<Balance[]>
  normalize: (balance: object) => Promise<AssetForUI>
  loadingAssets: ComputedRef<boolean>
}
export type AssetForUI = {
  amount: Amount
  path?: string | string[]
}

type Params = {
  opts?: {
    extractChannels: boolean
  }
}

export interface State {
  balancesRaw: Balance[]
  balances: AssetForUI[]
  loading: boolean
}
export let initialState: State = {
  balancesRaw: [],
  balances: [],
  loading: true
}

export default function (params?: Params): Response {
  // ignite
  let { ignite } = useIgnite()

  // state
  let state = reactive(initialState)

  // composables
  let { address } = useAddress()
  let { getDenomTrace } = useDenom()
  let { queryAllBalances } = useCosmosBankV1Beta1Module({
    ignite: ignite.value as Ignite
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
      let denomTrace: V1DenomTrace = await getDenomTrace(balance.denom)

      normalized.path = params?.opts?.extractChannels
        ? denomTrace.path?.match(/\d+/g)?.reverse()
        : denomTrace.path

      normalized.amount.denom = denomTrace.base_denom || ''
    } else {
      normalized.amount.denom = balance.denom
    }

    normalized.amount.amount = balance.amount

    return normalized
  }

  //watch
  watch(
    () => address.value,
    async () => {
      if (address.value) {
        state.loading = true

        let balancesRaw = (await queryAllBalances(address.value))?.data.balances

        state.loading = false

        state.balancesRaw = balancesRaw as Balance[]

        let arr: Promise<AssetForUI>[] = state.balancesRaw.map(normalize)

        Promise.all(arr).then((normalized) => {
          state.balances = normalized as any
        })
      }
    },
    {
      immediate: true
    }
  )

  return {
    normalize,
    balances: computed<AssetForUI[]>(() => state.balances),
    balancesRaw: computed<Balance[]>(() => state.balancesRaw),
    loadingAssets: computed<boolean>(() => state.loading)
  }
}
