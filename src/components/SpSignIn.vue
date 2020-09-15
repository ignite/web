<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="button" v-if="address">
          <div class="button__text">
            {{ address }}
          </div>
        </div>
        <div class="button" @click="buttonClick">
          <div class="button__icon">
            <icon-lock-3 />
          </div>
          <div class="button__text">
            {{ address ? "Log out" : "Sign In" }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container-dropdown">
          <div v-if="dropdown && !address">
            <div class="dropdown">
              <textarea
                v-model="mnemonic"
                class="dropdown__textarea"
              ></textarea>
              <div
                :class="[
                  'dropdown__button',
                  `button__disabled__${!mnemonicIsValid}`,
                ]"
                @click="mnemonicImport"
              >
                <div class="dropdown__button__text">
                  Import mnemonic
                </div>
              </div>
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
  font-weight: 500;
}
.row {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.button {
  display: inline-flex;
  background: rgb(247, 247, 247);
  padding: 0.6rem 0.75rem;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
}
.button__icon {
  width: 0.75rem;
  height: 0.75rem;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;
}
.button__text {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  padding: 0 0.2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
}
.container-dropdown {
  padding: 0.5rem 0;
  position: absolute;
  max-width: 300px;
  width: 100%;
}
.dropdown {
  background: white;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  right: 0;
}
.dropdown__textarea {
  padding: 0.5rem;
  display: block;
  border: 0;
  width: 100%;
  font-family: inherit;
  font-size: 0.85rem;
  line-height: 1.4;
  height: 8em;
  box-sizing: border-box;
  resize: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.85);
  outline: none;
}
.dropdown__button {
  display: flex;
  background: rgb(247, 247, 247);
  padding: 0.6rem 0.75rem;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.dropdown__button__text {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  padding: 0 0.2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
}
.button:first-child {
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: 2px;
}
.button:last-child {
  border-radius: 6px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.button:only-child {
  border-radius: 6px;
}
.button__disabled__true {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>

<script>
import IconLock3 from "./IconLock3";
import * as bip39 from "bip39";

export default {
  componenents: {
    IconLock3,
  },
  data() {
    return {
      mnemonic: "",
      dropdown: false,
    };
  },
  computed: {
    mnemonicClean() {
      return this.mnemonic.trim();
    },
    mnemonicIsValid() {
      return bip39.validateMnemonic(this.mnemonicClean);
    },
    address() {
      const { account } = this.$store.state.cosmos;
      return account && account.address;
    },
  },
  methods: {
    buttonClick() {
      if (this.address) {
        this.$store.dispatch("cosmos/accountSignOut");
      } else {
        this.mnemonic = "";
        this.dropdown = !this.dropdown;
      }
    },
    async mnemonicImport() {
      if (this.mnemonicIsValid) {
        const mnemonic = this.mnemonicClean;
        await this.$store.dispatch("cosmos/accountSignIn", { mnemonic });
      }
    },
    truncate(string) {
      return `${string.substring(0, 16)}...`;
    },
  },
};
</script>
