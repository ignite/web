import Vue from 'vue'
import Vuex from 'vuex'
import chain from './explorer/chain'
import cosmos from './cosmos/cosmos-sdk'
import tendermint from './tendermint/tendermint'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
	namespaced: true,
	modules: {
		chain,
		cosmos,
		tendermint,
		common
	}
})
