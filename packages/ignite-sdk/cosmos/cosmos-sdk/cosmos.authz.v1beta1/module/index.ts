// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { GenericAuthorization } from './types/cosmos/authz/v1beta1/authz'
import { Grant } from './types/cosmos/authz/v1beta1/authz'
import { EventGrant } from './types/cosmos/authz/v1beta1/event'
import { EventRevoke } from './types/cosmos/authz/v1beta1/event'
import { GrantAuthorization } from './types/cosmos/authz/v1beta1/genesis'
import { MsgRevoke } from './types/cosmos/authz/v1beta1/tx'
import { MsgGrant } from './types/cosmos/authz/v1beta1/tx'
import { MsgExec } from './types/cosmos/authz/v1beta1/tx'

const types = [
  ['/cosmos.authz.v1beta1.MsgRevoke', MsgRevoke],
  ['/cosmos.authz.v1beta1.MsgGrant', MsgGrant],
  ['/cosmos.authz.v1beta1.MsgExec', MsgExec]
]

const registry = new Registry(<any>types)

type sendMsgRevokeParams = {
  value: MsgRevoke
  fee?: StdFee
  memo?: string
}

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

type msgRevokeParams = {
  value: MsgRevoke
}

type msgGrantParams = {
  value: MsgGrant
}

type msgExecParams = {
  value: MsgExec
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
}

export {
  EventGrant,
  EventRevoke,
  GenericAuthorization,
  Grant,
  GrantAuthorization,
  M,
  MsgExec,
  MsgGrant,
  MsgRevoke,
  registry
}
