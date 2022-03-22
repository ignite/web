const apiNode =
  (process.env.VUE_APP_API_COSMOS &&
    process.env.VUE_APP_API_COSMOS.replace('0.0.0.0', 'localhost')) ||
  'http://localhost:1317'

export default {
  namespaced: true,
  state() {
    return {
      apiNode: apiNode
    }
  },
  getters: {
    apiCosmos: (state) => state.apiNode
  }
}
