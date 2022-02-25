// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { DenomTrace } from './types/ibc/applications/transfer/v1/transfer'
import { Params } from './types/ibc/applications/transfer/v1/transfer'
import { MsgTransfer } from './types/ibc/applications/transfer/v1/tx'

const types = [['/ibc.applications.transfer.v1.MsgTransfer', MsgTransfer]]

const registry = new Registry(<any>types)

type sendMsgTransferParams = {
  value: MsgTransfer
  fee?: StdFee
  memo?: string
}

type msgTransferParams = {
  value: MsgTransfer
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

  async sendMsgTransfer({
    value,
    fee,
    memo
  }: sendMsgTransferParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: MsgTransfer.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgTransfer:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgTransfer({ value }: msgTransferParams): {
    typeUrl: string
    value: MsgTransfer
  } {
    try {
      return {
        typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
        value: MsgTransfer.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgTransfer:Create Could not create message: ' + e.message
      )
    }
  }
}

export { DenomTrace, M, MsgTransfer, Params, registry }
