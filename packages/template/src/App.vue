<template>
  <div>
    <SpTheme>
      <SpNavbar
        :links="navbarLinks"
        :active-route="router.currentRoute.value.path"
      />
      <router-view />
    </SpTheme>
  </div>
</template>

<script lang="ts">
import { SpNavbar, SpTheme } from '@starport/vue'
import { computed, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { SpTheme, SpNavbar },

  setup() {
    // router
    let router = useRouter()

    // state
    let navbarLinks = [
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Data', url: '/data' }
    ]

    // lh
    onBeforeMount(async () => {
      // await $s.dispatch('common/env/init')

      router.push('portfolio')
    })

    return {
      navbarLinks,
      // router
      router
    }
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
</style>
