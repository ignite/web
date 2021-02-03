import env from './chain/common/env'
import starport from './chain/common/starport'
import blocks from './chain/common/blocks'
import bank from './chain/cosmos/bank'
import blog from './chain/tendermint/modules/blog'
import wallet from './chain/common/wallet'

export default function init(store) {
	store.registerModule(['chain'], { namespaced: true })
	bank(store)
	starport(store)
	blocks(store)
	blog(store)
	env(store)
	wallet(store)
}
