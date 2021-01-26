import Vue from 'vue'
//import { Type, Field } from 'protobufjs' If registering custom message types
const getDefaultState = () => {
	return {
		Balance: {},
		AllBalances: {},
		TotalSupply: {},
		SupplyOf: {},
		Params: {},
		_Subscriptions: new Set()
	}
}
// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		ResetState(state) {
			Object.assign(state, getDefaultState())
		},
		Balance(state, { queryParams, balance }) {
			state.Balance[queryParams]= balance
		},
		AllBalances(state, { queryParams, balances }) {
			state.AllBalances[queryParams] = balances
		},
		TotalSupply(state, { supply }) {
			state.TotalSupply= supply
		},
		SupplyOf(state, { queryParams, amount }) {
			state.SupplyOf[queryParams]=amount
		},
		Params(state, { params }) {
			state.Params=params
		},
		Subscribe(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		Unsubscribe(state, subscription) {
			state._Subscriptions.remove(subscription)
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			if (rootGetters['modules/env/wsClient']) {
				rootGetters['modules/env/wsClient'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('ResetState')
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(subscription => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		unsubscribe({ commit }, subscription) {
			commit('Unsubscribe', subscription)
		},
		async QueryBalance(
			{ commit, rootGetters },
			{ address, denom, subscribe = false }
		) {
			const queryUrl = '/cosmos/bank/v1beta1/balances'
			const queryParams = '/' + address + '/' + denom
			try {
				const balance = await rootGetters['modules/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('Balance', { queryParams, balance })
				if (subscribe) {
					commit('Subscribe', {
						action: 'QueryBalance',
						payload: { address, denom }
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},
		async QueryAllBalances(
			{ commit, rootGetters },
			{ address, subscribe = false }
		) {
			const queryUrl = '/cosmos/bank/v1beta1/balances'
			const queryParams = '/' + address
			try {
				const balances = await rootGetters['modules/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('AllBalances', { queryParams, balances })
				if (subscribe) {
					commit('Subscribe', {
						action: 'QueryAllBalances',
						payload: { address }
					})
				}
			} catch (e) {
				console.log(e)
				throw 'API Node unavailable'
			}
		},
		async QueryTotalSupply({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/supply'
			const queryParams = ''
			try {
				const supply = await rootGetters['modules/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('TotalSupply', { queryParams, supply })
				if (subscribe) {
					commit('Subscribe', {
						action: 'QueryTotalSupply',
						payload: null
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},
		async QuerySupplyOf({ commit, rootGetters }, { denom, subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/supply'
			const queryParams = '/' + denom
			try {
				const amount = await rootGetters['modules/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('SupplyOf', { queryParams, amount })
				if (subscribe) {
					commit('Subscribe', {
						action: 'QuerySupplyOf',
						payload: { denom }
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},
		async QueryParams({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/params'
			const queryParams = ''
			try {
				const params = await rootGetters['modules/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('Params', { params })
				if (subscribe) {
					commit('Subscribe', {
						action: 'QueryParams',
						payload: {}
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},
		registerTypes() {},
		/*
		registerTypes({ dispatch }) {
			/*
			Generate type definitions and dispatch action to register them

			const MsgCreatePost = new Type("MsgCreatePost")
  			.add(new Field("creator", 1, "string"))
  			.add(new Field("title", 2, "string"))
				.add(new Field("body", 3, "string"));

			dispatch('modules/wallet/registerType', {typeUrl: '/foo.foo.MsgCreatePost' , type: MsgCreatePost }, { root: true })
		
		},
			*/
		async MsgSend(
			{ dispatch },
			{ from_address, to_address, amount, denom, memo }
		) {
			const typeUrl = '/cosmos.bank.v1beta1.MsgSend'
			const value = {
				amount: [{ amount, denom }],
				fromAddress: from_address,
				toAddress: to_address
			}
			try {
				await dispatch(
					'modules/wallet/sendTransaction',
					{
						message: { typeUrl, value },
						memo,
						denom
					},
					{ root: true }
				)
			} catch (e) {
				throw 'Failed to broadcast transaction'
			}
		},
		async MsgMultiSend({ dispatch }, { inputs, outputs, denom, memo }) {
			const typeUrl = '/cosmos.bank.v1beta1.MsgMultiSend'
			const value = {
				inputs,
				outputs
			}
			try {
				await dispatch(
					'modules/wallet/sendTransaction',
					{
						message: { typeUrl, value },
						memo,
						denom
					},
					{ root: true }
				)
			} catch (e) {
				throw 'Failed to broadcast transaction'
			}
		}
	}
}
