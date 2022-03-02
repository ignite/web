// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { OfflineSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'

import {
  Module as CosmosCosmosSdkCosmosAuthzV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosAuthzV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.authz.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosBankV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosBankV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.bank.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosCrisisV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosCrisisV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.crisis.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosDistributionV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosDistributionV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosEvidenceV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosEvidenceV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.evidence.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosFeegrantV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosFeegrantV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosGovV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosGovV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.gov.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosSlashingV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosSlashingV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosStakingV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosStakingV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.staking.v1beta1/module/'
import {
  Module as CosmosCosmosSdkCosmosVestingV1Beta1Module,
  usePiniaStore as useCosmosCosmosSdkCosmosVestingV1Beta1ModulePiniaStore
} from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1/module/'
import {
  Module as CosmosIbcGoIbcApplicationsTransferV1Module,
  usePiniaStore as useCosmosIbcGoIbcApplicationsTransferV1ModulePiniaStore
} from './cosmos/ibc-go/ibc.applications.transfer.v1/module/'
import {
  Module as CosmosIbcGoIbcApplicationsTransferV2Module,
  usePiniaStore as useCosmosIbcGoIbcApplicationsTransferV2ModulePiniaStore
} from './cosmos/ibc-go/ibc.applications.transfer.v2/module/'

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
  private _env: Environment
  private _signer: Signer
  private _address: string

  public CosmosCosmosSdkCosmosAuthzV1Beta1Module: CosmosCosmosSdkCosmosAuthzV1Beta1Module
  public CosmosCosmosSdkCosmosBankV1Beta1Module: CosmosCosmosSdkCosmosBankV1Beta1Module
  public CosmosCosmosSdkCosmosCrisisV1Beta1Module: CosmosCosmosSdkCosmosCrisisV1Beta1Module
  public CosmosCosmosSdkCosmosDistributionV1Beta1Module: CosmosCosmosSdkCosmosDistributionV1Beta1Module
  public CosmosCosmosSdkCosmosEvidenceV1Beta1Module: CosmosCosmosSdkCosmosEvidenceV1Beta1Module
  public CosmosCosmosSdkCosmosFeegrantV1Beta1Module: CosmosCosmosSdkCosmosFeegrantV1Beta1Module
  public CosmosCosmosSdkCosmosGovV1Beta1Module: CosmosCosmosSdkCosmosGovV1Beta1Module
  public CosmosCosmosSdkCosmosSlashingV1Beta1Module: CosmosCosmosSdkCosmosSlashingV1Beta1Module
  public CosmosCosmosSdkCosmosStakingV1Beta1Module: CosmosCosmosSdkCosmosStakingV1Beta1Module
  public CosmosCosmosSdkCosmosVestingV1Beta1Module: CosmosCosmosSdkCosmosVestingV1Beta1Module
  public CosmosIbcGoIbcApplicationsTransferV1Module: CosmosIbcGoIbcApplicationsTransferV1Module
  public CosmosIbcGoIbcApplicationsTransferV2Module: CosmosIbcGoIbcApplicationsTransferV2Module

  constructor({ env, signer, address }: IgniteParams) {
    this._env = env
    this._address = address
    this._signer = new Signer(env.rpcURL, signer)
  }

  public async init() {
    await this._signer.init()

    let client: SigningStargateClient = this._signer
      .signer as SigningStargateClient

    this.CosmosCosmosSdkCosmosAuthzV1Beta1Module =
      new CosmosCosmosSdkCosmosAuthzV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosBankV1Beta1Module =
      new CosmosCosmosSdkCosmosBankV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosCrisisV1Beta1Module =
      new CosmosCosmosSdkCosmosCrisisV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosDistributionV1Beta1Module =
      new CosmosCosmosSdkCosmosDistributionV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosEvidenceV1Beta1Module =
      new CosmosCosmosSdkCosmosEvidenceV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosFeegrantV1Beta1Module =
      new CosmosCosmosSdkCosmosFeegrantV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosGovV1Beta1Module =
      new CosmosCosmosSdkCosmosGovV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosSlashingV1Beta1Module =
      new CosmosCosmosSdkCosmosSlashingV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosStakingV1Beta1Module =
      new CosmosCosmosSdkCosmosStakingV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosCosmosSdkCosmosVestingV1Beta1Module =
      new CosmosCosmosSdkCosmosVestingV1Beta1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosIbcGoIbcApplicationsTransferV1Module =
      new CosmosIbcGoIbcApplicationsTransferV1Module(
        client,
        this._address,
        this._env.apiURL
      )
    this.CosmosIbcGoIbcApplicationsTransferV2Module =
      new CosmosIbcGoIbcApplicationsTransferV2Module(
        client,
        this._address,
        this._env.apiURL
      )
  }

  get env(): Environment {
    return this._env
  }
}

export {
  Ignite,
  useCosmosCosmosSdkCosmosAuthzV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosBankV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosCrisisV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosDistributionV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosEvidenceV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosFeegrantV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosGovV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosSlashingV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosStakingV1Beta1ModulePiniaStore,
  useCosmosCosmosSdkCosmosVestingV1Beta1ModulePiniaStore,
  useCosmosIbcGoIbcApplicationsTransferV1ModulePiniaStore,
  useCosmosIbcGoIbcApplicationsTransferV2ModulePiniaStore
}
