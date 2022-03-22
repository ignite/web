// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgCreateVestingAccount } from './types/cosmos/vesting/v1beta1/tx'

type sendMsgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
  fee?: StdFee
  memo?: string
}

type msgCreateVestingAccountParams = {
  value: MsgCreateVestingAccount
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  constructor(baseUrl: string) {
    super({
      baseUrl
    })
  }

  public withSigner(client: SigningStargateClient, address: string) {
    this._client = client
    this._address = address
  }

  async sendMsgCreateVestingAccount({
    value,
    fee,
    memo
  }: sendMsgCreateVestingAccountParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateVestingAccount({
        value: MsgCreateVestingAccount.fromPartial(value)
      })
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

  msgCreateVestingAccount({
    value
  }: msgCreateVestingAccountParams): EncodeObject {
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

export default Module
