import Vue from "vue";
import Vuex from "vuex";
import cosmos from "./cosmos";

import blocks from './blocks'
import txs from './txs'
import env from './env'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cosmos,
    blocks,
    txs,
    env    
  },
});
