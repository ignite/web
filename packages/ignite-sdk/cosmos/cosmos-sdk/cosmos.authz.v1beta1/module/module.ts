// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgGrant } from './types/cosmos/authz/v1beta1/tx'
import { MsgExec } from './types/cosmos/authz/v1beta1/tx'
import { MsgRevoke } from './types/cosmos/authz/v1beta1/tx'

type sendMsgGrantParams = {
  value: MsgGrant
  fee?: StdFee
  memo?: string
}

type sendMsgExecParams = {
  value: MsgExec
  fee?: StdFee
  memo?: string
}

type sendMsgRevokeParams = {
  value: MsgRevoke
  fee?: StdFee
  memo?: string
}

type msgGrantParams = {
  value: MsgGrant
}

type msgExecParams = {
  value: MsgExec
}

type msgRevokeParams = {
  value: MsgRevoke
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [
    ['/cosmos.authz.v1beta1.MsgGrant', MsgGrant],
    ['/cosmos.authz.v1beta1.MsgExec', MsgExec],
    ['/cosmos.authz.v1beta1.MsgRevoke', MsgRevoke]
  ]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgGrant({
    value,
    fee,
    memo
  }: sendMsgGrantParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.authz.v1beta1.MsgGrant',
        value: MsgGrant.fromPartial(value)
      }
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

  async sendMsgExec({
    value,
    fee,
    memo
  }: sendMsgExecParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.authz.v1beta1.MsgExec',
        value: MsgExec.fromPartial(value)
      }
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

  async sendMsgRevoke({
    value,
    fee,
    memo
  }: sendMsgRevokeParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.authz.v1beta1.MsgRevoke',
        value: MsgRevoke.fromPartial(value)
      }
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

  msgGrant({ value }: msgGrantParams): { typeUrl: string; value: MsgGrant } {
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

  msgExec({ value }: msgExecParams): { typeUrl: string; value: MsgExec } {
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

  msgRevoke({ value }: msgRevokeParams): { typeUrl: string; value: MsgRevoke } {
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
