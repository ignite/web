<template>
  <div>
    <div class="container">
      <sp-h3 v-if="balances.length > 0">Balance</sp-h3>
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
  font-family: "Inter";
}
.list {
  display: flex;
}
.list__item {
  background: rgb(247, 247, 247);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 225px;
  margin-right: 1rem;
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
  font-size: 1.5rem;
}
</style>

<script>
import SpH3 from "./SpH3";

export default {
  components: {
    SpH3,
  },
  computed: {
    balances() {
      return this.$store.state.cosmos.bankBalances;
    },
  },
  methods: {
    numberFormat(number) {
      return Intl.NumberFormat().format(number);
    },
  },
};
</script>
