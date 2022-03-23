import { useIgnite } from '@ignt/vue'
import { V1DenomTrace } from '@ignt/client/ibc.applications.transfer.v1/rest'

type Response = {
  getDenomTrace: (denom: string) => Promise<V1DenomTrace | undefined>
  normalizeDenom: (denom: string) => Promise<string>
}

export default function (): Response {
  let { ignite } = useIgnite()

  // methods
  let getDenomTrace = async (
    denom: string
  ): Promise<V1DenomTrace | undefined> => {
    let hash = denom.split('/')[1]

    let denomTrace = (
      await ignite.value?.IbcApplicationsTransferV1.queryDenomTrace(hash)
    )?.data.denom_trace

    return denomTrace
  }
  let normalizeDenom = async (denom: string): Promise<string> => {
    let normalized = denom.toUpperCase()

    let isIBC = denom.indexOf('ibc/') == 0

    if (isIBC) {
      normalized = (await getDenomTrace(denom))?.base_denom || ''
    }

    return normalized
  }

  return {
    getDenomTrace,
    normalizeDenom
  }
}
