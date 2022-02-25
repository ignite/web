// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgGrantAllowance } from './types/cosmos/feegrant/v1beta1/tx'
import { MsgRevokeAllowance } from './types/cosmos/feegrant/v1beta1/tx'

/*********************
 *       MODULE      *
 *********************/

type sendMsgGrantAllowanceParams = {
  value: MsgGrantAllowance
  fee?: StdFee
  memo?: string
}

type sendMsgRevokeAllowanceParams = {
  value: MsgRevokeAllowance
  fee?: StdFee
  memo?: string
}

type msgGrantAllowanceParams = {
  value: MsgGrantAllowance
}

type msgRevokeAllowanceParams = {
  value: MsgRevokeAllowance
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [
    ['/cosmos.feegrant.v1beta1.MsgGrantAllowance', MsgGrantAllowance],
    ['/cosmos.feegrant.v1beta1.MsgRevokeAllowance', MsgRevokeAllowance]
  ]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgGrantAllowance({
    value,
    fee,
    memo
  }: sendMsgGrantAllowanceParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.feegrant.v1beta1.MsgGrantAllowance',
        value: MsgGrantAllowance.fromPartial(value)
      }
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

  async sendMsgRevokeAllowance({
    value,
    fee,
    memo
  }: sendMsgRevokeAllowanceParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.feegrant.v1beta1.MsgRevokeAllowance',
        value: MsgRevokeAllowance.fromPartial(value)
      }
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

  msgGrantAllowance({ value }: msgGrantAllowanceParams): {
    typeUrl: string
    value: MsgGrantAllowance
  } {
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

  msgRevokeAllowance({ value }: msgRevokeAllowanceParams): {
    typeUrl: string
    value: MsgRevokeAllowance
  } {
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
}

/*********************
 *        VUE        *
 *********************/

export { Module }
