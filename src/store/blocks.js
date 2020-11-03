import axios from 'axios'
import ReconnectingWebSocket from 'reconnecting-websocket'

const state = {
	table: {
		highlightedBlock: {
			id: null,
			data: null
		}
	},
	maxBlockchainCount: 20,
	maxStackCount: 100,
	stack: [],
	stackChainRange: {
		highestHeight: null,
		lowestHeight: null
	},
	latestBlock: null,
	errorsQueue: []
}

const getters = {
	highlightedBlock: state => state.table.highlightedBlock,
	blocksStack: state => state.stack,
	blockByHeight: state => height =>
		state.stack.filter(block => parseInt(block.height) === parseInt(height)),
	blockByHash: state => hash =>
		state.stack.filter(block => block.blockMeta.block_id.hash === hash),
	latestBlock: state => state.latestBlock,
	stackChainRange: state => state.stackChainRange,
	lastBlock: state => state.stack[state.stack.length - 1],
	errorsQueue: state => state.errorsQueue
}

const mutations = {}

/**
 *
 *
 * @param {object} payload
 * @param {number|string} payload.highest
 * @param {number|string} payload.lowest
 *
 *
 */
mutations.setStackChainRange = (state, { highest, lowest }) => {
	if (highest) {
		state.stackChainRange.highestHeight = parseInt(highest)
	}
	if (lowest) {
		state.stackChainRange.lowestHeight = parseInt(lowest)
	}
}

/**
 *
 * Highlight the block selected in BlockTable
 * and keep the block in the store.
 *
 * @param {object} state
 * @param {Object} payload
 * @param {object|null} payload.block
 * @param {string|null} payload.block.id
 * @param {object|null} payload.block.data
 *
 *
 */
mutations.setHighlightedBlock = (state, { block }) => {
	if (block == null || !block) {
		state.table.highlightedBlock = {
			id: null,
			data: null
		}
	} else {
		state.table.highlightedBlock = {
			...state.table.highlightedBlock,
			...block
		}
	}
}

/**
 *
 * @param {object} state
 * @param {object} payload
 * @param {object} payload.block - The block to add into stack
 * @param {boolean} [payload.toInsert=true] - To push or unshift block into stack
 *
 *
 */
mutations.addBlockEntry = (state, { block, toInsert = true }) => {
	if (!toInsert) {
		state.stack.push(block)
	} else {
		state.stack.unshift(block)
	}
}

/**
 * Pop overloaded blocks in stack (if more than 500)
 *
 * @param {object} state
 * @param {boolean} toPop - default is True
 *
 *
 */
mutations.popOverloadBlocks = (
	state,
	{ toPop, toPopOverBlockchainCount } = {
		toPop: true,
		toPopOverBlockchainCount: false
	}
) => {
	if (toPopOverBlockchainCount) {
		state.stack.splice(state.maxBlockchainCount)
		return
	}
	if (state.stack.length > state.maxStackCount) {
		if (toPop) {
			state.stack.splice(state.maxStackCount)
		} else {
			state.stack.splice(0, state.stack.length - state.maxStackCount)
		}
	}
}

/**
 * Store the latest block fetched from WS connection
 *
 * @param {object} state
 * @param {object} block
 *
 *
 */
mutations.setLatestBlock = (state, block) => {
	state.latestBlock = block
}

/**
 *
 *
 */
mutations.addErrorBlock = (state, { blockHeight, errLog }) => {
	state.errorsQueue.push({ blockHeight, errLog })
}

/**
 *
 *
 */
mutations.addErrorTx = (
	state,
	{ blockHeight, txEncoded, errLog, txStackCallback }
) => {
	let isBlockInQueue = false

	for (const errBlock of state.errorsQueue) {
		if (blockHeight === errBlock.blockHeight) {
			errBlock.txError = {
				txEncoded,
				errLog
			}
			isBlockInQueue = true
			break
		}
	}

	if (!isBlockInQueue) {
		state.errorsQueue.push({
			blockHeight,
			txError: {
				txEncoded,
				errLog
			}
		})

		txStackCallback()
	}
}

const actions = {}

