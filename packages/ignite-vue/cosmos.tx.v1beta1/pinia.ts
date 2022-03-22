// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import {
  AuthInfo,
  Fee,
  ModeInfo,
  ModeInfo_Multi,
  ModeInfo_Single,
  SignDoc,
  SignerInfo,
  Tx,
  TxBody,
  TxRaw
} from '@ignt/client/cosmos.tx.v1beta1/types'
import { defineStore } from 'pinia'

type PiniaState = {
  TxAll: Tx[]
  TxRawAll: TxRaw[]
  SignDocAll: SignDoc[]
  TxBodyAll: TxBody[]
  AuthInfoAll: AuthInfo[]
  SignerInfoAll: SignerInfo[]
  ModeInfoAll: ModeInfo[]
  ModeInfo_SingleAll: ModeInfo_Single[]
  ModeInfo_MultiAll: ModeInfo_Multi[]
  FeeAll: Fee[]
}

const piniaStore = {
  state: (): PiniaState => {
    return {
      TxAll: [],
      TxRawAll: [],
      SignDocAll: [],
      TxBodyAll: [],
      AuthInfoAll: [],
      SignerInfoAll: [],
      ModeInfoAll: [],
      ModeInfo_SingleAll: [],
      ModeInfo_MultiAll: [],
      FeeAll: []
    }
  }
}

const usePiniaStore = defineStore('cosmos.tx.v1beta1', piniaStore)

export { PiniaState, usePiniaStore }
