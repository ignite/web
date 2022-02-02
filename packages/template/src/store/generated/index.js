"use strict";
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const cosmos_authz_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.authz.v1beta1");
const module_1 = require("./cosmos/cosmos-sdk/cosmos.authz.v1beta1/module");
const cosmos_bank_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.bank.v1beta1");
const module_2 = require("./cosmos/cosmos-sdk/cosmos.bank.v1beta1/module");
const cosmos_crisis_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.crisis.v1beta1");
const module_3 = require("./cosmos/cosmos-sdk/cosmos.crisis.v1beta1/module");
const cosmos_distribution_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.distribution.v1beta1");
const module_4 = require("./cosmos/cosmos-sdk/cosmos.distribution.v1beta1/module");
const cosmos_evidence_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.evidence.v1beta1");
const module_5 = require("./cosmos/cosmos-sdk/cosmos.evidence.v1beta1/module");
const cosmos_feegrant_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1");
const module_6 = require("./cosmos/cosmos-sdk/cosmos.feegrant.v1beta1/module");
const cosmos_gov_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.gov.v1beta1");
const module_7 = require("./cosmos/cosmos-sdk/cosmos.gov.v1beta1/module");
const cosmos_slashing_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.slashing.v1beta1");
const module_8 = require("./cosmos/cosmos-sdk/cosmos.slashing.v1beta1/module");
const cosmos_staking_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.staking.v1beta1");
const module_9 = require("./cosmos/cosmos-sdk/cosmos.staking.v1beta1/module");
const cosmos_vesting_v1beta1_1 = require("./cosmos/cosmos-sdk/cosmos.vesting.v1beta1");
const module_10 = require("./cosmos/cosmos-sdk/cosmos.vesting.v1beta1/module");
const ibc_applications_transfer_v1_1 = require("./cosmos/ibc-go/ibc.applications.transfer.v1");
const module_11 = require("./cosmos/ibc-go/ibc.applications.transfer.v1/module");
const ibc_applications_transfer_v2_1 = require("./cosmos/ibc-go/ibc.applications.transfer.v2");
const module_12 = require("./cosmos/ibc-go/ibc.applications.transfer.v2/module");
exports.default = {
    CosmosCosmosSdkCosmosAuthzV1Beta1: load(cosmos_authz_v1beta1_1.default, 'cosmos.authz.v1beta1'),
    CosmosCosmosSdkCosmosBankV1Beta1: load(cosmos_bank_v1beta1_1.default, 'cosmos.bank.v1beta1'),
    CosmosCosmosSdkCosmosCrisisV1Beta1: load(cosmos_crisis_v1beta1_1.default, 'cosmos.crisis.v1beta1'),
    CosmosCosmosSdkCosmosDistributionV1Beta1: load(cosmos_distribution_v1beta1_1.default, 'cosmos.distribution.v1beta1'),
    CosmosCosmosSdkCosmosEvidenceV1Beta1: load(cosmos_evidence_v1beta1_1.default, 'cosmos.evidence.v1beta1'),
    CosmosCosmosSdkCosmosFeegrantV1Beta1: load(cosmos_feegrant_v1beta1_1.default, 'cosmos.feegrant.v1beta1'),
    CosmosCosmosSdkCosmosGovV1Beta1: load(cosmos_gov_v1beta1_1.default, 'cosmos.gov.v1beta1'),
    CosmosCosmosSdkCosmosSlashingV1Beta1: load(cosmos_slashing_v1beta1_1.default, 'cosmos.slashing.v1beta1'),
    CosmosCosmosSdkCosmosStakingV1Beta1: load(cosmos_staking_v1beta1_1.default, 'cosmos.staking.v1beta1'),
    CosmosCosmosSdkCosmosVestingV1Beta1: load(cosmos_vesting_v1beta1_1.default, 'cosmos.vesting.v1beta1'),
    CosmosIbcGoIbcApplicationsTransferV1: load(ibc_applications_transfer_v1_1.default, 'ibc.applications.transfer.v1'),
    CosmosIbcGoIbcApplicationsTransferV2: load(ibc_applications_transfer_v2_1.default, 'ibc.applications.transfer.v2'),
};
exports.registry = new proto_signing_1.Registry([...module_1.MsgTypes, ...module_2.MsgTypes, ...module_3.MsgTypes, ...module_4.MsgTypes, ...module_5.MsgTypes, ...module_6.MsgTypes, ...module_7.MsgTypes, ...module_8.MsgTypes, ...module_9.MsgTypes, ...module_10.MsgTypes, ...module_11.MsgTypes, ...module_12.MsgTypes]);
function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: ' + fullns);
        }
        else {
            store.registerModule([fullns], mod);
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns + '/init', null, {
                        root: true
                    });
                }
            });
        }
    };
}
