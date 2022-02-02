"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ValidatorSigningInfo = exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const genesis_1 = require("./module/types/cosmos/slashing/v1beta1/genesis");
Object.defineProperty(exports, "SigningInfo", { enumerable: true, get: function () { return genesis_1.SigningInfo; } });
const genesis_2 = require("./module/types/cosmos/slashing/v1beta1/genesis");
Object.defineProperty(exports, "ValidatorMissedBlocks", { enumerable: true, get: function () { return genesis_2.ValidatorMissedBlocks; } });
const genesis_3 = require("./module/types/cosmos/slashing/v1beta1/genesis");
Object.defineProperty(exports, "MissedBlock", { enumerable: true, get: function () { return genesis_3.MissedBlock; } });
const slashing_1 = require("./module/types/cosmos/slashing/v1beta1/slashing");
Object.defineProperty(exports, "ValidatorSigningInfo", { enumerable: true, get: function () { return slashing_1.ValidatorSigningInfo; } });
const slashing_2 = require("./module/types/cosmos/slashing/v1beta1/slashing");
Object.defineProperty(exports, "Params", { enumerable: true, get: function () { return slashing_2.Params; } });
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
        SigningInfo: {},
        SigningInfos: {},
        _Structure: {
            SigningInfo: getStructure(genesis_1.SigningInfo.fromPartial({})),
            ValidatorMissedBlocks: getStructure(genesis_2.ValidatorMissedBlocks.fromPartial({})),
            MissedBlock: getStructure(genesis_3.MissedBlock.fromPartial({})),
            ValidatorSigningInfo: getStructure(slashing_1.ValidatorSigningInfo.fromPartial({})),
            Params: getStructure(slashing_2.Params.fromPartial({})),
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
        getSigningInfo: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SigningInfo[JSON.stringify(params)] ?? {};
        },
        getSigningInfos: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SigningInfos[JSON.stringify(params)] ?? {};
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
            console.log('Vuex module: cosmos.slashing.v1beta1 initialized!');
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
        async QuerySigningInfo({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySigningInfo(key.cons_address)).data;
                commit('QUERY', { query: 'SigningInfo', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySigningInfo', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSigningInfo']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QuerySigningInfo', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QuerySigningInfos({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySigningInfos(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.querySigningInfos({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'SigningInfos', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySigningInfos', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSigningInfos']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new vuex_1.SpVuexError('QueryClient:QuerySigningInfos', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgUnjail({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnjail(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgUnjail:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgUnjail:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgUnjail({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUnjail(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgUnjail:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgUnjail:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
