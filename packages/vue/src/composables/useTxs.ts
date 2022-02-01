import { computed, ComputedRef, ref, Ref, watch } from 'vue'
import { Store } from 'vuex'

import useAPIPagination, {
  Response as APIPagination,
  Pager,
  merge
} from './useAPIPagination'

import axios, { AxiosResponse } from 'axios'
import { Amount } from '@/utils/interfaces'

type Response = {
  normalize: (tx: object) => TxForUI
  pager: ComputedRef<Pager>
  newTxs: Ref<number>
}

type Params = {
  $s: Store<any>
  opts: {
    order: 'asc' | 'desc'
    realTime: boolean
  }
}

type TxDirection = 'in' | 'out' | 'self'

export type TxForUI = {
  dir: TxDirection
  amount: Amount
  addr: string
  hash: string
  timestamp: string
  height: number
}

export default async function useTxs({
  $s,
  opts: { order, realTime }
}: Params): Promise<Response> {
  // methods
  let normalizeAPIResponse = (resp: AxiosResponse) => {
    let { txs, tx_responses, pagination } = resp.data

    let merged = txs.map((tx, i) => {
      return { ...tx, ...tx_responses[i] }
    })

    return {
      data: merged,
      total: Number(pagination.total)
    }
  }
  let normalize = (tx: any): TxForUI => {
    let normalized: any = {}

    let toAddr: string = tx.body.messages[0].to_address
    let fromAddr: string = tx.body.messages[0].from_address
    let amount: Amount[] = tx.body.messages[0].amount

    let findOutDir = (): TxDirection => {
      let dir: TxDirection = 'in'

      if (toAddr === fromAddr && toAddr === address.value) {
        dir = 'self'
      } else if (toAddr === address.value) {
        dir = 'in'
      } else if (fromAddr === address.value) {
        dir = 'out'
      }
      return dir
    }

    let findOutAddr = (dir: TxDirection): string => {
      let addr: string = ''

      if (dir === 'self') {
        addr = toAddr
      } else if (dir === 'in') {
        addr = fromAddr
      } else if (dir === 'out') {
        addr = toAddr
      }
      return addr
    }

    normalized.dir = findOutDir()
    normalized.addr = findOutAddr(normalized.dir)
    normalized.timestamp = findOutAddr(normalized.dir)
    normalized.amount = amount[0]
    normalized.hash = tx.txhash
    normalized.height = Number(tx.height)

    return normalized as TxForUI
  }

  let fetchTxs = async (offset: number, event: string, orderParam: number) =>
    axios.get(
      `${API_COSMOS.value}` +
        `/cosmos/tx/v1beta1/txs` +
        `?events=${event}` +
        `&pagination.offset=${offset}` +
        `&order_by=${orderParam}`
    )

  // store
  let address = computed(() => $s.getters['common/wallet/address'])
  let client = computed(() => $s.getters['common/env/client'])

  // state
  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])
  let SENT_EVENT = computed<string>(
    () => `transfer.sender%3D%27${address.value}%27`
  )
  let RECEIVED_EVENT = computed<string>(
    () => `transfer.recipient%3D%27${address.value}%27`
  )
  let orderParam = order === 'asc' ? 1 : 2
  let newTxs = ref(0)

  let { pager: recvPager }: APIPagination = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await fetchTxs(offset, RECEIVED_EVENT.value, orderParam)
        )
    }
  })
  let { pager: sentPager }: APIPagination = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await fetchTxs(offset, SENT_EVENT.value, orderParam)
        )
    }
  })

  await recvPager.load()
  await sentPager.load()

  // computed
  let recvAndSentPager: ComputedRef<Pager> = computed(() =>
    merge(recvPager, sentPager)
  )

  //watch
  watch(
    () => address.value,
    async () => {
      console.log('watch addr', address.value)
      recvAndSentPager.value.load()
    }
  )

  if (realTime) {
    client.value.on('newblock', async () => {
      // there's got bet a better way to diff latest vs. current while sparing this wasted round-trip
      let recv = await fetchTxs(0, RECEIVED_EVENT.value, orderParam)
      let sent = await fetchTxs(0, SENT_EVENT.value, orderParam)

      let currentTotal = recvAndSentPager.value.total.value
      let latestTotal =
        Number(recv.data.pagination.total) + Number(sent.data.pagination.total)
      let diff = latestTotal - currentTotal

      newTxs.value = diff
    })
  }

  return {
    newTxs,
    pager: recvAndSentPager,
    normalize
  }
}
