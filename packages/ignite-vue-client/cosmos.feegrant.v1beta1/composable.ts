// Generated by Ignite ignite.com/cli
import Module from 'ignite-ts-client/cosmos.feegrant.v1beta1/module'
import { unref } from 'vue'

import useIgnite from '../use'

type SendMsgGrantAllowanceType = typeof Module.prototype.sendMsgGrantAllowance
type SendMsgRevokeAllowanceType = typeof Module.prototype.sendMsgRevokeAllowance

type QueryAllowanceType = typeof Module.prototype.queryAllowance
type QueryAllowancesType = typeof Module.prototype.queryAllowances

type Response = {
  sendMsgGrantAllowance: SendMsgGrantAllowanceType
  sendMsgRevokeAllowance: SendMsgRevokeAllowanceType

  queryAllowance: QueryAllowanceType
  queryAllowances: QueryAllowancesType
}

function useModule(): Response {
  let { ignite } = useIgnite()

  let {
    sendMsgGrantAllowance,

    sendMsgRevokeAllowance,

    queryAllowance,

    queryAllowances
  } = unref(ignite.cosmosFeegrantV1Beta1)

  sendMsgGrantAllowance = sendMsgGrantAllowance.bind(
    ignite.cosmosFeegrantV1Beta1
  )

  sendMsgRevokeAllowance = sendMsgRevokeAllowance.bind(
    ignite.cosmosFeegrantV1Beta1
  )

  queryAllowance = queryAllowance.bind(ignite.cosmosFeegrantV1Beta1)

  queryAllowances = queryAllowances.bind(ignite.cosmosFeegrantV1Beta1)

  return {
    sendMsgGrantAllowance,

    sendMsgRevokeAllowance,

    queryAllowance,

    queryAllowances
  }
}

export { useModule }