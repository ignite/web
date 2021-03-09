import SpVuexError from '../../../errors/SpVuexError';

const getDefaultState = () => {
	return {
		Transactions: {},
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
		STORE_TRANSACTIONS(state, { address, page, txs,total }) {
			state.Transactions[address][page] = txs;
			state.Transactions[address]['total']=total
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription);
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription);
		}
	},
	getters: {
		getTransactions: (state) => (address,page) => {
			let res = { total: state.Transactions[address][total] }
			res[page]=state.Transactions[page];
			return res;
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('init');
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
			state._Subscriptions.forEach((subscription) => {
				dispatch(subscription.action, subscription.payload);
			});
		},
		async QueryTransactions({ commit,  state }, { subscribe = false, address, page = 1 }) {
			try {
				let received = await axios.get(apiTendermint + '/tx_search?query="transfer.recipient=%27'+address+'%27"&prove=false&per_page=10&page='+page)
				let sent = await axios.get(apiTendermint + '/tx_search?query="transfer.sender=%27'+address+'%27"&prove=false&per_page=10&page='+page)
				let total = Number(received.total_count)+Number(sent.total_count)
				let txs=[...received.txs, ...sent.txs].sort((a,b) => { return a.height==b.height?b.index-a.index:b.height-a.height })
				commit('STORE_TRANSACTIONS', { address, page, txs,total });
				if (subscribe)
					commit('SUBSCRIBE', { action: 'QueryTransactions', payload: { address, page } });
				let res = { total: state.Transactions[address][total] }
				res[page]=state.Transactions[page];
				return res;
			}
			catch (e) {
				console.error(new SpVuexError('Common:Transfers:QueryTransactions', 'RPC Node Unavailable. Could not perform query.'));
				return {};
			}
		},
	}
};
