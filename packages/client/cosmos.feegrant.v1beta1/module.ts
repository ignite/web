// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgRevokeAllowance } from './types/cosmos/feegrant/v1beta1/tx'
import { MsgGrantAllowance } from './types/cosmos/feegrant/v1beta1/tx'

type sendMsgRevokeAllowanceParams = {
  value: MsgRevokeAllowance
  fee?: StdFee
  memo?: string
}

type sendMsgGrantAllowanceParams = {
  value: MsgGrantAllowance
  fee?: StdFee
  memo?: string
}

type msgRevokeAllowanceParams = {
  value: MsgRevokeAllowance
}

type msgGrantAllowanceParams = {
  value: MsgGrantAllowance
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

  async sendMsgRevokeAllowance({
    value,
    fee,
    memo
  }: sendMsgRevokeAllowanceParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRevokeAllowance({
        value: MsgRevokeAllowance.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRevokeAllowance:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgGrantAllowance({
    value,
    fee,
    memo
  }: sendMsgGrantAllowanceParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgGrantAllowance({
        value: MsgGrantAllowance.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgGrantAllowance:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgRevokeAllowance({ value }: msgRevokeAllowanceParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
        value: MsgRevokeAllowance.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRevokeAllowance:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgGrantAllowance({ value }: msgGrantAllowanceParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
        value: MsgGrantAllowance.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgGrantAllowance:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
