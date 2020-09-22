<template>
  <div>
    <div class="container" v-if="balances && balances.length > 0">
      <sp-h3>Send tokens</sp-h3>
      <div class="form">
        <div class="token">
          <div class="card token__item">
            <div @click="denomChange" class="label h3 h3__button">
              {{ denom }}
              <icon-circle-2 v-if="denoms.length > 1" class="h3__icon" />
            </div>
            <div>
              <input
                class="input"
                v-model="amount"
                placeholder="Amount of tokens"
                type="text"
                :disabled="inFlight"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="label h3">Address</div>
          <div>
            <div>
              <input
                v-model="to_address"
                type="text"
                class="input"
                :disabled="inFlight"
                placeholder="To address"
              />
            </div>
          </div>
        </div>
        <div class="footer">
          <div>
            <input
              type="text"
              v-model="memo"
              class="input memo"
              :disabled="inFlight"
              placeholder="Add a text message..."
            />
          </div>
          <sp-button
            :disabled="!(valid.amount && valid.to_address && !inFlight)"
            @click="send"
            :loading="inFlight"
            >Send tokens</sp-button
          >
        </div>
        <div class="log">
          <div class="log__text">
            {{ txResultMessage }}
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
  user-select: none;
  display: flex;
  align-items: center;
}
.h3__button {
  cursor: pointer;
}
.h3__icon {
  height: 1em;
  width: 1em;
  margin: 0 0.25rem;
  fill: rgba(0, 0, 0, 0.35);
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
  text-transform: none;
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
.log__text {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.35);
}
</style>

<script>
import SpH3 from "./SpH3";
import IconLoading2 from "./IconLoading2";
import IconPaperPlane2 from "./IconPaperPlane2";
import IconCircle2 from "./IconCircle2";
import SpButton from "./SpButton";
import { isInteger } from "lodash";
import { Bech32 } from "@cosmjs/encoding";

export default {
  components: {
    SpH3,
    IconLoading2,
    IconPaperPlane2,
    IconCircle2,
    SpButton,
  },
  category: "wallet",
  data() {
    return {
      amount: "",
      to_address: "",
      memo: "",
      denomIndex: 0,
      inFlight: false,
      txResult: "",
    };
  },
  computed: {
    balances() {
      return this.$store.state.cosmos.bankBalances;
    },
    denoms() {
      return this.balances.map((b) => b.denom);
    },
    denom() {
      return this.denoms[this.denomIndex];
    },
    valid() {
      let to_address;
      try {
        to_address = !!Bech32.decode(this.to_address);
      } catch {
        to_address = false;
      }
      const amount = +this.amount > 0 && isInteger(+this.amount);
      return { amount, to_address };
    },
    txResultMessage() {
      if (this.txResult.code) return `Error: ${this.txResult.rawLog}`;
    },
  },
  methods: {
    denomChange() {
      const inBounds = this.denomIndex < this.denoms.length - 1;
      this.denomIndex = inBounds ? this.denomIndex + 1 : 0;
    },
    async send() {
      if (this.valid.to_address && this.valid.amount && !this.inFlight) {
        const payload = {
          amount: this.amount,
          denom: this.denom,
          to_address: this.to_address,
          memo: this.memo,
        };
        this.txResult = "";
        this.inFlight = true;
        this.txResult = await this.$store.dispatch("cosmos/tokenSend", payload);
        if (!this.txResult.code) {
          this.amount = "";
          this.to_address = "";
          this.memo = "";
        }
        this.inFlight = false;
        await this.$store.dispatch("cosmos/bankBalancesGet");
      }
    },
  },
};
</script>
