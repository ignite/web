import { V1DenomTrace } from 'cosmos-gaia-ts-client/ibc.applications.transfer.v1/rest'
import { useGaia } from 'cosmos-gaia-vue-client'

type Response = {
  getDenomTrace: (denom: string) => Promise<V1DenomTrace | undefined>
  normalizeDenom: (denom: string) => Promise<string>
}

export default function (): Response {
  // ts-client
  let { gaia } = useGaia()

  // methods
  let getDenomTrace = async (
    denom: string
  ): Promise<V1DenomTrace | undefined> => {
    let hash = denom.split('/')[1]

    let denomTrace = (
      await gaia.ibcApplicationsTransferV1.value?.queryDenomTrace(hash)
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
