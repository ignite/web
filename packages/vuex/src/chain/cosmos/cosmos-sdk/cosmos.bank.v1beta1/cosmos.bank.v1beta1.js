import {queryClient, txClient} from './module'

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
			try {
				const balance = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryBalance(address,denom)).data
				const queryParams = '/' + address + '/' + denom
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
			
			try {
				const balances = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryAllBalances(address)).data
				const queryParams = '/' + address
				commit('ALL_BALANCES', { queryParams, balances })
				if (subscribe) {
					commit('UNSUBSCRIBE', {
						action: 'QueryAllBalances',
						payload: { address }
					})
				}
			} catch (e) {
				console.log('Query Failed: API node unavailable')
			}
		},
		async QueryTotalSupply({ commit, rootGetters }, { subscribe = false }) {
			
			
			try {				
				const supply = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryTotalSupply()).data
				const queryParams = ''
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
			
			try {			
				const amount = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).querySupplyOf(denom)).data
				const queryParams = '/' + denom
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
			
			
			try {
				const params = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryParams()).data
				const queryParams = ''
				commit('PARAMS', { queryParams, params })
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
			
			try {
			
				const metadatas = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryDenomsMetadata()).data
				const queryParams = ''
				commit('DENOMS_METADATA', { queryParams, metadatas  })
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
			try {
		
				const metadata = (await (await queryClient({addr: rootGetters['chain/common/env/apiCosmos']})).queryDenomMetadata(denom)).data
				const queryParams = '/' + denom
				commit('DENOM_METADATA', { queryParams, metadata })
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
			{ rootGetters },
			{ value}
		) {
			
			
			try {
				const msg = await (await txClient(rootGetters['chain/common/wallet/signer'], {addr: rootGetters['chain/common/env/apiTendermint']})).msgSend(value)
				await (await txClient(rootGetters['chain/common/wallet/signer'], {addr: rootGetters['chain/common/env/apiTendermint']})).signAndBroadcast([msg])
			} catch (e) {
				throw 'Failed to broadcast transaction'
			}
		},
		async MsgMultiSend({ rootGetters }, { value }) {
			
			try {
				
				const msg = await (await txClient(rootGetters['chain/common/wallet/signer'], {addr: rootGetters['chain/common/env/apiTendermint']})).msgMultiSend(value)
				await (await txClient(rootGetters['chain/common/wallet/signer'], {addr: rootGetters['chain/common/env/apiTendermint']})).signAndBroadcast([msg])
			} catch (e) {
				throw 'Failed to broadcast transaction'
			}
		}
	}
}