/**
 *
 *
 * @param {string} rpcUrl
 * @param {string|number} blockHeight
 * @param {function} errCallback
 *
 *
 */
actions.getBlockByHeight = async (
	{ rootGetters },
	{ blockHeight, errCallback }
) => {
	const { RPC } = rootGetters['cosmos/appEnv']

	try {
		return await axios.get(`${RPC}/block?height=${blockHeight}`)
	} catch (err) {
		console.error(err)
		if (errCallback) errCallback(err)
	}
}

/**
 *
 *
 * @param {string} rpcUrl
 * @param {function} errCallback
 *
 *
 */
actions.getLatestBlock = async ({ rootGetters }, { errCallback }) => {
	const { API } = rootGetters['cosmos/appEnv']

	try {
		return await axios.get(`${API}/blocks/latest`)
	} catch (err) {
		console.error(err)
		if (errCallback) errCallback(err)
	}
}

/**
 *
 *
 * @param {Object} payload
 * @param {string} payload.rpcUrl
 * @param {string|number} [payload.minBlockHeight=undefined]
 * @param {string|number} [payload.maxBlockHeight=undefined]
 * @param {string|number} payload.latestBlockHeight
 * @param {number} [payload.maxStackCount=20]
 * @param {function} payload.errCallback
 *
 *
 */
actions.getBlockchainRaw = async (
	{ rootGetters },
	{
		minBlockHeight = undefined,
		maxBlockHeight = undefined,
		latestBlockHeight,
		maxStackCount = 20,
		errCallback
	}
) => {
	const { RPC } = rootGetters['cosmos/appEnv']

	if (!minBlockHeight && !maxBlockHeight) {
		console.error('Please provide min or max block height value')
		return
	}

	const fmtMinHeight = () => {
		if (maxBlockHeight) {
			return maxBlockHeight - 1 - maxStackCount >= 0
				? maxBlockHeight - 1 - maxStackCount
				: 0
		}
		return minBlockHeight
	}
	const fmtMaxHeight = () => {
		if (minBlockHeight) {
			return minBlockHeight + maxStackCount >= latestBlockHeight
				? latestBlockHeight
				: minBlockHeight + maxStackCount
		}
		return maxBlockHeight - 1
	}

	try {
		return await axios.get(
			`${RPC}/blockchain?minHeight=${fmtMinHeight()}&maxHeight=${fmtMaxHeight()}`
		)
	} catch (err) {
		console.error(err)
		if (errCallback) errCallback(err)
	}
}

/**
 *
 * Fetch blocks (20 of which) from RPC endpoint
 *
 * @param {object} store
 * @param {object} payload
 * @param {number} payload.blockHeight
 * @param {boolean} payload.toGetLowerBlocks - to get older or newer blocks
 *
 *
 */
actions.getBlockchain = async (
	{ commit, dispatch, getters },
	{ blockHeight, toGetLowerBlocks = true, toReset = false }
) => {
	const latestBlock = getters.latestBlock

	/**
	 *
	 // minHeight to maxHeight is the range of blockchain to fetch.
	 // To get older blocks (blocks with lower heights),
	 // set minHeight to `undefined`, because it's dependent on maxHeight (maxHeight-20).
	 // And vise versa.
	 *
	 */
	const minBlockHeight = toGetLowerBlocks ? undefined : parseInt(blockHeight)
	const maxBlockHeight = toGetLowerBlocks ? parseInt(blockHeight) : undefined

	const toFetchBlockchain = async (
		min,
		max,
		toInsert = false,
		toReset = false
	) =>
		dispatch('getBlockchainRaw', {
			minBlockHeight: min,
			maxBlockHeight: max,
			latestBlockHeight: latestBlock ? latestBlock.height : null
		}).then(blockchainRes => {
			const blockchain = blockchainRes.data.result.block_metas
			const toReverse = toReset ? true : toInsert
			const fmtBlockchainRes = toReverse ? blockchain.reverse() : blockchain

			return async () => {
				for (let i = 0; i < fmtBlockchainRes.length; i++) {
					const { header: prevHeader } = fmtBlockchainRes[i]
					await dispatch('getBlockByHeight', {
						blockHeight: prevHeader.height,
						errCallback: errLog => {
							commit('addErrorBlock', {
								blockHeight: prevHeader.height,
								errLog
							})
						}
					}).then(blockMeta => {
						dispatch('setBlockMeta', {
							header: prevHeader,
							blockMeta,
							txsData: blockMeta.data.result.block.data,
							toInsertBlockToFront: toInsert,
							toReset
						})
					})
				}
			}
		})

	await toFetchBlockchain(
		minBlockHeight,
		maxBlockHeight,
		!toGetLowerBlocks,
		toReset
	).then(promiseLoop =>
		promiseLoop().then(() => {
			const isToPop = toReset ? true : !toGetLowerBlocks
			commit('popOverloadBlocks', {
				toPop: isToPop,
				toPopOverBlockchainCount: toReset
			})
			dispatch('setStackChainRange')
		})
	)
}

