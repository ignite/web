// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { OfflineSigner } from '@cosmjs/proto-signing'
import { OfflineSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { SigningStargateClient } from '@cosmjs/stargate'
import { io, Socket } from 'socket.io-client'

import { M as CosmosCosmosSdkCosmosAuthzV1Beta1 } from './cosmos/cosmos-sdk/cosmos.authz.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosBankV1Beta1 } from './cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosCrisisV1Beta1 } from './cosmos/cosmos-sdk/cosmos.crisis.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosDistributionV1Beta1 } from './cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosEvidenceV1Beta1 } from './cosmos/cosmos-sdk/cosmos.evidence.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosFeegrantV1Beta1 } from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosGovV1Beta1 } from './cosmos/cosmos-sdk/cosmos.gov.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosSlashingV1Beta1 } from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosStakingV1Beta1 } from './cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/'
import { M as CosmosCosmosSdkCosmosVestingV1Beta1 } from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1/module/'
import { M as CosmosIbcGoIbcApplicationsTransferV1 } from './cosmos/ibc-go/ibc.applications.transfer.v1/module/'
import { M as CosmosIbcGoIbcApplicationsTransferV2 } from './cosmos/ibc-go/ibc.applications.transfer.v2/module/'

class Signer {
  private _offlineSigner: OfflineSigner
  private _client?: SigningStargateClient
  private _addr: string

  constructor(rpcAddr: string, offlineSigner: OfflineSigner) {
    this._offlineSigner = offlineSigner
    this._addr = rpcAddr
  }

  public async init() {
    this._client = await SigningStargateClient.connectWithSigner(
      this._addr,
      this._offlineSigner
    )
  }

  get signer() {
    return this._client
  }
}

interface WSClientParams {
  env: Environment
}

class WSClient {
  private _env: Environment
  private _socket: Socket

  constructor({ env }: WSClientParams) {
    this._env = env

    try {
      this._socket = io(this._env.wsURL)

      this._socket.close()
    } catch (e) {
      throw e
    }
  }
}

interface Environment {
  chainID: string
  chainName: string
  apiURL: string
  rpcURL: string
  wsURL: string
}

interface IgniteParams {
  env: Environment
  signer: OfflineSigner
  address: string
}

class Ignite {
  private _ws: WSClient
  private _env: Environment
  private _signer: Signer
  private _address: string

  public CosmosAuthzV1Beta1?: CosmosCosmosSdkCosmosAuthzV1Beta1
  public CosmosBankV1Beta1?: CosmosCosmosSdkCosmosBankV1Beta1
  public CosmosCrisisV1Beta1?: CosmosCosmosSdkCosmosCrisisV1Beta1
  public CosmosDistributionV1Beta1?: CosmosCosmosSdkCosmosDistributionV1Beta1
  public CosmosEvidenceV1Beta1?: CosmosCosmosSdkCosmosEvidenceV1Beta1
  public CosmosFeegrantV1Beta1?: CosmosCosmosSdkCosmosFeegrantV1Beta1
  public CosmosGovV1Beta1?: CosmosCosmosSdkCosmosGovV1Beta1
  public CosmosSlashingV1Beta1?: CosmosCosmosSdkCosmosSlashingV1Beta1
  public CosmosStakingV1Beta1?: CosmosCosmosSdkCosmosStakingV1Beta1
  public CosmosVestingV1Beta1?: CosmosCosmosSdkCosmosVestingV1Beta1
  public IbcApplicationsTransferV1?: CosmosIbcGoIbcApplicationsTransferV1
  public IbcApplicationsTransferV2?: CosmosIbcGoIbcApplicationsTransferV2

  constructor({ env, signer, address }: IgniteParams) {
    this._env = env
    this._ws = new WSClient({ env: this._env })
    this._address = address
    this._signer = new Signer(env.rpcURL, signer)
  }

  public async init() {
    await this._signer.init()

    let client: SigningStargateClient = this._signer
      .signer as SigningStargateClient

    this.CosmosAuthzV1Beta1 = new CosmosCosmosSdkCosmosAuthzV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosBankV1Beta1 = new CosmosCosmosSdkCosmosBankV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosCrisisV1Beta1 = new CosmosCosmosSdkCosmosCrisisV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosDistributionV1Beta1 =
      new CosmosCosmosSdkCosmosDistributionV1Beta1(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosEvidenceV1Beta1 = new CosmosCosmosSdkCosmosEvidenceV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosFeegrantV1Beta1 = new CosmosCosmosSdkCosmosFeegrantV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosGovV1Beta1 = new CosmosCosmosSdkCosmosGovV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosSlashingV1Beta1 = new CosmosCosmosSdkCosmosSlashingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosStakingV1Beta1 = new CosmosCosmosSdkCosmosStakingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosVestingV1Beta1 = new CosmosCosmosSdkCosmosVestingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.IbcApplicationsTransferV1 = new CosmosIbcGoIbcApplicationsTransferV1(
      client,
      this._address,
      this._env.apiURL
    )
    this.IbcApplicationsTransferV2 = new CosmosIbcGoIbcApplicationsTransferV2(
      client,
      this._address,
      this._env.apiURL
    )
  }

  get ws(): WSClient {
    return this._ws
  }

  get env(): Environment {
    return this._env
  }
}

export {
  CosmosCosmosSdkCosmosAuthzV1Beta1,
  CosmosCosmosSdkCosmosBankV1Beta1,
  CosmosCosmosSdkCosmosCrisisV1Beta1,
  CosmosCosmosSdkCosmosDistributionV1Beta1,
  CosmosCosmosSdkCosmosEvidenceV1Beta1,
  CosmosCosmosSdkCosmosFeegrantV1Beta1,
  CosmosCosmosSdkCosmosGovV1Beta1,
  CosmosCosmosSdkCosmosSlashingV1Beta1,
  CosmosCosmosSdkCosmosStakingV1Beta1,
  CosmosCosmosSdkCosmosVestingV1Beta1,
  CosmosIbcGoIbcApplicationsTransferV1,
  CosmosIbcGoIbcApplicationsTransferV2,
  Ignite
}
