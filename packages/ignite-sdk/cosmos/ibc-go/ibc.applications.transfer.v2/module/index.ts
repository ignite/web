// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from '@cosmjs/launchpad'
import { Registry } from '@cosmjs/proto-signing'
import { DeliverTxResponse, SigningStargateClient } from '@cosmjs/stargate'

import { Api } from './rest'

/*********************
 *       MODULE      *
 *********************/

class Module extends Api<any> {
  private _client: SigningStargateClient
  private _address: string

  types = []
  registry = new Registry(<any>this.types)

  constructor(client: SigningStargateClient, address: string, baseUrl: string) {
    super({
      baseUrl
    })

    this._client = client
    this._address = address
  }
}

/*********************
 *        VUE        *
 *********************/

export { Module }
