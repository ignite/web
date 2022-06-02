import axios, { AxiosResponse } from 'axios'
import { useIgnite } from 'ignite-vue-client'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'

import { Amount } from '@/utils/interfaces'

import useAddress from './useAddress'
import useAPIPagination, {
  merge,
  Pager,
  Response as APIPagination
} from './useAPIPagination'

type Response = {
  filterSupportedTypes: (tx: object) => boolean
  normalize: (tx: object) => TxForUI
  pager: ComputedRef<Pager>
  newTxs: Ref<number>
}

type Params = {
  opts: {
    order: 'asc' | 'desc'
    realTime: boolean
  }
}

type TxDirection = 'in' | 'out' | 'self'

export type TxForUI = {
  dir: TxDirection
  sender: string
  receiver: string
  amount: Amount[]
  hash: string
  type: string
  timestamp: string
  height: number
}

export default async function ({
  opts: { order, realTime }
}: Params): Promise<Response> {
  // ignite
  let { ignite } = useIgnite()

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
  let filterSupportedTypes = (tx: any) => {
    let isIBC = (tx.body.messages[0]['@type'] as string).includes(
      'ibc.applications.transfer.v1.MsgTransfer'
    )
    let isBankTransfer = (tx.body.messages[0]['@type'] as string).includes(
      'cosmos.bank.v1beta1.MsgSend'
    )

    return isBankTransfer || isIBC
  }
  let normalize = (tx: any): TxForUI => {
    let findOutDir = (tx: TxForUI): TxDirection => {
      let dir: TxDirection = 'in'

      if (tx.receiver === tx.sender && tx.receiver === address.value) {
        dir = 'self'
      } else if (tx.receiver === address.value) {
        dir = 'in'
      } else if (tx.sender === address.value) {
        dir = 'out'
      }
      return dir
    }

    let normalized: any = {}

    let isIBC = (tx.body.messages[0]['@type'] as string).includes(
      'ibc.applications.transfer.v1.MsgTransfer'
    )
    let isBankTransfer = (tx.body.messages[0]['@type'] as string).includes(
      'cosmos.bank.v1beta1.MsgSend'
    )

    if (isIBC) {
      let decodeIBC = (dataAs64: string): object =>
        JSON.parse(window.atob(dataAs64))

      let decoded: any = decodeIBC(tx.body.messages[0]?.packet?.data)

      normalized.sender = decoded.sender
      normalized.receiver = decoded.receiver
      normalized.amount = { amount: decoded.amount, denom: decoded.denom }
      normalized.height = Number(tx.height)
    } else if (isBankTransfer) {
      normalized.sender = tx.body.messages[0].from_address
      normalized.receiver = tx.body.messages[0].to_address
      normalized.amount = tx.body.messages[0].amount
      normalized.height = Number(tx.height)
    }

    normalized.type = tx.body.messages[0]['@type']
    normalized.timestamp = tx.timestamp
    normalized.hash = tx.txhash
    normalized.dir = findOutDir(normalized)

    return normalized as TxForUI
  }
  let fetchTxs = async (offset: number, event: string, orderParam: number) =>
    axios.get(
      `${API_COSMOS}` +
        `/cosmos/tx/v1beta1/txs` +
        `?events=${event}` +
        `&pagination.offset=${offset}` +
        `&order_by=${orderParam}`
    )

  // composables
  let { address } = useAddress()

  // store
  let API_COSMOS = ignite.env.value.apiURL

  // computed
  let SENT_EVENT = computed<string>(
    () => `transfer.sender%3D%27${address.value}%27`
  )
  let RECEIVED_EVENT = computed<string>(
    () => `transfer.recipient%3D%27${address.value}%27`
  )

  // state
  let orderParam = order === 'asc' ? 1 : 2
  let newTxs = ref(0)

  // composables
  let recvAPIPagination: APIPagination = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await fetchTxs(offset, RECEIVED_EVENT.value, orderParam)
        )
    }
  })
  let sentAPIPagination: APIPagination = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await fetchTxs(offset, SENT_EVENT.value, orderParam)
        )
    }
  })

  await recvAPIPagination.pager.load()
  await sentAPIPagination.pager.load()

  // computed
  let recvAndSentPager: ComputedRef<Pager> = computed(() =>
    merge(recvAPIPagination.pager, sentAPIPagination.pager)
  )

  //watch
  watch(
    () => address.value,
    async () => {
      await recvAndSentPager.value.load()
    }
  )

  if (realTime) {
    ignite.ws.value.ee().on('ws-newblock', async () => {
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
    normalize,
    filterSupportedTypes
  }
}
