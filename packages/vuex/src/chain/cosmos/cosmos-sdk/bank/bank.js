const getDefaultState = () => {
	return {
		Balance: {},
		AllBalances: {},
		TotalSupply: {},
		SupplyOf: {},
		Params: {},
		DenomsMetadata: {},
		DenomMetadata: {},
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
			state.Balance[queryParams] = balance
		},
		ALL_BALANCES(state, { queryParams, balances }) {
			state.AllBalances[queryParams] = balances
		},
		TOTAL_SUPPLY(state, { supply }) {
			state.TotalSupply = supply
		},
		SUPPLY_OF(state, { queryParams, amount }) {
			state.SupplyOf[queryParams] = amount
		},
		PARAMS(state, { params }) {
			state.Params = params
		},
		DENOMS_METADATA(state, { metadata }) {
			state.DenomsMetadata = metadata
		},
		DENOM_METADATA(state, { queryParams, metadata }) {
			state.DenomsMetadata[queryParams] = metadata
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
		getAllBalances: (state) => (address) => {
			if (address != '' && state.AllBalances['/' + address]) {
				return state.AllBalances['/' + address].balances
			} else {
				return []
			}
		},
		getBalance: (state) => (address, denom) => {
			if (address != '' && state.Balance['/' + address + '/' + denom]) {
				return state.Balance['/' + address + '/' + denom].balance
			} else {
				return {}
			}
		},
		getTotalSupply: (state) => () => {
			return state.TotalSupply
		},
		getSupplyOf: (state) => (denom) => {
			if (denom != '' && state.SupplyOf['/' + denom]) {
				return state.SupplyOf['/' + denom].amount
			} else {
				return {}
			}
		},
		getParams: (state) => () => {
			return state.Params
		},
		getDenomsMetadata: (state) => () => {
			return state.DenomsMetadata
		},
		getDenomMetadata: (state) => (denom) => {
			if (denom != '' && state.DenomMetadata['/' + denom]) {
				return state.DenomMetadata['/' + denom].metadata
			} else {
				return {}
			}
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			if (rootGetters['chain/common/env/client']) {
				rootGetters['chain/common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach((subscription) => {
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
				const balance = await rootGetters['chain/common/env/client'].query(
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
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryAllBalances(
			{ commit, rootGetters },
			{ address, subscribe = false }
		) {
			const queryUrl = '/cosmos/bank/v1beta1/balances'
			const queryParams = '/' + address
			try {
				const balances = await rootGetters['chain/common/env/client'].query(
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
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryTotalSupply({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/supply'
			const queryParams = ''
			try {
				const supply = await rootGetters['chain/common/env/client'].query(
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
				console.log('Query Failed: API node unavailable')
			}
		},
		async QuerySupplyOf({ commit, rootGetters }, { denom, subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/supply'
			const queryParams = '/' + denom
			try {
				const amount = await rootGetters['chain/common/env/client'].query(
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
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryParams({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/params'
			const queryParams = ''
			try {
				const params = await rootGetters['chain/common/env/client'].query(
					queryUrl,
					queryParams
				)
				commit('PARAMS', { params })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryParams',
						payload: null
					})
				}
			} catch (e) {
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryDenomsMetadata({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/cosmos/bank/v1beta1/denoms_metadata'
			const queryParams = ''
			try {
				const supply = await rootGetters['chain/common/env/client'].query(
					queryUrl,
					queryParams
				)
				commit('DENOMS_METADATA', { queryParams, supply })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryDenomsMetadata',
						payload: null
					})
				}
			} catch (e) {
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryDenomMetadata(
			{ commit, rootGetters },
			{ denom, subscribe = false }
		) {
			const queryUrl = '/cosmos/bank/v1beta1/denoms_metadata'
			const queryParams = '/' + denom
			try {
				const amount = await rootGetters['chain/common/env/client'].query(
					queryUrl,
					queryParams
				)
				commit('DENOM_METADATA', { queryParams, amount })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryDenomMetadata',
						payload: { denom }
					})
				}
			} catch (e) {
				console.log('Query Failed: API node unavailable')
			}
		},
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
