// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'
import { MsgSubmitEvidence } from './types/cosmos/evidence/v1beta1/tx'

type sendMsgSubmitEvidenceParams = {
  value: MsgSubmitEvidence
  fee?: StdFee
  memo?: string
}

type msgSubmitEvidenceParams = {
  value: MsgSubmitEvidence
}

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = [['/cosmos.evidence.v1beta1.MsgSubmitEvidence', MsgSubmitEvidence]]
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }

  async sendMsgSubmitEvidence({
    value,
    fee,
    memo
  }: sendMsgSubmitEvidenceParams): Promise<DeliverTxResponse> {
    try {
      let msg = {
        typeUrl: '/cosmos.evidence.v1beta1.MsgSubmitEvidence',
        value: MsgSubmitEvidence.fromPartial(value)
      }
      return await this._client.signAndBroadcast(
        this._address,
        [msg],
        fee ? fee : { amount: [], gas: '200000' },
        memo
      )
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSubmitEvidence:Send Could not broadcast Tx: ' + e.message
      )
    }
  }

  msgSubmitEvidence({ value }: msgSubmitEvidenceParams): {
    typeUrl: string
    value: MsgSubmitEvidence
  } {
    try {
      return {
        typeUrl: '/cosmos.evidence.v1beta1.MsgSubmitEvidence',
        value: MsgSubmitEvidence.fromPartial(value)
      }
    } catch (e: any) {
      throw new Error(
        'TxClient:MsgSubmitEvidence:Create Could not create message: ' +
          e.message
      )
    }
  }
}

export default Module