/**
 *
 *
 */
actions.setStackChainRange = (
	{ commit, getters },
	{ highest, lowest } = {
		highest: null,
		lowest: null
	}
) => {
	const stack = getters.blocksStack
	const highestHeight = highest || stack[0]?.height
	const lowestHeight = lowest || stack[stack.length - 1]?.height

	commit('setStackChainRange', {
		highest: highestHeight ? parseInt(highestHeight) : null,
		lowest: lowestHeight ? parseInt(lowestHeight) : null
	})
}

/**
 *
 * Format the fetched block and add it into store's stack
 *
 * @param {object} store
 * @param {object} payload
 * @param {object} payload.header
 * @param {object} payload.blockMeta
 * @param {object} payload.txsData
 * @param {boolean} payload.toInsertBlockToFront
 * @param {boolean} payload.isValidLatestBlock
 *
 *
 */
actions.setBlockMeta = async (
	{ dispatch, commit, getters },
	{ header, blockMeta, txsData, isValidLatestBlock = false, toReset = false }
) => {
	const blockHolder = {
		height: parseInt(header.height),
		header,
		txs: txsData.txs ? txsData.txs : 0,
		blockMeta: blockMeta.data?.result ? blockMeta.data.result : blockMeta,
		txsDecoded: []
	}

	if (txsData.txs && txsData.txs.length > 0) {
		const txsDecoded = txsData.txs.map(txEncoded =>
			dispatch('getDecodedTx', {
				txEncoded,
				errCallback: (txEncoded, errLog) =>
					dispatch('txErrCallback', {
						blockHeight: header.height,
						txEncoded,
						errLog
					})
			})
		)

		txsDecoded.forEach(txRes =>
			txRes.then(txResolved => {
				if (txResolved) blockHolder.txsDecoded.push(txResolved.data)
				dispatch('addTxEntry', txResolved)
			})
		)
	}

	// this guards duplicated block pushed into blocksStack
	if (getters.blockByHeight(blockHolder.height).length <= 0) {
		/*
 		 *
		 // 1. Check block position
		 *
		 */
		const newBlockPosition = (() => {
			const { highestHeight, lowestHeight } = getters.stackChainRange
			const newBlockHeight = parseInt(blockHolder.height)

			let isHigher = false
			let isLower = false
			let isAdjacent = false

			if (!highestHeight && !lowestHeight) {
				isHigher = true
				isAdjacent = true
			} else if (newBlockHeight > highestHeight) {
				isHigher = true
				isAdjacent = !(newBlockHeight - highestHeight > 1)
			} else if (newBlockHeight < lowestHeight) {
				isLower = true
				isAdjacent = !(lowestHeight - newBlockHeight > 1)
			}

			return { isHigher, isLower, isAdjacent }
		})()

		/*
		*
		// 2. Save the latest block (if the block is coming from WS connection)
		*
		*/
		if (isValidLatestBlock) {
			commit('setLatestBlock', blockHolder)
		}

		/*
		*
		// 3. Add block to stack (toReset is to travel to top of the chain)
		*
		*/
		if (newBlockPosition.isAdjacent || toReset) {
			commit('addBlockEntry', {
				block: blockHolder,
				toInsert: toReset ? true : newBlockPosition.isHigher
			})
			dispatch('setStackChainRange', {
				highest: newBlockPosition.isHigher ? blockHolder.height : null,
				lowest: newBlockPosition.isLower ? blockHolder.height : null
			})
		}
	}
}

