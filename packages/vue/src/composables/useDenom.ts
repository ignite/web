import { Amount, DenomTrace } from '@/utils/interfaces'
import { Store } from 'vuex'

export interface State {}

export let initialState: State = {}

type Response = {
  getDenomTrace: (denom: string) => Promise<DenomTrace>
  normalizeDenom: (denom: string) => Promise<string>
}

type Params = {
  $s: Store<any>
  opts: {}
}

export default function useDenom({ $s, opts: {} }: Params): Response {
  //actions
  let queryDenomTrace = (opts: any) =>
    $s.dispatch('ibc.applications.transfer.v1/QueryDenomTrace', opts)

  // methods
  let getDenomTrace = async (denom: string): Promise<DenomTrace> => {
    let hash = denom.split('/')[1]

    let denomTrace: DenomTrace = await queryDenomTrace({
      options: { subscribe: false, all: false },
      params: { hash }
    })

    return denomTrace
  }

  let normalizeDenom = async (denom: string): Promise<string> => {
    let normalized = denom

    let isIBC = denom.indexOf('ibc/') == 0

    if (isIBC) {
      normalized = (await getDenomTrace(denom)).denom_trace.base_denom
    }

    return normalized
  }

  return {
    getDenomTrace,
    normalizeDenom
  }
}
