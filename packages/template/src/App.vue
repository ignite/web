<template>
  <div>
    <SpTheme>
      <SpNavbar
        :links="navbarLinks"
        :activeRoute="router.currentRoute.value.path"
      />
      <router-view />
      <Suspense>
        <SpTxList v-if="address" :address="address" />
      </Suspense>
    </SpTheme>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount, reactive } from 'vue'
import { useStore } from 'vuex'
import { SpTheme, SpNavbar, SpTx, SpTxList } from '@starport/vue'
import { useRouter } from 'vue-router'

export interface State {}

export let initialState = {}

export default {
  components: { SpTheme, SpNavbar, SpTx, SpTxList },

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

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    // lh
    onBeforeMount(async () => {
      await $s.dispatch('common/env/init')

      router.push('portfolio')
    })

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
