"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const distribution_1 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return distribution_1.Params; } });
const distribution_2 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorHistoricalRewards", { enumerable: true, get: function () { return distribution_2.ValidatorHistoricalRewards; } });
const distribution_3 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorCurrentRewards", { enumerable: true, get: function () { return distribution_3.ValidatorCurrentRewards; } });
const distribution_4 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorAccumulatedCommission", { enumerable: true, get: function () { return distribution_4.ValidatorAccumulatedCommission; } });
const distribution_5 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorOutstandingRewards", { enumerable: true, get: function () { return distribution_5.ValidatorOutstandingRewards; } });
const distribution_6 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorSlashEvent", { enumerable: true, get: function () { return distribution_6.ValidatorSlashEvent; } });
const distribution_7 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "ValidatorSlashEvents", { enumerable: true, get: function () { return distribution_7.ValidatorSlashEvents; } });
const distribution_8 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "FeePool", { enumerable: true, get: function () { return distribution_8.FeePool; } });
const distribution_9 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "CommunityPoolSpendProposal", { enumerable: true, get: function () { return distribution_9.CommunityPoolSpendProposal; } });
const distribution_10 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "DelegatorStartingInfo", { enumerable: true, get: function () { return distribution_10.DelegatorStartingInfo; } });
const distribution_11 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "DelegationDelegatorReward", { enumerable: true, get: function () { return distribution_11.DelegationDelegatorReward; } });
const distribution_12 = require("./module/types/cosmos/distribution/v1beta1/distribution");
Object.defineProperty(exports, "CommunityPoolSpendProposalWithDeposit", { enumerable: true, get: function () { return distribution_12.CommunityPoolSpendProposalWithDeposit; } });
const genesis_1 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "DelegatorWithdrawInfo", { enumerable: true, get: function () { return genesis_1.DelegatorWithdrawInfo; } });
const genesis_2 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorOutstandingRewardsRecord", { enumerable: true, get: function () { return genesis_2.ValidatorOutstandingRewardsRecord; } });
const genesis_3 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorAccumulatedCommissionRecord", { enumerable: true, get: function () { return genesis_3.ValidatorAccumulatedCommissionRecord; } });
const genesis_4 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorHistoricalRewardsRecord", { enumerable: true, get: function () { return genesis_4.ValidatorHistoricalRewardsRecord; } });
const genesis_5 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorCurrentRewardsRecord", { enumerable: true, get: function () { return genesis_5.ValidatorCurrentRewardsRecord; } });
const genesis_6 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "DelegatorStartingInfoRecord", { enumerable: true, get: function () { return genesis_6.DelegatorStartingInfoRecord; } });
const genesis_7 = require("./module/types/cosmos/distribution/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorSlashEventRecord", { enumerable: true, get: function () { return genesis_7.ValidatorSlashEventRecord; } });
async function initTxClient(vuexGetters) {
    return await module_1.txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await module_1.queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Params: {},
        ValidatorOutstandingRewards: {},
        ValidatorCommission: {},
        ValidatorSlashes: {},
        DelegationRewards: {},
        DelegationTotalRewards: {},
        DelegatorValidators: {},
        DelegatorWithdrawAddress: {},
        CommunityPool: {},
        _Structure: {
            Params: getStructure(distribution_1.Params.fromPartial({})),
            ValidatorHistoricalRewards: getStructure(distribution_2.ValidatorHistoricalRewards.fromPartial({})),
            ValidatorCurrentRewards: getStructure(distribution_3.ValidatorCurrentRewards.fromPartial({})),
            ValidatorAccumulatedCommission: getStructure(distribution_4.ValidatorAccumulatedCommission.fromPartial({})),
            ValidatorOutstandingRewards: getStructure(distribution_5.ValidatorOutstandingRewards.fromPartial({})),
            ValidatorSlashEvent: getStructure(distribution_6.ValidatorSlashEvent.fromPartial({})),
            ValidatorSlashEvents: getStructure(distribution_7.ValidatorSlashEvents.fromPartial({})),
            FeePool: getStructure(distribution_8.FeePool.fromPartial({})),
            CommunityPoolSpendProposal: getStructure(distribution_9.CommunityPoolSpendProposal.fromPartial({})),
            DelegatorStartingInfo: getStructure(distribution_10.DelegatorStartingInfo.fromPartial({})),
            DelegationDelegatorReward: getStructure(distribution_11.DelegationDelegatorReward.fromPartial({})),
            CommunityPoolSpendProposalWithDeposit: getStructure(distribution_12.CommunityPoolSpendProposalWithDeposit.fromPartial({})),
            DelegatorWithdrawInfo: getStructure(genesis_1.DelegatorWithdrawInfo.fromPartial({})),
            ValidatorOutstandingRewardsRecord: getStructure(genesis_2.ValidatorOutstandingRewardsRecord.fromPartial({})),
            ValidatorAccumulatedCommissionRecord: getStructure(genesis_3.ValidatorAccumulatedCommissionRecord.fromPartial({})),
            ValidatorHistoricalRewardsRecord: getStructure(genesis_4.ValidatorHistoricalRewardsRecord.fromPartial({})),
            ValidatorCurrentRewardsRecord: getStructure(genesis_5.ValidatorCurrentRewardsRecord.fromPartial({})),
            DelegatorStartingInfoRecord: getStructure(genesis_6.DelegatorStartingInfoRecord.fromPartial({})),
            ValidatorSlashEventRecord: getStructure(genesis_7.ValidatorSlashEventRecord.fromPartial({})),
        },
        _Registry: module_1.registry,
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
exports.default = {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(JSON.stringify(subscription));
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(JSON.stringify(subscription));
        }
    },
    getters: {
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getValidatorOutstandingRewards: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValidatorOutstandingRewards[JSON.stringify(params)] ?? {};
        },
        getValidatorCommission: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValidatorCommission[JSON.stringify(params)] ?? {};
        },
        getValidatorSlashes: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValidatorSlashes[JSON.stringify(params)] ?? {};
        },
        getDelegationRewards: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DelegationRewards[JSON.stringify(params)] ?? {};
        },
        getDelegationTotalRewards: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DelegationTotalRewards[JSON.stringify(params)] ?? {};
        },
        getDelegatorValidators: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DelegatorValidators[JSON.stringify(params)] ?? {};
        },
        getDelegatorWithdrawAddress: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DelegatorWithdrawAddress[JSON.stringify(params)] ?? {};
        },
        getCommunityPool: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CommunityPool[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        },
        getRegistry: (state) => {
            return state._Registry;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: cosmos.distribution.v1beta1 initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    const sub = JSON.parse(subscription);
                    await dispatch(sub.action, sub.payload);
                }
                catch (e) {
                    throw new vuex_1.SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryValidatorOutstandingRewards({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryValidatorOutstandingRewards(key.validator_address)).data;
                commit('QUERY', { query: 'ValidatorOutstandingRewards', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValidatorOutstandingRewards', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValidatorOutstandingRewards']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryValidatorOutstandingRewards', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryValidatorCommission({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryValidatorCommission(key.validator_address)).data;
                commit('QUERY', { query: 'ValidatorCommission', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValidatorCommission', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValidatorCommission']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryValidatorCommission', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryValidatorSlashes({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryValidatorSlashes(key.validator_address, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryValidatorSlashes(key.validator_address, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ValidatorSlashes', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValidatorSlashes', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValidatorSlashes']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryValidatorSlashes', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDelegationRewards({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDelegationRewards(key.delegator_address, key.validator_address)).data;
                commit('QUERY', { query: 'DelegationRewards', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDelegationRewards', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDelegationRewards']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDelegationRewards', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDelegationTotalRewards({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDelegationTotalRewards(key.delegator_address)).data;
                commit('QUERY', { query: 'DelegationTotalRewards', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDelegationTotalRewards', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDelegationTotalRewards']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDelegationTotalRewards', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDelegatorValidators({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDelegatorValidators(key.delegator_address)).data;
                commit('QUERY', { query: 'DelegatorValidators', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDelegatorValidators', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDelegatorValidators']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDelegatorValidators', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDelegatorWithdrawAddress({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDelegatorWithdrawAddress(key.delegator_address)).data;
                commit('QUERY', { query: 'DelegatorWithdrawAddress', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDelegatorWithdrawAddress', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDelegatorWithdrawAddress']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDelegatorWithdrawAddress', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCommunityPool({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCommunityPool()).data;
                commit('QUERY', { query: 'CommunityPool', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCommunityPool', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCommunityPool']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryCommunityPool', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgSetWithdrawAddress({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetWithdrawAddress(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgSetWithdrawAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgSetWithdrawAddress:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgWithdrawValidatorCommission({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgWithdrawValidatorCommission(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawValidatorCommission:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawValidatorCommission:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgWithdrawDelegatorReward({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgWithdrawDelegatorReward(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawDelegatorReward:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawDelegatorReward:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgFundCommunityPool({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgFundCommunityPool(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgFundCommunityPool:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgFundCommunityPool:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgSetWithdrawAddress({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetWithdrawAddress(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgSetWithdrawAddress:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgSetWithdrawAddress:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgWithdrawValidatorCommission({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgWithdrawValidatorCommission(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawValidatorCommission:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawValidatorCommission:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgWithdrawDelegatorReward({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgWithdrawDelegatorReward(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawDelegatorReward:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgWithdrawDelegatorReward:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgFundCommunityPool({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgFundCommunityPool(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgFundCommunityPool:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgFundCommunityPool:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
