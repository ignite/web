import { computed, reactive } from 'vue'
import { Store } from 'vuex'

import useAPIPagination, {
  Response as PaginationResponse
} from './useAPIPagination'

import axios, { AxiosResponse } from 'axios'

export interface State {
  loading: boolean
}

export let initialState: State = {
  loading: false
}

type ResponseType = State & {
  sentTxsPager: PaginationResponse
  receivedTxsPager: PaginationResponse
}

type Response = ResponseType | null

type Params = {
  $s: Store<any>
  opts: {
    order: 'asc' | 'desc'
    realTime: boolean
  }
}

export default async function useTxs({
  $s,
  opts: { order, realTime }
}: Params): Promise<Response> {
  let normalizeAPIResponse = (resp: AxiosResponse) => {
    let responseData = resp.data

    return {
      data: responseData.txs,
      total: responseData.pagination.total
    }
  }

  let orderParam = order === 'asc' ? 1 : 2

  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])

  // store
  let address = computed(() => $s.getters['common/wallet/address'])
  let client = computed(() => $s.getters['common/env/client'])

  if (!address.value) {
    console.error('useTx: no address')
    return null
  }

  // state
  let state = reactive(initialState)
  let SENT_EVENT = `transfer.sender%3D%27${address.value}%27`
  let RECEIVED_EVENT = `transfer.recipient%3D%27${address.value}%27`

  let receivedPager: PaginationResponse = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await axios.get(
            `${API_COSMOS.value}` +
              `/cosmos/tx/v1beta1/txs` +
              `?events=${RECEIVED_EVENT}` +
              `&pagination.offset=${offset}` +
              `&order_by=${orderParam}`
          )
        )
    }
  })

  let sentPager: PaginationResponse = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await axios.get(
            `${API_COSMOS.value}` +
              `/cosmos/tx/v1beta1/txs` +
              `?events=${SENT_EVENT}` +
              `&pagination.offset=${offset}` +
              `&order_by=${orderParam}`
          )
        )
    }
  })

  if (realTime) {
    client.value.on('newblock', () => {
      receivedPager.reload()
      sentPager.reload()
    })
  }

  return {
    ...state,
    receivedTxsPager: receivedPager,
    sentTxsPager: sentPager
  }
}
