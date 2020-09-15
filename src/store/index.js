import Vue from "vue";
import Vuex from "vuex";
import cosmos from "./cosmos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cosmos },
});
