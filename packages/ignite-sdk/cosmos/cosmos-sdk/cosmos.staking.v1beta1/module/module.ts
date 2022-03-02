// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgUndelegate } from './types/cosmos/staking/v1beta1/tx'
import { MsgBeginRedelegate } from './types/cosmos/staking/v1beta1/tx'
import { MsgCreateValidator } from './types/cosmos/staking/v1beta1/tx'
import { MsgEditValidator } from './types/cosmos/staking/v1beta1/tx'
import { MsgDelegate } from './types/cosmos/staking/v1beta1/tx'

type sendMsgUndelegateParams = {
  value: MsgUndelegate
  fee?: StdFee
  memo?: string
}

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate
  fee?: StdFee
  memo?: string
}

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator
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

type msgUndelegateParams = {
  value: MsgUndelegate
}

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate
}

type msgCreateValidatorParams = {
  value: MsgCreateValidator
}

type msgEditValidatorParams = {
  value: MsgEditValidator
}

type msgDelegateParams = {
  value: MsgDelegate
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [
    ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
    ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
    ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
    ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
    ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate]
  ]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgUndelegate({
    value,
    fee,
    memo
  }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
        value: MsgUndelegate.fromPartial(value)
      }
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

  async sendMsgBeginRedelegate({
    value,
    fee,
    memo
  }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
        value: MsgBeginRedelegate.fromPartial(value)
      }
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

  async sendMsgCreateValidator({
    value,
    fee,
    memo
  }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgCreateValidator',
        value: MsgCreateValidator.fromPartial(value)
      }
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

  async sendMsgEditValidator({
    value,
    fee,
    memo
  }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgEditValidator',
        value: MsgEditValidator.fromPartial(value)
      }
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
      let msg = {
        typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
        value: MsgDelegate.fromPartial(value)
      }
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

  msgUndelegate({ value }: msgUndelegateParams): {
    typeUrl: string
    value: MsgUndelegate
  } {
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

  msgBeginRedelegate({ value }: msgBeginRedelegateParams): {
    typeUrl: string
    value: MsgBeginRedelegate
  } {
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

  msgCreateValidator({ value }: msgCreateValidatorParams): {
    typeUrl: string
    value: MsgCreateValidator
  } {
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

  msgEditValidator({ value }: msgEditValidatorParams): {
    typeUrl: string
    value: MsgEditValidator
  } {
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

  msgDelegate({ value }: msgDelegateParams): {
    typeUrl: string
    value: MsgDelegate
  } {
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
}

export default Module
