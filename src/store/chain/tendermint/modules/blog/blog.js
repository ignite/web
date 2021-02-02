import { Type, Field } from 'protobufjs'
const getDefaultState = () => {
	return {
		_Structure: {
			fields: {
				creator: 'string',
				id: 'string',
				title: 'string',
				body: 'string',
				votes: 'int'
			}
		},
		Post: {},
		PostAll: {},
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
		POST(state, { queryParams, post }) {
			state.Post[queryParams] = post
		},
		POST_ALL(state, { posts }) {
			state.PostAll = posts
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.remove(subscription)
		}
	},
	getters: {
		getPost: state => id => {
			if (id != '' && state.Post['/' + id]) {
				return state.Post['/' + id].post
			} else {
				return {}
			}
		},
		getPostAll: state => () => {
			return state.PostAll
		},
		getStructure: state => {
			return state._Structure
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
		async QueryPost({ commit, rootGetters }, { id, subscribe = false }) {
			const queryUrl = '/tendermint/modules/blog/post'
			const queryParams = '/' + id
			try {
				const post = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('POST', { queryParams, post })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryPost',
						payload: { id }
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},

		async QueryPostAll({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/tendermint/modules/blog/post'
			const queryParams = ''
			try {
				const supply = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('POST_ALL', { queryParams, supply })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryPostAll',
						payload: null
					})
				}
			} catch (e) {
				throw 'API Node unavailable'
			}
		},
		registerTypes({ dispatch }) {
			const MsgCreatePost = new Type('MsgCreatePost')
				.add(new Field('creator', 1, 'string'))
				.add(new Field('title', 2, 'string'))
				.add(new Field('body', 3, 'string'))
				.add(new Field('votes', 4, 'int'))

			dispatch(
				'chain/common/wallet/registerType',
				{
					typeUrl: '/tendermint.modules.blog.MsgCreatePost',
					type: MsgCreatePost
				},
				{ root: true }
			)

			const MsgUpdatePost = new Type('MsgUpdatePost')
				.add(new Field('creator', 1, 'string'))
				.add(new Field('id', 2, 'string'))
				.add(new Field('title', 3, 'string'))
				.add(new Field('body', 4, 'string'))
				.add(new Field('votes', 5, 'int'))

			dispatch(
				'chain/common/wallet/registerType',
				{
					typeUrl: '/tendermint.modules.blog.MsgUpdatePost',
					type: MsgUpdatePost
				},
				{ root: true }
			)
			const MsgDeletePost = new Type('MsgDeletePost')
				.add(new Field('creator', 1, 'string'))
				.add(new Field('id', 2, 'string'))

			dispatch(
				'chain/common/wallet/registerType',
				{
					typeUrl: '/tendermint.modules.blog.MsgDeletePost',
					type: MsgDeletePost
				},
				{ root: true }
			)
		},
		async MsgCreatePost(
			{ dispatch },
			{ from_address, title, body, votes, memo, denom }
		) {
			const typeUrl = '/tendermint.modules.blog.MsgCreatePost'
			const value = {
				creator: from_address,
				title,
				body,
				votes
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
		async MsgUpdatePost(
			{ dispatch },
			{ from_address, id, title, body, votes, memo, denom }
		) {
			const typeUrl = '/tendermint.modules.blog.MsgUpdatePost'
			const value = {
				creator: from_address,
				id,
				title,
				body,
				votes
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
		async MsgDeletePost({ dispatch }, { from_address, id, memo, denom }) {
			const typeUrl = '/tendermint.modules.blog.MsgDeletePost'
			const value = {
				creator: from_address,
				id
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
