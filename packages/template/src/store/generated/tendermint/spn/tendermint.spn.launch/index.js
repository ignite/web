import { txClient, queryClient, MissingWalletError, registry } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Chain } from "./module/types/launch/chain";
import { InitialGenesis } from "./module/types/launch/chain";
import { DefaultInitialGenesis } from "./module/types/launch/chain";
import { GenesisURL } from "./module/types/launch/chain";
import { RequestCounter } from "./module/types/launch/genesis";
import { GenesisAccount } from "./module/types/launch/genesis_account";
import { GenesisValidator } from "./module/types/launch/genesis_validator";
import { Params } from "./module/types/launch/params";
import { Request } from "./module/types/launch/request";
import { RequestContent } from "./module/types/launch/request";
import { AccountRemoval } from "./module/types/launch/request";
import { ValidatorRemoval } from "./module/types/launch/request";
import { VestingAccount } from "./module/types/launch/vesting_account";
import { VestingOptions } from "./module/types/launch/vesting_account";
import { DelayedVesting } from "./module/types/launch/vesting_account";
export { Chain, InitialGenesis, DefaultInitialGenesis, GenesisURL, RequestCounter, GenesisAccount, GenesisValidator, Params, Request, RequestContent, AccountRemoval, ValidatorRemoval, VestingAccount, VestingOptions, DelayedVesting };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
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
        Chain: {},
        ChainAll: {},
        GenesisAccount: {},
        GenesisAccountAll: {},
        VestingAccount: {},
        VestingAccountAll: {},
        GenesisValidator: {},
        GenesisValidatorAll: {},
        Request: {},
        RequestAll: {},
        Params: {},
        _Structure: {
            Chain: getStructure(Chain.fromPartial({})),
            InitialGenesis: getStructure(InitialGenesis.fromPartial({})),
            DefaultInitialGenesis: getStructure(DefaultInitialGenesis.fromPartial({})),
            GenesisURL: getStructure(GenesisURL.fromPartial({})),
            RequestCounter: getStructure(RequestCounter.fromPartial({})),
            GenesisAccount: getStructure(GenesisAccount.fromPartial({})),
            GenesisValidator: getStructure(GenesisValidator.fromPartial({})),
            Params: getStructure(Params.fromPartial({})),
            Request: getStructure(Request.fromPartial({})),
            RequestContent: getStructure(RequestContent.fromPartial({})),
            AccountRemoval: getStructure(AccountRemoval.fromPartial({})),
            ValidatorRemoval: getStructure(ValidatorRemoval.fromPartial({})),
            VestingAccount: getStructure(VestingAccount.fromPartial({})),
            VestingOptions: getStructure(VestingOptions.fromPartial({})),
            DelayedVesting: getStructure(DelayedVesting.fromPartial({})),
        },
        _Registry: registry,
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
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
        getChain: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Chain[JSON.stringify(params)] ?? {};
        },
        getChainAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ChainAll[JSON.stringify(params)] ?? {};
        },
        getGenesisAccount: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GenesisAccount[JSON.stringify(params)] ?? {};
        },
        getGenesisAccountAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GenesisAccountAll[JSON.stringify(params)] ?? {};
        },
        getVestingAccount: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.VestingAccount[JSON.stringify(params)] ?? {};
        },
        getVestingAccountAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.VestingAccountAll[JSON.stringify(params)] ?? {};
        },
        getGenesisValidator: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GenesisValidator[JSON.stringify(params)] ?? {};
        },
        getGenesisValidatorAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GenesisValidatorAll[JSON.stringify(params)] ?? {};
        },
        getRequest: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Request[JSON.stringify(params)] ?? {};
        },
        getRequestAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.RequestAll[JSON.stringify(params)] ?? {};
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
            console.log('Vuex module: tendermint.spn.launch initialized!');
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
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryChain({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryChain(key.launchID)).data;
                commit('QUERY', { query: 'Chain', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryChain', payload: { options: { all }, params: { ...key }, query } });
                return getters['getChain']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryChain', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryChainAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryChainAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryChainAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ChainAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryChainAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getChainAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryChainAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryGenesisAccount({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGenesisAccount(key.launchID, key.address)).data;
                commit('QUERY', { query: 'GenesisAccount', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGenesisAccount', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGenesisAccount']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGenesisAccount', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryGenesisAccountAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGenesisAccountAll(key.launchID, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryGenesisAccountAll(key.launchID, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'GenesisAccountAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGenesisAccountAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGenesisAccountAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGenesisAccountAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryVestingAccount({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryVestingAccount(key.launchID, key.address)).data;
                commit('QUERY', { query: 'VestingAccount', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryVestingAccount', payload: { options: { all }, params: { ...key }, query } });
                return getters['getVestingAccount']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryVestingAccount', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryVestingAccountAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryVestingAccountAll(key.launchID, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryVestingAccountAll(key.launchID, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'VestingAccountAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryVestingAccountAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getVestingAccountAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryVestingAccountAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryGenesisValidator({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGenesisValidator(key.launchID, key.address)).data;
                commit('QUERY', { query: 'GenesisValidator', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGenesisValidator', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGenesisValidator']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGenesisValidator', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryGenesisValidatorAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGenesisValidatorAll(key.launchID, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryGenesisValidatorAll(key.launchID, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'GenesisValidatorAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGenesisValidatorAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGenesisValidatorAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGenesisValidatorAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryRequest({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryRequest(key.launchID, key.requestID)).data;
                commit('QUERY', { query: 'Request', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryRequest', payload: { options: { all }, params: { ...key }, query } });
                return getters['getRequest']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryRequest', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryRequestAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryRequestAll(key.launchID, query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryRequestAll(key.launchID, { ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'RequestAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryRequestAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getRequestAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryRequestAll', 'API Node Unavailable. Could not perform query: ' + e.message);
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
                throw new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgSettleRequest({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSettleRequest(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSettleRequest:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSettleRequest:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgEditChain({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgEditChain(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgEditChain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgEditChain:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRevertLaunch({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRevertLaunch(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRevertLaunch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRevertLaunch:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRequestAddAccount({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddAccount(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddAccount:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRequestRemoveAccount({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestRemoveAccount(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestRemoveAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestRemoveAccount:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgTriggerLaunch({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgTriggerLaunch(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgTriggerLaunch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgTriggerLaunch:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateChain({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateChain(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateChain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateChain:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRequestRemoveValidator({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestRemoveValidator(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestRemoveValidator:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestRemoveValidator:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRequestAddVestingAccount({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddVestingAccount(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddVestingAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddVestingAccount:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgRequestAddValidator({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddValidator(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddValidator:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddValidator:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgSettleRequest({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSettleRequest(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSettleRequest:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSettleRequest:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgEditChain({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgEditChain(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgEditChain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgEditChain:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRevertLaunch({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRevertLaunch(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRevertLaunch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRevertLaunch:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRequestAddAccount({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddAccount(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddAccount:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRequestRemoveAccount({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestRemoveAccount(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestRemoveAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestRemoveAccount:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgTriggerLaunch({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgTriggerLaunch(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgTriggerLaunch:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgTriggerLaunch:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateChain({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateChain(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateChain:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateChain:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRequestRemoveValidator({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestRemoveValidator(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestRemoveValidator:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestRemoveValidator:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRequestAddVestingAccount({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddVestingAccount(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddVestingAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddVestingAccount:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgRequestAddValidator({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgRequestAddValidator(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgRequestAddValidator:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgRequestAddValidator:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
