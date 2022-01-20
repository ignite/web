import { computed, reactive, onBeforeMount, ComputedRef, Ref } from 'vue'
import { Store } from 'vuex'

import { Transactions } from '../utils/interfaces'

import usePagination from './usePagination'

import axios, { AxiosResponse } from 'axios'

export interface State {
  loading: boolean
}

export let initialState: State = {
  loading: false
}

type ResponseType = State & {
  sentTxs: Ref<any[]>
  receivedTxs: Ref<any[]>
}

type Response = ResponseType | null

export default async function useTxs($s: Store<any>): Promise<Response> {
  let normalizeAPIResponse = (resp: AxiosResponse) => {
    let responseData = resp.data

    return {
      data: responseData.txs,
      total: responseData.pagination.total
    }
  }

  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])

  // store
  let address = computed(() => $s.getters['common/wallet/address'])

  if (!address.value) {
    console.error('useTx: no address')
    return null
  }

  // state
  let state = reactive(initialState)
  let SENT_EVENT = `transfer.sender%3D%27${address.value}%27`
  let RECEIVED_EVENT = `transfer.recipient%3D%27${address.value}%27`

  let receivedTxsPagination = await usePagination({
    opts: { pageSize: 517 },
    getters: {
      fetchList: async ({ offset, limit }) =>
        normalizeAPIResponse(
          await axios.get(
            `${API_COSMOS.value}` +
              `/cosmos/tx/v1beta1/txs` +
              `?events=${RECEIVED_EVENT}` +
              `&pagination.offset=${offset}` +
              `&pagination.limit=${limit}`
          )
        )
    }
  })

  let sentTxsPagination = await usePagination({
    opts: { pageSize: 1200 },
    getters: {
      fetchList: async ({ offset, limit }) =>
        normalizeAPIResponse(
          await axios.get(
            `${API_COSMOS.value}` +
              `/cosmos/tx/v1beta1/txs` +
              `?events=${SENT_EVENT}` +
              `&pagination.offset=${offset}` +
              `&pagination.limit=${limit}`
          )
        )
    }
  })

  return {
    ...state,
    receivedTxs: receivedTxsPagination.page,
    sentTxs: sentTxsPagination.page
  }
}
