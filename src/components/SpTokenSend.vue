<template>
  <div>
    <div class="container">
      <sp-h3>Send tokens</sp-h3>
      <div class="form">
        <div class="token">
          <div class="card token__item">
            <div class="label h3">Atom</div>
            <div>
              <input
                class="input"
                placeholder="Amount of tokens"
                type="text"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="label h3">Address</div>
          <div>
            <div>
              <input v-model="address" type="text" class="input" placeholder="To address">
            </div>
          </div>
        </div>
        <div class="footer">
          <div>
            <input type="text" v-model="memo" class="input memo" placeholder="Add text memo...">
          </div>
          <div class="send h3">
            <div class="send__text">
              Send tokens
            </div>
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
.form > * {
  margin-bottom: 10px;
}
.card {
  background: rgb(247, 247, 247);
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
.token__item {
  max-width: 225px;
}
.h3 {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}
.label {
  margin-bottom: 0.5rem;
}
.input {
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  border: none;
  background: none;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  letter-spacing: 0.02em;
}
.token__item__input::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.35);
}
.footer {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  box-sizing: border-box;
}
.memo {
  padding: 0.75rem 1rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}
.send {
  background: rgb(247, 247, 247);
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 0.5rem;
}
.send__text {
  margin: 0 2rem;
  white-space: nowrap;
}
</style>

<script>
import SpH3 from "./SpH3";

export default {
  components: {
    SpH3,
  },
  data() {
    return {
      amount: "",
      address: "",
      memo: "",
    };
  },
  computed: {
    defaultDenom() {
      return this.balances[0].denom;
    },
    balances() {
      return this.$store.state.cosmos.bankBalances;
    },
  },
};
</script>
