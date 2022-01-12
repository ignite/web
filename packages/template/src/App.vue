<template>
  <div v-if="state.initialized">
    <SpTheme>
      <SpNavbar />
      <div style="margin-top: 100px; width: 400px; padding: 20px; float: right">
        <SpTx v-if="address" :fromAddress="address" />
      </div>
      <div style="margin-top: 100px; width: calc(100% - 500px); padding: 20px; float: left">
        <SpAssets v-if="address" :address="address" />
      </div>

    </SpTheme>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpNavbar, SpTx, SpAssets } from '@starport/vue'

export interface State {
  initialized: Boolean
}

export let initialState = {
  initialized: false
}

export default {
  components: { SpTheme, SpNavbar, SpTx, SpAssets },

  setup() {
    // store
    let $s = useStore()

// state
    let state: State = reactive(initialState)

    // lh
    onMounted(async () => {
      await $s.dispatch('common/env/init')
      state.initialized = true
    })

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      //state,
      state,
      // computed
      address
    }
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
</style>
