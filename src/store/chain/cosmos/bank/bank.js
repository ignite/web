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
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		BALANCE(state, { queryParams, balance }) {
			state.Balance[queryParams]= balance
		},
		ALL_BALANCES(state, { queryParams, balances }) {
			state.AllBalances[queryParams] = balances
		},
		TOTAL_SUPPLY(state, { supply }) {
			state.TotalSupply= supply
		},
		SUPPLY_OF(state, { queryParams, amount }) {
			state.SupplyOf[queryParams]=amount
		},
		PARAMS(state, { params }) {
			state.Params=params
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.remove(subscription)
		}
	},
	getters: {
		getAllBalances: (state) => (address) => {
			if (
				address != '' &&
				state.AllBalances['/'+address]
			) {
				return state.AllBalances[
					'/' +address
				].balances
			} else {
				return []
			}
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			if (rootGetters['chain/common/env/wsClient']) {
				rootGetters['chain/common/env/wsClient'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(subscription => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async QueryBalance(
			{ commit, rootGetters },
			{ address, denom, subscribe = false }
		) {
			const queryUrl = '/cosmos/bank/v1beta1/balances'
			const queryParams = '/' + address + '/' + denom
			try {
				const balance = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('BALANCE', { queryParams, balance })
				if (subscribe) {
					commit('SUBSCRIBE', {
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
				const balances = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('ALL_BALANCES', { queryParams, balances })
				if (subscribe) {
					commit('UNSUBSCRIBE', {
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
				const supply = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('TOTAL_SUPPLY', { queryParams, supply })
				if (subscribe) {
					commit('SUBSCRIBE', {
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
				const amount = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('SUPPLY_OF', { queryParams, amount })
				if (subscribe) {
					commit('SUBSCRIBE', {
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
				const params = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('PARAMS', { params })
				if (subscribe) {
					commit('SUBSCRIBE', {
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

			dispatch('chain/common/wallet/registerType', {typeUrl: '/foo.foo.MsgCreatePost' , type: MsgCreatePost }, { root: true })
		
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
					'chain/common/wallet/sendTransaction',
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
					'chain/common/wallet/sendTransaction',
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
