"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DenomTrace = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const transfer_1 = require("./module/types/ibc/applications/transfer/v1/transfer");
Object.defineProperty(exports, "DenomTrace", { enumerable: true, get: function () { return transfer_1.DenomTrace; } });
const transfer_2 = require("./module/types/ibc/applications/transfer/v1/transfer");
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return transfer_2.Params; } });
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
        DenomTrace: {},
        DenomTraces: {},
        Params: {},
        _Structure: {
            DenomTrace: getStructure(transfer_1.DenomTrace.fromPartial({})),
            Params: getStructure(transfer_2.Params.fromPartial({})),
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
        getDenomTrace: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DenomTrace[JSON.stringify(params)] ?? {};
        },
        getDenomTraces: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.DenomTraces[JSON.stringify(params)] ?? {};
        },
        getParams: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
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
            console.log('Vuex module: ibc.applications.transfer.v1 initialized!');
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
        async QueryDenomTrace({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDenomTrace(key.hash)).data;
                commit('QUERY', { query: 'DenomTrace', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDenomTrace', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDenomTrace']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDenomTrace', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryDenomTraces({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryDenomTraces(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryDenomTraces({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'DenomTraces', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryDenomTraces', payload: { options: { all }, params: { ...key }, query } });
                return getters['getDenomTraces']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QueryDenomTraces', 'API Node Unavailable. Could not perform query: ' + e.message);
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
        async sendMsgTransfer({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgTransfer(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgTransfer:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgTransfer:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgTransfer({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgTransfer(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgTransfer:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgTransfer:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
