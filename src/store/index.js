import Vue from 'vue'
import Vuex from 'vuex'
import chain from './chain'

Vue.use(Vuex)

const store = new Vuex.Store({
	namespaced: true,
	modules: {
		chain
	}
})

export default store
