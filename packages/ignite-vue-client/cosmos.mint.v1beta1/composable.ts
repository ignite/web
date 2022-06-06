// Generated by Ignite ignite.com/cli
import Module from 'ignite-ts-client/cosmos.mint.v1beta1/module'
import { unref } from 'vue'

import useIgnite from '../use'

type QueryParamsType = typeof Module.prototype.queryParams
type QueryInflationType = typeof Module.prototype.queryInflation
type QueryAnnualProvisionsType = typeof Module.prototype.queryAnnualProvisions

type Response = {
  queryParams: QueryParamsType
  queryInflation: QueryInflationType
  queryAnnualProvisions: QueryAnnualProvisionsType
}

function useModule(): Response {
  let { ignite } = useIgnite()

  let {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  } = unref(ignite.cosmosMintV1Beta1)

  queryParams = queryParams.bind(ignite.cosmosMintV1Beta1)

  queryInflation = queryInflation.bind(ignite.cosmosMintV1Beta1)

  queryAnnualProvisions = queryAnnualProvisions.bind(ignite.cosmosMintV1Beta1)

  return {
    queryParams,

    queryInflation,

    queryAnnualProvisions
  }
}

export { useModule }