<template>
  <div v-if="initialized">teseting</div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
import '@starport/vue/lib/starport-vue.css'

export default {
  data() {
    return {
      initialized: false,
    }
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(['common', 'wallet'])
    },
  },
  async created() {
    await this.$store.dispatch('common/env/init')
    this.initialized = true
  },
  errorCaptured(err) {
    console.log(err)
    return false
  },
}
</script>
