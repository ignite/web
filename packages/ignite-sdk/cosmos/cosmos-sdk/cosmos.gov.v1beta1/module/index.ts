// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgVote } from './types/cosmos/gov/v1beta1/tx'
import { MsgSubmitProposal } from './types/cosmos/gov/v1beta1/tx'
import { MsgVoteWeighted } from './types/cosmos/gov/v1beta1/tx'
import { MsgDeposit } from './types/cosmos/gov/v1beta1/tx'

/*********************
 *       MODULE      *
 *********************/

type sendMsgVoteParams = {
  value: MsgVote
  fee?: StdFee
  memo?: string
}

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal
  fee?: StdFee
  memo?: string
}

type sendMsgVoteWeightedParams = {
  value: MsgVoteWeighted
  fee?: StdFee
  memo?: string
}

type sendMsgDepositParams = {
  value: MsgDeposit
  fee?: StdFee
  memo?: string
}

type msgVoteParams = {
  value: MsgVote
}

type msgSubmitProposalParams = {
  value: MsgSubmitProposal
}

type msgVoteWeightedParams = {
  value: MsgVoteWeighted
}

type msgDepositParams = {
  value: MsgDeposit
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [
    ['/cosmos.gov.v1beta1.MsgVote', MsgVote],
    ['/cosmos.gov.v1beta1.MsgSubmitProposal', MsgSubmitProposal],
    ['/cosmos.gov.v1beta1.MsgVoteWeighted', MsgVoteWeighted],
    ['/cosmos.gov.v1beta1.MsgDeposit', MsgDeposit]
  ]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgVote({
    value,
    fee,
    memo
  }: sendMsgVoteParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: MsgVote.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVote:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgSubmitProposal({
    value,
    fee,
    memo
  }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: MsgSubmitProposal.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSubmitProposal:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgVoteWeighted({
    value,
    fee,
    memo
  }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.gov.v1beta1.MsgVoteWeighted',
        value: MsgVoteWeighted.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVoteWeighted:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  async sendMsgDeposit({
    value,
    fee,
    memo
  }: sendMsgDepositParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.gov.v1beta1.MsgDeposit',
        value: MsgDeposit.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDeposit:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgVote({ value }: msgVoteParams): { typeUrl: string; value: MsgVote } {
    try {
      return {
        typeUrl: '/cosmos.gov.v1beta1.MsgVote',
        value: MsgVote.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVote:Create Could not create message: ' + e.message
      )
    }
  }

  msgSubmitProposal({ value }: msgSubmitProposalParams): {
    typeUrl: string
    value: MsgSubmitProposal
  } {
    try {
      return {
        typeUrl: '/cosmos.gov.v1beta1.MsgSubmitProposal',
        value: MsgSubmitProposal.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSubmitProposal:Create Could not create message: ' +
          e.message
      )
    }
  }

  msgVoteWeighted({ value }: msgVoteWeightedParams): {
    typeUrl: string
    value: MsgVoteWeighted
  } {
    try {
      return {
        typeUrl: '/cosmos.gov.v1beta1.MsgVoteWeighted',
        value: MsgVoteWeighted.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgVoteWeighted:Create Could not create message: ' + e.message
      )
    }
  }

  msgDeposit({ value }: msgDepositParams): {
    typeUrl: string
    value: MsgDeposit
  } {
    try {
      return {
        typeUrl: '/cosmos.gov.v1beta1.MsgDeposit',
        value: MsgDeposit.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgDeposit:Create Could not create message: ' + e.message
      )
    }
  }
}

/*********************
 *        VUE        *
 *********************/

export { Module }
