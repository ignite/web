// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgUnjail } from './types/cosmos/slashing/v1beta1/tx'

type sendMsgUnjailParams = {
  value: MsgUnjail
  fee?: StdFee
  memo?: string
}

type msgUnjailParams = {
  value: MsgUnjail
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

  async sendMsgUnjail({
    value,
    fee,
    memo
  }: sendMsgUnjailParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgUnjail({ value: MsgUnjail.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUnjail:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgUnjail({ value }: msgUnjailParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.slashing.v1beta1.MsgUnjail',
        value: MsgUnjail.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUnjail:Create Could not create message: ' + e.message
      )
    }
  }
}

export default Module
