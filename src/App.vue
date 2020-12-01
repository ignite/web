<template>
  <div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
export default {
  async created() {
    await this.$store.dispatch('explorer/init')
    await this.$store.dispatch('cosmos/cosmos-sdk/init')
  }
}
</script>
