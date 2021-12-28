<template>
  <div v-if="initialized">
    <SpWelcome />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
import "./style/app.css";
import "@starport/vue/lib/style.css";

export default {
  data() {
    return {
      initialized: false,
    };
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(["common", "wallet"]);
    },
  },
  async created() {
    await this.$store.dispatch("common/env/init");
    this.initialized = true;
  },
  errorCaptured(err) {
    console.log(err);
    return false;
  },
};
</script>
