// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgWithdrawValidatorCommission } from './types/cosmos/distribution/v1beta1/tx'
import { MsgWithdrawDelegatorReward } from './types/cosmos/distribution/v1beta1/tx'
import { MsgSetWithdrawAddress } from './types/cosmos/distribution/v1beta1/tx'
import { MsgFundCommunityPool } from './types/cosmos/distribution/v1beta1/tx'

type sendMsgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission
  fee?: StdFee
  memo?: string
}

type sendMsgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward
  fee?: StdFee
  memo?: string
}

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
  fee?: StdFee
  memo?: string
}

type sendMsgFundCommunityPoolParams = {
  value: MsgFundCommunityPool
  fee?: StdFee
  memo?: string
}

type msgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission
}

type msgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward
}

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
}

type msgFundCommunityPoolParams = {
  value: MsgFundCommunityPool
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [
    [
      '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
      MsgWithdrawValidatorCommission
    ],
    [
      '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      MsgWithdrawDelegatorReward
    ],
    [
      '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
      MsgSetWithdrawAddress
    ],
    ['/cosmos.distribution.v1beta1.MsgFundCommunityPool', MsgFundCommunityPool]
  ]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgWithdrawValidatorCommission({
    value,
    fee,
    memo
  }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgWithdrawValidatorCommission:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgWithdrawDelegatorReward({
    value,
    fee,
    memo
  }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgWithdrawDelegatorReward:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgSetWithdrawAddress({
    value,
    fee,
    memo
  }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
        value: MsgSetWithdrawAddress.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSetWithdrawAddress:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  async sendMsgFundCommunityPool({
    value,
    fee,
    memo
  }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
        value: MsgFundCommunityPool.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgFundCommunityPool:Send Could not broadcast Tx: ' +
          e.message
      )
    }
  }

  msgWithdrawValidatorCommission({
    value
  }: msgWithdrawValidatorCommissionParams): {
    typeUrl: string
    value: MsgWithdrawValidatorCommission
  } {
    try {
      return {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgWithdrawValidatorCommission:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): {
    typeUrl: string
    value: MsgWithdrawDelegatorReward
  } {
    try {
      return {
        typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgWithdrawDelegatorReward:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): {
    typeUrl: string
    value: MsgSetWithdrawAddress
  } {
    try {
      return {
        typeUrl: '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress',
        value: MsgSetWithdrawAddress.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSetWithdrawAddress:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgFundCommunityPool({ value }: msgFundCommunityPoolParams): {
    typeUrl: string
    value: MsgFundCommunityPool
  } {
    try {
      return {
        typeUrl: '/cosmos.distribution.v1beta1.MsgFundCommunityPool',
        value: MsgFundCommunityPool.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgFundCommunityPool:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
