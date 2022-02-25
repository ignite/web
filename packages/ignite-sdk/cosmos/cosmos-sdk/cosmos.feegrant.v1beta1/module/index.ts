// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { BasicAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { PeriodicAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { AllowedMsgAllowance } from './types/cosmos/feegrant/v1beta1/feegrant'
import { Grant } from './types/cosmos/feegrant/v1beta1/feegrant'
import { MsgGrantAllowance } from './types/cosmos/feegrant/v1beta1/tx'
import { MsgRevokeAllowance } from './types/cosmos/feegrant/v1beta1/tx'

const types = [
  ['/cosmos.feegrant.v1beta1.MsgGrantAllowance', MsgGrantAllowance],
  ['/cosmos.feegrant.v1beta1.MsgRevokeAllowance', MsgRevokeAllowance]
]

const registry = new Registry(<any>types)

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

export {
  AllowedMsgAllowance,
  BasicAllowance,
  Grant,
  M,
  MsgGrantAllowance,
  MsgRevokeAllowance,
  PeriodicAllowance,
  registry
}
