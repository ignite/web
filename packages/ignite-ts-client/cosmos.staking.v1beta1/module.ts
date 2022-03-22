// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgCreateValidator } from './types/cosmos/staking/v1beta1/tx'
import { MsgBeginRedelegate } from './types/cosmos/staking/v1beta1/tx'
import { MsgEditValidator } from './types/cosmos/staking/v1beta1/tx'
import { MsgDelegate } from './types/cosmos/staking/v1beta1/tx'
import { MsgUndelegate } from './types/cosmos/staking/v1beta1/tx'

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator
  fee?: StdFee
  memo?: string
}

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate
  fee?: StdFee
  memo?: string
}

type sendMsgEditValidatorParams = {
  value: MsgEditValidator
  fee?: StdFee
  memo?: string
}

type sendMsgDelegateParams = {
  value: MsgDelegate
  fee?: StdFee
  memo?: string
}

type sendMsgUndelegateParams = {
  value: MsgUndelegate
  fee?: StdFee
  memo?: string
}

type msgCreateValidatorParams = {
  value: MsgCreateValidator
}

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate
}

type msgEditValidatorParams = {
  value: MsgEditValidator
}

type msgDelegateParams = {
  value: MsgDelegate
}

type msgUndelegateParams = {
  value: MsgUndelegate
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

  async sendMsgCreateValidator({
    value,
    fee,
    memo
  }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgCreateValidator({
        value: MsgCreateValidator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateValidator:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgBeginRedelegate({
    value,
    fee,
    memo
  }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgBeginRedelegate({
        value: MsgBeginRedelegate.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgBeginRedelegate:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgEditValidator({
    value,
    fee,
    memo
  }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgEditValidator({
        value: MsgEditValidator.fromPartial(value)
      })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgEditValidator:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgDelegate({
    value,
    fee,
    memo
  }: sendMsgDelegateParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDelegate:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgUndelegate({
    value,
    fee,
    memo
  }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) })
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUndelegate:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgCreateValidator:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgBeginRedelegate:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgEditValidator({ value }: msgEditValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgEditValidator:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgDelegate({ value }: msgDelegateParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDelegate:Create Could not create message: ' + e.message
      )
    }
  }

  msgUndelegate({ value }: msgUndelegateParams): EncodeObject {
    try {
      return {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgUndelegate:Create Could not create message: ' + e.message
      )
    }
  }
}

export default Module
