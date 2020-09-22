<template>
  <div>
    <div class="container">
      <sp-h3>
        Balance
        <icon-synchronization-1
          @click.native="balancesUpdate"
          class="h3__icon"
        />
      </sp-h3>
      <div v-if="balances.length < 1">Account balance appears to be empty.</div>
      <div class="list">
        <div class="list__item" v-for="b in balances" :key="b.denom">
          <div class="list__item__h3">
            {{ b.denom }}
          </div>
          <div class="list__item__h2">
            {{ numberFormat(b.amount) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800&display=swap");

.container {
  font-family: "Inter", "Helvetica", sans-serif;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.list__item {
  background: rgb(247, 247, 247);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 225px;
  margin-bottom: 10px;
  margin-right: 10px;
  box-sizing: border-box;
}
.list__item__h3 {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.list__item__h2 {
  font-size: 1.75rem;
}
.h3__icon {
  width: 1em;
  height: 1em;
  padding: 0 0.25em;
  fill: rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>

<script>
import SpH3 from "./SpH3";
import IconSynchronization1 from "./IconSynchronization1";

export default {
  components: {
    SpH3,
    IconSynchronization1,
  },
  category: "wallet",
  computed: {
    balances() {
      return this.$store.state.cosmos.bankBalances;
    },
  },
  methods: {
    numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },
    async balancesUpdate() {
      await this.$store.dispatch("cosmos/accountSignInTry");
      await this.$store.dispatch("cosmos/bankBalancesGet");
    },
  },
};
</script>
