// import axios from 'axios'
import moment from 'moment'

const blockHelpers = {}

/**
 *
 *
 * @param {array} blocksStack
 *
 *
 */
blockHelpers.getFormattedBlock = (blocksStack) => {
	if (blocksStack.length > 0) {
		return blocksStack.map((block) => {
			const { time, height, proposer_address } = block.header

			const { hash } = block.blockMeta.block_id

			return {
				blockMsg: {
					time_formatted: moment(time).fromNow(true),
					time,
					height: parseInt(height),
					proposer: `${proposer_address.slice(0, 10)}...`,
					blockHash_sliced: `${hash.slice(0, 15)}...`,
					blockHash: hash,
					txs: block.txs ? block.txs.length : 0
				},
				tableData: {
					id: height,
					isActive: false
				},
				txs: block.txsDecoded
			}
		})
	}
}

export default blockHelpers
