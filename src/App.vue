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
  created() {
    this.$store.dispatch("cosmos/init");
  },
};
</script>
