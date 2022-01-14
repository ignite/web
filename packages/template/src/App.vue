<template>
  <div>
    <SpTheme>
      <SpNavbar
        :links="navbarLinks"
        :activeRoute="router.currentRoute.value.path"
      />
      <router-view />
    </SpTheme>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpNavbar, SpTx } from '@starport/vue'
import { useRouter } from 'vue-router'

export interface State {}

export let initialState = {}

export default {
  components: { SpTheme, SpNavbar, SpTx },

  setup() {
    // store
    let $s = useStore()

    // router
    let router = useRouter()

    // state
    let state: State = reactive(initialState)
    let navbarLinks = [
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Data', url: '/data' }
    ]

    // lh
    onMounted(async () => {
      await $s.dispatch('common/env/init')
      router.push('portfolio')
    })

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      //state,
      state,
      navbarLinks,
      // router
      router,
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
