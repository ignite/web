"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const feegrant_1 = require("./module/types/cosmos/feegrant/v1beta1/feegrant");
Object.defineProperty(exports, "BasicAllowance", { enumerable: true, get: function () { return feegrant_1.BasicAllowance; } });
const feegrant_2 = require("./module/types/cosmos/feegrant/v1beta1/feegrant");
Object.defineProperty(exports, "PeriodicAllowance", { enumerable: true, get: function () { return feegrant_2.PeriodicAllowance; } });
const feegrant_3 = require("./module/types/cosmos/feegrant/v1beta1/feegrant");
Object.defineProperty(exports, "AllowedMsgAllowance", { enumerable: true, get: function () { return feegrant_3.AllowedMsgAllowance; } });
const feegrant_4 = require("./module/types/cosmos/feegrant/v1beta1/feegrant");
Object.defineProperty(exports, "Grant", { enumerable: true, get: function () { return feegrant_4.Grant; } });
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
        Allowance: {},
        Allowances: {},
        _Structure: {
            BasicAllowance: getStructure(feegrant_1.BasicAllowance.fromPartial({})),
            PeriodicAllowance: getStructure(feegrant_2.PeriodicAllowance.fromPartial({})),
            AllowedMsgAllowance: getStructure(feegrant_3.AllowedMsgAllowance.fromPartial({})),
            Grant: getStructure(feegrant_4.Grant.fromPartial({})),
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
        getAllowance: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Allowance[JSON.stringify(params)] ?? {};
        },
        getAllowances: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Allowances[JSON.stringify(params)] ?? {};
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
            console.log('Vuex module: cosmos.feegrant.v1beta1 initialized!');
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
        async QueryAllowance({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAllowance(key.granter, key.grantee)).data;
                commit('QUERY', { query: 'Allowance', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAllowance', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAllowance']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryAllowance', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryAllowances({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryAllowances(key.grantee, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryAllowances(key.grantee, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'Allowances', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAllowances', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAllowances']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryAllowances', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgGrantAllowance({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgGrantAllowance(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgGrantAllowance:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgGrantAllowance:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRevokeAllowance({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRevokeAllowance(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgRevokeAllowance:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgRevokeAllowance:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgGrantAllowance({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgGrantAllowance(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgGrantAllowance:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgGrantAllowance:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRevokeAllowance({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRevokeAllowance(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgRevokeAllowance:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgRevokeAllowance:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
