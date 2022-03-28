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
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useIgnite } from '@ignt/vue'

export default {
  components: { SpTheme, SpNavbar },

  setup() {
    // ignite
    useIgnite()

    // router
    let router = useRouter()

    // state
    let navbarLinks = [
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'Data', url: '/data' }
    ]

    // lh
    onBeforeMount(async () => {
      router.push('portfolio')
    })

    return {
      navbarLinks,
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
