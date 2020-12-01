import Vue from 'vue'
import Vuex from 'vuex'
import explorer from './common/explorer/explorer'
import cosmos from './cosmos/cosmos-sdk'
import tendermint from './tendermint/tendermint'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    explorer,
    cosmos,
    tendermint,
    common
  }
})
