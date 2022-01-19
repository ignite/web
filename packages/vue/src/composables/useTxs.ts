import { computed, reactive, onBeforeMount, ComputedRef } from 'vue'
import { Store } from 'vuex'

import { Transactions } from '../utils/interfaces'

export interface State {
  loading: boolean
}

export let initialState: State = {
  loading: false
}

type ResponseType = State & {
  sentTxs: ComputedRef<Transactions>
  receivedTxs: ComputedRef<Transactions>
}

type Response = ResponseType | null

export default function useTxs($s: Store<any>): Response {
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
  let SERVICE_ACTION = 'common/transfers/ServiceGetTxsEvent'
  let GET_TXS_ACTION = 'common/transfers/getTxs'

  // actions
  let initSentTxService = async () =>
    await $s.dispatch(SERVICE_ACTION, {
      subscribe: true,
      event: SENT_EVENT
    })

  let initReceivedTxService = async () =>
    await $s.dispatch(SERVICE_ACTION, {
      subscribe: true,
      event: RECEIVED_EVENT
    })

  // methods
  let initServices = async () => {
    await initSentTxService()
    await initReceivedTxService()

    state.loading = false
  }

  // lh
  onBeforeMount(() => {
    initServices()
  })

  // computed
  let sentTxs = computed<Transactions>(() =>
    $s.getters[GET_TXS_ACTION]({
      event: SENT_EVENT
    })
  )

  let receivedTxs = computed<Transactions>(() =>
    $s.getters[GET_TXS_ACTION]({
      event: RECEIVED_EVENT
    })
  )

  return {
    ...state,
    sentTxs,
    receivedTxs
  }
}
