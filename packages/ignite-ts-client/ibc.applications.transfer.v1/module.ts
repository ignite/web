// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgTransfer } from './types/ibc/applications/transfer/v1/tx'

type sendMsgTransferParams = {
  value: MsgTransfer
  fee?: StdFee
  memo?: string
}

type msgTransferParams = {
  value: MsgTransfer
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  constructor(baseUrl: string) {
    super({
      baseUrl
    })
  }

  public withSigner(client: SigningStargateClient, address: string) {
    this._client = client
    this._address = address
  }

  async sendMsgTransfer({
    value,
    fee,
    memo
  }: sendMsgTransferParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgTransfer({ value: MsgTransfer.fromPartial(value) })
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

  msgTransfer({ value }: msgTransferParams): EncodeObject {
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

export default Module
