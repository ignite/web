// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgSetWithdrawAddress } from './types/cosmos/distribution/v1beta1/tx'
import { MsgWithdrawDelegatorReward } from './types/cosmos/distribution/v1beta1/tx'
import { MsgWithdrawValidatorCommission } from './types/cosmos/distribution/v1beta1/tx'
import { MsgFundCommunityPool } from './types/cosmos/distribution/v1beta1/tx'

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
  fee?: StdFee
  memo?: string
}

type sendMsgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward
  fee?: StdFee
  memo?: string
}

type sendMsgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission
  fee?: StdFee
  memo?: string
}

type sendMsgFundCommunityPoolParams = {
  value: MsgFundCommunityPool
  fee?: StdFee
  memo?: string
}

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
}

type msgWithdrawDelegatorRewardParams = {
  value: MsgWithdrawDelegatorReward
}

type msgWithdrawValidatorCommissionParams = {
  value: MsgWithdrawValidatorCommission
}

type msgFundCommunityPoolParams = {
  value: MsgFundCommunityPool
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgSetWithdrawAddress({
    value,
    fee,
    memo
  }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgSetWithdrawAddress({
        value: MsgSetWithdrawAddress.fromPartial(value)
      })
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

  async sendMsgWithdrawDelegatorReward({
    value,
    fee,
    memo
  }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgWithdrawDelegatorReward({
        value: MsgWithdrawDelegatorReward.fromPartial(value)
      })
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

  async sendMsgWithdrawValidatorCommission({
    value,
    fee,
    memo
  }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgWithdrawValidatorCommission({
        value: MsgWithdrawValidatorCommission.fromPartial(value)
      })
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

  async sendMsgFundCommunityPool({
    value,
    fee,
    memo
  }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse> {
    try {
      let msg = this.msgFundCommunityPool({
        value: MsgFundCommunityPool.fromPartial(value)
      })
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

  msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject {
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

  msgWithdrawDelegatorReward({
    value
  }: msgWithdrawDelegatorRewardParams): EncodeObject {
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

  msgWithdrawValidatorCommission({
    value
  }: msgWithdrawValidatorCommissionParams): EncodeObject {
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

  msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject {
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
