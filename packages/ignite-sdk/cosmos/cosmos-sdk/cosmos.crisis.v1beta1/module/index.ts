// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgVerifyInvariant } from './types/cosmos/crisis/v1beta1/tx'

const types = [
  ['/cosmos.crisis.v1beta1.MsgVerifyInvariant', MsgVerifyInvariant]
]

const registry = new Registry(<any>types)

type sendMsgVerifyInvariantParams = {
  value: MsgVerifyInvariant
  fee?: StdFee
  memo?: string
}

type msgVerifyInvariantParams = {
  value: MsgVerifyInvariant
}

interface I {
  _client: SigningStargateClient
  _address: string
}

class M extends Api<any> implements I {
  _client: SigningStargateClient
  _address: string

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgVerifyInvariant({
    value,
    fee,
    memo
  }: sendMsgVerifyInvariantParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
        value: MsgVerifyInvariant.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVerifyInvariant:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgVerifyInvariant({ value }: msgVerifyInvariantParams): {
    typeUrl: string
    value: MsgVerifyInvariant
  } {
    try {
      return {
        typeUrl: '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
        value: MsgVerifyInvariant.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVerifyInvariant:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export { M, MsgVerifyInvariant, registry }
