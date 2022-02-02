"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = exports.SendAuthorization = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const authz_1 = require("./module/types/cosmos/bank/v1beta1/authz");
Object.defineProperty(exports, "SendAuthorization", { enumerable: true, get: function () { return authz_1.SendAuthorization; } });
const bank_1 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return bank_1.Params; } });
const bank_2 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "SendEnabled", { enumerable: true, get: function () { return bank_2.SendEnabled; } });
const bank_3 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return bank_3.Input; } });
const bank_4 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "Output", { enumerable: true, get: function () { return bank_4.Output; } });
const bank_5 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "Supply", { enumerable: true, get: function () { return bank_5.Supply; } });
const bank_6 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "DenomUnit", { enumerable: true, get: function () { return bank_6.DenomUnit; } });
const bank_7 = require("./module/types/cosmos/bank/v1beta1/bank");
Object.defineProperty(exports, "Metadata", { enumerable: true, get: function () { return bank_7.Metadata; } });
const genesis_1 = require("./module/types/cosmos/bank/v1beta1/genesis");
Object.defineProperty(exports, "Balance", { enumerable: true, get: function () { return genesis_1.Balance; } });
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
        Balance: {},
        AllBalances: {},
        TotalSupply: {},
        SupplyOf: {},
        Params: {},
        DenomMetadata: {},
        DenomsMetadata: {},
        _Structure: {
            SendAuthorization: getStructure(authz_1.SendAuthorization.fromPartial({})),
            Params: getStructure(bank_1.Params.fromPartial({})),
            SendEnabled: getStructure(bank_2.SendEnabled.fromPartial({})),
            Input: getStructure(bank_3.Input.fromPartial({})),
            Output: getStructure(bank_4.Output.fromPartial({})),
            Supply: getStructure(bank_5.Supply.fromPartial({})),
            DenomUnit: getStructure(bank_6.DenomUnit.fromPartial({})),
            Metadata: getStructure(bank_7.Metadata.fromPartial({})),
            Balance: getStructure(genesis_1.Balance.fromPartial({})),
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
        getBalance: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Balance[JSON.stringify(params)] ?? {};
        },
        getAllBalances: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AllBalances[JSON.stringify(params)] ?? {};
        },
        getTotalSupply: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.TotalSupply[JSON.stringify(params)] ?? {};
        },
        getSupplyOf: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SupplyOf[JSON.stringify(params)] ?? {};
        },
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getDenomMetadata: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DenomMetadata[JSON.stringify(params)] ?? {};
        },
        getDenomsMetadata: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DenomsMetadata[JSON.stringify(params)] ?? {};
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
            console.log('Vuex module: cosmos.bank.v1beta1 initialized!');
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
        async QueryBalance({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryBalance(key.address, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryBalance(key.address, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'Balance', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBalance', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBalance']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryBalance', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAllBalances({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAllBalances(key.address, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryAllBalances(key.address, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'AllBalances', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAllBalances', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAllBalances']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryAllBalances', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryTotalSupply({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryTotalSupply(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryTotalSupply({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'TotalSupply', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryTotalSupply', payload: { options: { all }, params: { ...key }, query } });
                return getters['getTotalSupply']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryTotalSupply', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QuerySupplyOf({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySupplyOf(key.denom)).data;
                commit('QUERY', { query: 'SupplyOf', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySupplyOf', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSupplyOf']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QuerySupplyOf', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
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
        async QueryDenomMetadata({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDenomMetadata(key.denom)).data;
                commit('QUERY', { query: 'DenomMetadata', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDenomMetadata', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDenomMetadata']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDenomMetadata', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDenomsMetadata({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDenomsMetadata(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryDenomsMetadata({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'DenomsMetadata', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDenomsMetadata', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDenomsMetadata']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDenomsMetadata', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgMultiSend({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMultiSend(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgMultiSend:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgMultiSend:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSend({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSend(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgSend:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgSend:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgMultiSend({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMultiSend(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgMultiSend:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgMultiSend:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSend({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSend(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgSend:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgSend:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