/**
 *
 *
 *
 */
actions.txErrCallback = (
	{ commit, dispatch },
	{ blockHeight, txEncoded, errLog }
) => {
	commit('addErrorTx', {
		blockHeight,
		txEncoded,
		errLog,
		txStackCallback: () => dispatch('addTxEntry', null)
	})
}

/**
 *
 * Initiate WS connection subscribes to LCD endpoint
 *
 * @param {object} store
 *
 *
 */
actions.initBlockConnection = async ({
	commit,
	dispatch,
	getters,
	rootGetters
}) => {
	const appEnv = rootGetters['cosmos/appEnv']
	const { data } = await axios.get(`${appEnv.STARPORT_APP}/status`)
	const GITPOD =
		data.env.vue_app_custom_url && new URL(data.env.vue_app_custom_url)
	const wsUrl = GITPOD
		? process.env.VUE_APP_WS_TENDERMINT ||
		  (GITPOD && `wss://26657-${GITPOD.hostname}/websocket`)
		: 'ws://localhost:26657/websocket'

	const ws = new ReconnectingWebSocket(wsUrl)

	ws.onopen = function() {
		ws.send(
			JSON.stringify({
				jsonrpc: '2.0',
				method: 'subscribe',
				id: '1',
				params: ["tm.event = 'NewBlock'"]
			})
		)
	}

	ws.onmessage = async msg => {
		const { result } = JSON.parse(msg.data)

		if (result.data && result.events) {
			const { data } = result
			const { data: txsData, header } = data.value.block

			const blockErrCallback = errLog =>
				commit('addErrorBlock', {
					blockHeight: header.height,
					errLog
				})

			/**
			*
			// 1. Fetch previous 20 blocks initially (if there's any)
			*
			*/
			if (getters.blocksStack.length <= 0) {
				await dispatch('getBlockchain', { blockHeight: header.height })
			}

			/**
			*
			// 2. Regular block fetching
			*
			*/
			dispatch('getBlockByHeight', {
				blockHeight: header.height,
				errCallback: blockErrCallback
			}).then(blockMeta => {
				dispatch('setBlockMeta', {
					header,
					blockMeta,
					txsData,
					isValidLatestBlock: true
				})
			})

			/**
			*
			// 3. Check and resolve errors queue
			*
			*/
			if (getters.errorsQueue.length > 0) {
				getters.errorsQueue.forEach((errObj, index) => {
					const errBlockInStack = getters.blockByHeight(errObj.blockHeight)[0]

					if (errBlockInStack) {
						if (errObj.txError && errObj.txError.txEncoded) {
							dispatch('getDecodedTx', {
								txEncoded: errObj.txError.txEncoded
							}).then(txRes => {
								const isTxAlreadyDecoded =
									errBlockInStack.txsDecoded.filter(
										tx => tx.txhash === txRes.data.txhash
									).length > 0

								if (!isTxAlreadyDecoded) {
									errBlockInStack.txsDecoded.push(txRes.data)
								}
								getters.errorsQueue.splice(index, 1)
								console.info(
									`✨TX fetching error ${txRes.data.txhash} was resolved.`
								)
							})
						}
					}
				})
			}
		}
	}
}

/**
 *
 * Fetch raw block's meta for highlighted block
 * and add rawJson data into highlightedBlock
 *
 * @param {object} store
 * @param {object} payload
 * @param {object} payload.block
 *
 *
 */
actions.setHighlightedBlockMeta = async ({ state, dispatch }, { block }) => {
	dispatch('getBlockByHeight', {
		blockHeight: block.data.blockMsg.height
	}).then(blockMeta => (state.table.highlightedBlock.rawJson = blockMeta))
}

/**
 * Set highlightedBlock to be null or active with block's info
 *
 * @param {object} store
 * @param {object} payload
 * @param {object} payload.block
 *
 *
 */
actions.setHighlightedBlock = async ({ commit }, { block }) => {
	if (block == null || !block) {
		commit('setHighlightedBlock', { block: null })
	} else {
		commit('setHighlightedBlock', { block })
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
