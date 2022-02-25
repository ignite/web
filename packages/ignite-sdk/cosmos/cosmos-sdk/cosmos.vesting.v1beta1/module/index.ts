// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgCreateVestingAccount } from './types/cosmos/vesting/v1beta1/tx'
import { BaseVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { ContinuousVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { DelayedVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { Period } from './types/cosmos/vesting/v1beta1/vesting'
import { PeriodicVestingAccount } from './types/cosmos/vesting/v1beta1/vesting'
import { PermanentLockedAccount } from './types/cosmos/vesting/v1beta1/vesting'

const types = [
  ['/cosmos.vesting.v1beta1.MsgCreateVestingAccount', MsgCreateVestingAccount]
]

const registry = new Registry(<any>types)

type sendMsgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
  fee?: StdFee
  memo?: string
}

type msgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
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

  async sendMsgCreateVestingAccount({
    value,
    fee,
    memo
  }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.vesting.v1beta1.MsgCreateVestingAccount',
        value: MsgCreateVestingAccount.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateVestingAccount:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  msgCreateVestingAccount({ value }: msgCreateVestingAccountParams): {
    typeUrl: string
    value: MsgCreateVestingAccount
  } {
    try {
      return {
        typeUrl: '/cosmos.vesting.v1beta1.MsgCreateVestingAccount',
        value: MsgCreateVestingAccount.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateVestingAccount:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export {
  BaseVestingAccount,
  ContinuousVestingAccount,
  DelayedVestingAccount,
  M,
  MsgCreateVestingAccount,
  Period,
  PeriodicVestingAccount,
  PermanentLockedAccount,
  registry
}
