import axios from 'axios'

const {
	VUE_APP_CUSTOM_URL,
	VUE_APP_API_COSMOS,
	VUE_APP_API_TENDERMINT,
	VUE_APP_WS_TENDERMINT,
	VUE_APP_ADDRESS_PREFIX
} = process.env

const GITPOD =
	process.env.VUE_APP_CUSTOM_URL && new URL(process.env.VUE_APP_CUSTOM_URL)
const apiNode =
	(GITPOD && `${GITPOD.protocol}//1317-${GITPOD.hostname}`) ||
	process.env.VUE_APP_API_COSMOS.replace('0.0.0.0', 'localhost') ||
	'http://localhost:1317'
const rpcNode =
	(GITPOD && `${GITPOD.protocol}//26657-${GITPOD.hostname}`) ||
	process.env.VUE_APP_API_TENDERMINT.replace('0.0.0.0', 'localhost') ||
	'http://localhost:26657'
const addrPrefix = process.env.VUE_APP_ADDRESS_PREFIX || 'cosmos'
const wsNode =
	(VUE_APP_WS_TENDERMINT &&
		VUE_APP_WS_TENDERMINT.replace('0.0.0.0', 'localhost')) ||
	(GITPOD && `wss://26657-${GITPOD.hostname}/websocket`) ||
	'ws://localhost:26657/websocket'

export default {
	namespaced: true,
	state() {
		return {
			_timer: null,
			starportUrl: VUE_APP_CUSTOM_URL ? '' : 'http://localhost:12345',
			frontendUrl: '',
			backend: {
				env: {
					node_js: false,
					vue_app_custom_url: process.env.VUE_APP_CUSTOM_URL
				},
				running: {
					frontend: false,
					rpc: false,
					api: false
				},
				prevStates: {
					frontend: null,
					rpc: null,
					api: null
				}
			}
		}
	},
	getters: {
		backendEnv: state => state.backend.env,
		frontendUrl: state => state.frontendUrl,
		backendRunningStates: state => state.backend.running,
		wasAppRestarted: state => status => {
			return (
				state.backend.prevStates.rpc !== null &&
				state.backend.prevStates.api !== null &&
				!state.backend.prevStates.rpc &&
				!state.backend.prevStates.api &&
				status.is_consensus_engine_alive &&
				status.is_my_app_backend_alive
			)
		}
	},
	mutations: {
		SET_STARPORT_ENV(state, { starportUrl, frontendUrl }) {
			state.starportUrl = starportUrl
			state.frontendUrl = frontendUrl
		},
		SET_BACKEND_RUNNING_STATES(state, { frontend, rpc, api }) {
			state.backend.running = {
				frontend,
				rpc,
				api
			}
		},
		/**
		 *
		 *
		 * @param {object} state
		 * @param {object} env
		 * @param {boolean} states.node_js
		 * @param {string} states.vue_app_custom_url
		 *
		 *
		 */
		SET_BACKEND_ENV(state, { node_js, vue_app_custom_url }) {
			state.backend.env = {
				node_js,
				vue_app_custom_url
			}
		},
		/**
		 *
		 *
		 * @param {object} state
		 * @param {object} payload
		 * @param {object} payload.status
		 *
		 *
		 */
		SET_PREV_STATES(state, { status }) {
			state.backend.prevStates = {
				frontend: status ? status.is_my_app_frontend_alive : false,
				rpc: status ? status.is_consensus_engine_alive : false,
				api: status ? status.is_my_app_backend_alive : false
			}
		},
		SET_TIMER(state, { timer }) {
			state._timer = timer
		},
		CLEAR_TIMER(state) {
			clearInterval(state._timer)
		}
	},
	actions: {
		async setStatusState({ state, getters, commit, dispatch }) {
			try {
				const { data } = await axios.get(`${state.starportUrl}/status`)
				const { status, env } = data

				const GITPOD = env.vue_app_custom_url && new URL(env.vue_app_custom_url)

				const starportUrl =
					(GITPOD && `${GITPOD.protocol}//12345-${GITPOD.hostname}`) ||
					'http://localhost:12345'

				const frontendUrl =
					(GITPOD && `${GITPOD.protocol}//8080-${GITPOD.hostname}`) ||
					'http://localhost:8080'

				commit('SET_STARPORT_ENV', {
					starportUrl,
					frontendUrl
				})

				const chainId = env.chain_id
				const sdkVersion = status.sdk_version
				const apiNode =
					(VUE_APP_API_COSMOS &&
						VUE_APP_API_COSMOS.replace('0.0.0.0', 'localhost')) ||
					(GITPOD && `${GITPOD.protocol}//1317-${GITPOD.hostname}`) ||
					'http://localhost:1317'

				const rpcNode =
					(VUE_APP_API_TENDERMINT &&
						VUE_APP_API_TENDERMINT.replace('0.0.0.0', 'localhost')) ||
					(GITPOD && `${GITPOD.protocol}//26657-${GITPOD.hostname}`) ||
					'http://localhost:26657'

				const wsNode =
					(VUE_APP_WS_TENDERMINT &&
						VUE_APP_WS_TENDERMINT.replace('0.0.0.0', 'localhost')) ||
					(GITPOD && `wss://26657-${GITPOD.hostname}/websocket`) ||
					'ws://localhost:26657/websocket'

				const addrPrefix = VUE_APP_ADDRESS_PREFIX || 'cosmos'

				const getTXApi =
					state.backend.sdk_version === 'Stargate'
						? `${state.APP_ENV.RPC}/tx?hash=0x` // temp replacement of `${state.APP_ENV.API}/cosmos/tx/v1beta1/tx/`
						: `${state.APP_ENV.API}/txs/`

				dispatch(
					'chain/common/env/config',
					{
						chainId,
						sdkVersion,
						apiNode,
						rpcNode,
						wsNode,
						addrPrefix,
						getTXApi
					},
					{ root: true }
				)

				commit('SET_BACKEND_RUNNING_STATES', {
					frontend: status.is_my_app_frontend_alive,
					rpc: status.is_consensus_engine_alive,
					api: status.is_my_app_backend_alive
				})
				commit('SET_BACKEND_ENV', {
					node_js: env.node_js,
					vue_app_custom_url: env.vue_app_custom_url
				})

				/**
         *
         // If backend was down, but alive now,
         // it indicates the app is restarting.
         // Forcing browser to reload in this case to reset blockchain data.
         *
         */
				if (getters.wasAppRestarted(status)) {
					window.location.reload(false)
				}
				commit('SET_PREV_STATES', { status })
			} catch (error) {
				
				commit('SET_BACKEND_RUNNING_STATES', {
					frontend: false,
					rpc: false,
					api: false
				})

				commit('SET_PREV_STATES', { status: null })
				
				throw new SpVuexError('Starport:Status','Could not set status from starport')
			}
		},
		async init({ commit, dispatch }) {
			/*
      *
      // Fetch backend status regularly
      *
      */
			commit('SET_TIMER', {
				timer: setInterval(() => dispatch('setStatusState'), 5000)
			})
			await dispatch(
				'chain/common/env/config',
				{
					apiNode,
					rpcNode,
					wsNode,
					addrPrefix
				},
				{ root: true }
			)
		}
	}
}
