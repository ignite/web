// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { SendAuthorization } from './types/cosmos/bank/v1beta1/authz'
import { Params } from './types/cosmos/bank/v1beta1/bank'
import { SendEnabled } from './types/cosmos/bank/v1beta1/bank'
import { Input } from './types/cosmos/bank/v1beta1/bank'
import { Output } from './types/cosmos/bank/v1beta1/bank'
import { Supply } from './types/cosmos/bank/v1beta1/bank'
import { DenomUnit } from './types/cosmos/bank/v1beta1/bank'
import { Metadata } from './types/cosmos/bank/v1beta1/bank'
import { Balance } from './types/cosmos/bank/v1beta1/genesis'
import { MsgMultiSend } from './types/cosmos/bank/v1beta1/tx'
import { MsgSend } from './types/cosmos/bank/v1beta1/tx'

const types = [
  ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend],
  ['/cosmos.bank.v1beta1.MsgSend', MsgSend]
]

const registry = new Registry(<any>types)

type sendMsgMultiSendParams = {
  value: MsgMultiSend
  fee?: StdFee
  memo?: string
}

type sendMsgSendParams = {
  value: MsgSend
  fee?: StdFee
  memo?: string
}

type msgMultiSendParams = {
  value: MsgMultiSend
}

type msgSendParams = {
  value: MsgSend
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

  async sendMsgMultiSend({
    value,
    fee,
    memo
  }: sendMsgMultiSendParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
        value: MsgMultiSend.fromPartial(value)
      }
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

  async sendMsgSend({
    value,
    fee,
    memo
  }: sendMsgSendParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: MsgSend.fromPartial(value)
      }
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

  msgMultiSend({ value }: msgMultiSendParams): {
    typeUrl: string
    value: MsgMultiSend
  } {
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

  msgSend({ value }: msgSendParams): { typeUrl: string; value: MsgSend } {
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
}

export {
  Balance,
  DenomUnit,
  Input,
  M,
  Metadata,
  MsgMultiSend,
  MsgSend,
  Output,
  Params,
  registry,
  SendAuthorization,
  SendEnabled,
  Supply
}
