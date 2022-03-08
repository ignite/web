// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgSend } from './types/cosmos/bank/v1beta1/tx'
import { MsgMultiSend } from './types/cosmos/bank/v1beta1/tx'

type sendMsgSendParams = {
  value: MsgSend
  fee?: StdFee
  memo?: string
}

type sendMsgMultiSendParams = {
  value: MsgMultiSend
  fee?: StdFee
  memo?: string
}

type msgSendParams = {
  value: MsgSend
}

type msgMultiSendParams = {
  value: MsgMultiSend
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgSend({
    value,
    fee,
    memo
  }: sendMsgSendParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgSend({ value: MsgSend.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSend:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgMultiSend({
    value,
    fee,
    memo
  }: sendMsgMultiSendParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgMultiSend({ value: MsgMultiSend.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgMultiSend:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgSend({ value }: msgSendParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: MsgSend.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSend:Create Could not create message: ' + e.message
      )
    }
  }

  msgMultiSend({ value }: msgMultiSendParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
        value: MsgMultiSend.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgMultiSend:Create Could not create message: ' + e.message
      )
    }
  }
}

export default Module
