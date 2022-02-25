// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { SigningInfo } from './types/cosmos/slashing/v1beta1/genesis'
import { ValidatorMissedBlocks } from './types/cosmos/slashing/v1beta1/genesis'
import { MissedBlock } from './types/cosmos/slashing/v1beta1/genesis'
import { ValidatorSigningInfo } from './types/cosmos/slashing/v1beta1/slashing'
import { Params } from './types/cosmos/slashing/v1beta1/slashing'
import { MsgUnjail } from './types/cosmos/slashing/v1beta1/tx'

const types = [['/cosmos.slashing.v1beta1.MsgUnjail', MsgUnjail]]

const registry = new Registry(<any>types)

type sendMsgUnjailParams = {
  value: MsgUnjail
  fee?: StdFee
  memo?: string
}

type msgUnjailParams = {
  value: MsgUnjail
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

  async sendMsgUnjail({
    value,
    fee,
    memo
  }: sendMsgUnjailParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.slashing.v1beta1.MsgUnjail',
        value: MsgUnjail.fromPartial(value)
      }
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

  msgUnjail({ value }: msgUnjailParams): { typeUrl: string; value: MsgUnjail } {
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

export {
  M,
  MissedBlock,
  MsgUnjail,
  Params,
  registry,
  SigningInfo,
  ValidatorMissedBlocks,
  ValidatorSigningInfo
}
