import { Type, Field } from 'protobufjs'
const getDefaultState = () => {
	return {
		_Structure: {
			Post: {
				fields: [
					{
						name: 'creator',
						type: 'string'
					},
					{
						name: 'id',
						type: 'string'
					},
					{
						name: 'title',
						type: 'string'
					},
					{
						name: 'body',
						type: 'string'
					},
					{
						name: 'votes',
						type: 'int'
					}
				]
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
		POST_ALL(state, { post }) {
			state.PostAll = post
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
		getPost: state => id => {
			if (id != '' && state.Post['/' + id]) {
				return state.Post['/' + id].Post
			} else {
				return {}
			}
		},
		getPostAll: state => () => {
			return state.PostAll.Post
		},
		getTypeStructure: state => type => {
			return state._Structure[type].fields
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
			const queryUrl = '/foo/bar/blog/post'
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
				console.log('Query Failed: API node unavailable')
			}
		},

		async QueryPostAll({ commit, rootGetters }, { subscribe = false }) {
			const queryUrl = '/foo/bar/blog/post'
			const queryParams = ''
			try {
				const post = await rootGetters['chain/common/env/apiClient'].query(
					queryUrl,
					queryParams
				)
				commit('POST_ALL', { queryParams, post })
				if (subscribe) {
					commit('SUBSCRIBE', {
						action: 'QueryPostAll',
						payload: {}
					})
				}
			} catch (e) {
				console.log('Query Failed: API node unavailable')
			}
		},
		registerTypes({ dispatch }) {
			const MsgCreatePost = new Type('MsgCreatePost')
				.add(new Field('creator', 1, 'string'))
				.add(new Field('title', 2, 'string'))
				.add(new Field('body', 3, 'string'))
				.add(new Field('votes', 4, 'int32'))

			dispatch(
				'chain/common/wallet/registerType',
				{
					typeUrl: '/foo.bar.blog.MsgCreatePost',
					type: MsgCreatePost
				},
				{ root: true }
			)

			const MsgUpdatePost = new Type('MsgUpdatePost')
				.add(new Field('creator', 1, 'string'))
				.add(new Field('id', 2, 'string'))
				.add(new Field('title', 3, 'string'))
				.add(new Field('body', 4, 'string'))
				.add(new Field('votes', 5, 'int32'))

			dispatch(
				'chain/common/wallet/registerType',
				{
					typeUrl: '/foo.bar.blog.MsgUpdatePost',
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
					typeUrl: '/foo.bar.blog.MsgDeletePost',
					type: MsgDeletePost
				},
				{ root: true }
			)
		},
		async MsgCreatePost(
			{ dispatch },
			{ creator, title, body, votes, memo, denom }
		) {
			const typeUrl = '/foo.bar.blog.MsgCreatePost'
			const value = {
				creator,
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
				throw 'Failed to broadcast transaction' + e
			}
		},
		async MsgUpdatePost(
			{ dispatch },
			{ creator, id, title, body, votes, memo, denom }
		) {
			const typeUrl = '/foo.bar.blog.MsgUpdatePost'
			const value = {
				creator,
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
		async MsgDeletePost({ dispatch }, { creator, id, memo, denom }) {
			const typeUrl = '/foo.bar.blog.MsgDeletePost'
			const value = {
				creator,
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
				throw 'Failed to broadcast transaction' + e
			}
		}
	}
}
