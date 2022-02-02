"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = void 0;
const module_1 = require("./module");
// @ts-ignore
const vuex_1 = require("@starport/vuex");
const vesting_1 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "BaseVestingAccount", { enumerable: true, get: function () { return vesting_1.BaseVestingAccount; } });
const vesting_2 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "ContinuousVestingAccount", { enumerable: true, get: function () { return vesting_2.ContinuousVestingAccount; } });
const vesting_3 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "DelayedVestingAccount", { enumerable: true, get: function () { return vesting_3.DelayedVestingAccount; } });
const vesting_4 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "Period", { enumerable: true, get: function () { return vesting_4.Period; } });
const vesting_5 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "PeriodicVestingAccount", { enumerable: true, get: function () { return vesting_5.PeriodicVestingAccount; } });
const vesting_6 = require("./module/types/cosmos/vesting/v1beta1/vesting");
Object.defineProperty(exports, "PermanentLockedAccount", { enumerable: true, get: function () { return vesting_6.PermanentLockedAccount; } });
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
        _Structure: {
            BaseVestingAccount: getStructure(vesting_1.BaseVestingAccount.fromPartial({})),
            ContinuousVestingAccount: getStructure(vesting_2.ContinuousVestingAccount.fromPartial({})),
            DelayedVestingAccount: getStructure(vesting_3.DelayedVestingAccount.fromPartial({})),
            Period: getStructure(vesting_4.Period.fromPartial({})),
            PeriodicVestingAccount: getStructure(vesting_5.PeriodicVestingAccount.fromPartial({})),
            PermanentLockedAccount: getStructure(vesting_6.PermanentLockedAccount.fromPartial({})),
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
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        },
        getRegistry: (state) => {
            return state._Registry;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: cosmos.vesting.v1beta1 initialized!');
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
        async sendMsgCreateVestingAccount({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateVestingAccount(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgCreateVestingAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgCreateVestingAccount:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgCreateVestingAccount({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateVestingAccount(value);
                return msg;
            }
            catch (e) {
                if (e == module_1.MissingWalletError) {
                    throw new vuex_1.SpVuexError('TxClient:MsgCreateVestingAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new vuex_1.SpVuexError('TxClient:MsgCreateVestingAccount:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
