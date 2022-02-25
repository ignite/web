// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { Params } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorHistoricalRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorCurrentRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorAccumulatedCommission } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorOutstandingRewards } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorSlashEvent } from './types/cosmos/distribution/v1beta1/distribution'
import { ValidatorSlashEvents } from './types/cosmos/distribution/v1beta1/distribution'
import { FeePool } from './types/cosmos/distribution/v1beta1/distribution'
import { CommunityPoolSpendProposal } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegatorStartingInfo } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegationDelegatorReward } from './types/cosmos/distribution/v1beta1/distribution'
import { CommunityPoolSpendProposalWithDeposit } from './types/cosmos/distribution/v1beta1/distribution'
import { DelegatorWithdrawInfo } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorOutstandingRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorAccumulatedCommissionRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorHistoricalRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorCurrentRewardsRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { DelegatorStartingInfoRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { ValidatorSlashEventRecord } from './types/cosmos/distribution/v1beta1/genesis'
import { MsgWithdrawDelegatorReward } from './types/cosmos/distribution/v1beta1/tx'
import { MsgWithdrawValidatorCommission } from './types/cosmos/distribution/v1beta1/tx'
import { MsgFundCommunityPool } from './types/cosmos/distribution/v1beta1/tx'
import { MsgSetWithdrawAddress } from './types/cosmos/distribution/v1beta1/tx'

const types = [
  [
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    MsgWithdrawDelegatorReward
  ],
  [
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
    MsgWithdrawValidatorCommission
  ],
  ['/cosmos.distribution.v1beta1.MsgFundCommunityPool', MsgFundCommunityPool],
  ['/cosmos.distribution.v1beta1.MsgSetWithdrawAddress', MsgSetWithdrawAddress]
]

const registry = new Registry(<any>types)

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

type sendMsgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
  fee?: StdFee
  memo?: string
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

type msgSetWithdrawAddressParams = {
  value: MsgSetWithdrawAddress
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
}

export {
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposalWithDeposit,
  DelegationDelegatorReward,
  DelegatorStartingInfo,
  DelegatorStartingInfoRecord,
  DelegatorWithdrawInfo,
  FeePool,
  M,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
  Params,
  registry,
  ValidatorAccumulatedCommission,
  ValidatorAccumulatedCommissionRecord,
  ValidatorCurrentRewards,
  ValidatorCurrentRewardsRecord,
  ValidatorHistoricalRewards,
  ValidatorHistoricalRewardsRecord,
  ValidatorOutstandingRewards,
  ValidatorOutstandingRewardsRecord,
  ValidatorSlashEvent,
  ValidatorSlashEventRecord,
  ValidatorSlashEvents
}
