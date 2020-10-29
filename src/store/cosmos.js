import env from './env'
import bank from './bank'
import module from './module'
import blocks from './blocks'
import txs from './txs'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    /**
     * 
     * 
     * @param {object} store
     * @param {object} payload
     * @param {boolean} payload.blockExplorer - Option to run bundle for visualize block explorer. Default is True.
     * @param {boolean} payload.account - Option to run bundle for interact with bank module. Default is True.
     * 
     * 
     */
    async init({ dispatch }, {
      blockExplorer,
      account
    }={
      blockExplorer: true,
      account: true
    }) {
      await dispatch('env/initEnv')
      if (blockExplorer !== false) await dispatch('blocks/initBlockConnection')
      if (account !== false) await dispatch("bank/accountSignInTry");

      // dispatch("stakingPoolFetch");
      // dispatch("validatorsFetch");      
    }
  },
  modules: {
    env,    
    bank,
    module,    
    blocks,
    txs,
  }
};
