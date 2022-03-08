// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { OfflineSigner, Registry } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'

import {
  Module as CosmosAuthzV1Beta1,
  msgTypes as CosmosAuthzV1Beta1MsgTypes
} from './cosmos.authz.v1beta1'
import {
  Module as CosmosBankV1Beta1,
  msgTypes as CosmosBankV1Beta1MsgTypes
} from './cosmos.bank.v1beta1'
import {
  Module as CosmosCrisisV1Beta1,
  msgTypes as CosmosCrisisV1Beta1MsgTypes
} from './cosmos.crisis.v1beta1'
import {
  Module as CosmosDistributionV1Beta1,
  msgTypes as CosmosDistributionV1Beta1MsgTypes
} from './cosmos.distribution.v1beta1'
import {
  Module as CosmosEvidenceV1Beta1,
  msgTypes as CosmosEvidenceV1Beta1MsgTypes
} from './cosmos.evidence.v1beta1'
import {
  Module as CosmosFeegrantV1Beta1,
  msgTypes as CosmosFeegrantV1Beta1MsgTypes
} from './cosmos.feegrant.v1beta1'
import {
  Module as CosmosGovV1Beta1,
  msgTypes as CosmosGovV1Beta1MsgTypes
} from './cosmos.gov.v1beta1'
import {
  Module as CosmosSlashingV1Beta1,
  msgTypes as CosmosSlashingV1Beta1MsgTypes
} from './cosmos.slashing.v1beta1'
import {
  Module as CosmosStakingV1Beta1,
  msgTypes as CosmosStakingV1Beta1MsgTypes
} from './cosmos.staking.v1beta1'
import {
  Module as CosmosVestingV1Beta1,
  msgTypes as CosmosVestingV1Beta1MsgTypes
} from './cosmos.vesting.v1beta1'
import {
  Module as IbcApplicationsTransferV1,
  msgTypes as IbcApplicationsTransferV1MsgTypes
} from './ibc.applications.transfer.v1'
import {
  Module as IbcApplicationsTransferV2,
  msgTypes as IbcApplicationsTransferV2MsgTypes
} from './ibc.applications.transfer.v2'

const registry = new Registry(<any>[
  ...CosmosAuthzV1Beta1MsgTypes,
  ...CosmosBankV1Beta1MsgTypes,
  ...CosmosCrisisV1Beta1MsgTypes,
  ...CosmosDistributionV1Beta1MsgTypes,
  ...CosmosEvidenceV1Beta1MsgTypes,
  ...CosmosFeegrantV1Beta1MsgTypes,
  ...CosmosGovV1Beta1MsgTypes,
  ...CosmosSlashingV1Beta1MsgTypes,
  ...CosmosStakingV1Beta1MsgTypes,
  ...CosmosVestingV1Beta1MsgTypes,
  ...IbcApplicationsTransferV1MsgTypes,
  ...IbcApplicationsTransferV2MsgTypes
])

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
      this._offlineSigner,
      { registry }
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

  public CosmosAuthzV1Beta1: CosmosAuthzV1Beta1
  public CosmosBankV1Beta1: CosmosBankV1Beta1
  public CosmosCrisisV1Beta1: CosmosCrisisV1Beta1
  public CosmosDistributionV1Beta1: CosmosDistributionV1Beta1
  public CosmosEvidenceV1Beta1: CosmosEvidenceV1Beta1
  public CosmosFeegrantV1Beta1: CosmosFeegrantV1Beta1
  public CosmosGovV1Beta1: CosmosGovV1Beta1
  public CosmosSlashingV1Beta1: CosmosSlashingV1Beta1
  public CosmosStakingV1Beta1: CosmosStakingV1Beta1
  public CosmosVestingV1Beta1: CosmosVestingV1Beta1
  public IbcApplicationsTransferV1: IbcApplicationsTransferV1
  public IbcApplicationsTransferV2: IbcApplicationsTransferV2

  constructor({ env, signer, address }: IgniteParams) {
    this._env = env
    this._address = address
    this._signer = new Signer(env.rpcURL, signer)
  }

  public async init() {
    await this._signer.init()

    let client: SigningStargateClient = this._signer
      .signer as SigningStargateClient

    this.CosmosAuthzV1Beta1 = new CosmosAuthzV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosBankV1Beta1 = new CosmosBankV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosCrisisV1Beta1 = new CosmosCrisisV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosDistributionV1Beta1 = new CosmosDistributionV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosEvidenceV1Beta1 = new CosmosEvidenceV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosFeegrantV1Beta1 = new CosmosFeegrantV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosGovV1Beta1 = new CosmosGovV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosSlashingV1Beta1 = new CosmosSlashingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosStakingV1Beta1 = new CosmosStakingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.CosmosVestingV1Beta1 = new CosmosVestingV1Beta1(
      client,
      this._address,
      this._env.apiURL
    )
    this.IbcApplicationsTransferV1 = new IbcApplicationsTransferV1(
      client,
      this._address,
      this._env.apiURL
    )
    this.IbcApplicationsTransferV2 = new IbcApplicationsTransferV2(
      client,
      this._address,
      this._env.apiURL
    )
  }

  get env(): Environment {
    return this._env
  }
}

export { Ignite, registry }
