// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgExec } from './types/cosmos/authz/v1beta1/tx'
import { MsgGrant } from './types/cosmos/authz/v1beta1/tx'
import { MsgRevoke } from './types/cosmos/authz/v1beta1/tx'

type sendMsgExecParams = {
  value: MsgExec
  fee?: StdFee
  memo?: string
}

type sendMsgGrantParams = {
  value: MsgGrant
  fee?: StdFee
  memo?: string
}

type sendMsgRevokeParams = {
  value: MsgRevoke
  fee?: StdFee
  memo?: string
}

type msgExecParams = {
  value: MsgExec
}

type msgGrantParams = {
  value: MsgGrant
}

type msgRevokeParams = {
  value: MsgRevoke
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

  async sendMsgExec({
    value,
    fee,
    memo
  }: sendMsgExecParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgExec({ value: MsgExec.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgExec:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgGrant({
    value,
    fee,
    memo
  }: sendMsgGrantParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgGrant({ value: MsgGrant.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgGrant:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgRevoke({
    value,
    fee,
    memo
  }: sendMsgRevokeParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgRevoke({ value: MsgRevoke.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRevoke:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgExec({ value }: msgExecParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.authz.v1beta1.MsgExec',
        value: MsgExec.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgExec:Create Could not create message: ' + e.message
      )
    }
  }

  msgGrant({ value }: msgGrantParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.authz.v1beta1.MsgGrant',
        value: MsgGrant.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgGrant:Create Could not create message: ' + e.message
      )
    }
  }

  msgRevoke({ value }: msgRevokeParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.authz.v1beta1.MsgRevoke',
        value: MsgRevoke.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgRevoke:Create Could not create message: ' + e.message
      )
    }
  }
}

export default Module
