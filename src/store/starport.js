export default {
  state: {
    autoSidebar: {
      enabled: null,
      current: null,
      categories: [],
    },
  },
  mutations: {
    autoSidebarInit(state) {
      state.autoSidebar.enabled = true;
    },
  },
  actions: {
    autoSidebarInit({ commit }) {
      commit("autoSidebarInit");
    },
  },
};
