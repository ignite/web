<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-if="address" class="button">
          <div class="button__text button__address">
            {{ address }}
          </div>
        </div>
        <div class="button" @click="buttonClick">
          <div class="button__icon">
            <IconLock3 />
          </div>
          <div class="button__text">
            {{ address ? 'Log out' : 'Sign in ' }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container-dropdown">
          <div v-if="dropdown && !address">
            <div class="dropdown">
              <div class="dropdown__textarea">
                <textarea
                  v-model="mnemonic"
                  placeholder="Mnemonic..."
                  class="dropdown__textarea__input"
                ></textarea>
                <div
                  class="dropdown__textarea__icon"
                  @click="mnemonicGenerate()"
                >
                  <IconMagic1 />
                </div>
              </div>
              <div
                :class="[
                  'dropdown__button',
                  `button__disabled__${!mnemonicIsValid}`
                ]"
                @click="importMnemonic"
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
@import '../styles/main.css';

.container {
  font-family: var(--sp-f-primary);
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
.button__address {
  text-transform: none;
  font-weight: 500;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.5);
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
  display: block;
  height: 8em;
  position: relative;
}
.dropdown__textarea__input {
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  resize: none;
  letter-spacing: 0.02em;
  font-family: inherit;
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.85);
}
.dropdown__textarea__icon {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  fill: rgba(0, 0, 0, 0.5);
  cursor: pointer;
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
  margin-top: 0.75rem;
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
@media screen and (max-width: 600px) {
  .button__address {
    max-width: 120px;
    text-overflow: ellipsis;
  }
}
</style>

<script>
import IconLock3 from './icons/IconLock3'
import IconMagic1 from './icons/IconMagic1'
import * as bip39 from 'bip39'

export default {
  components: {
    IconLock3,
    IconMagic1
  },
  data() {
    return {
      mnemonic: '',
      dropdown: false
    }
  },
  computed: {
    mnemonicClean() {
      return this.mnemonic.trim()
    },
    mnemonicIsValid() {
      return bip39.validateMnemonic(this.mnemonicClean)
    },
    address() {
      return this.$store.getters['common/session/address']
    }
  },
  methods: {
    buttonClick() {
      if (this.address) {
        this.$store.dispatch('common/session/logout')
      } else {
        this.mnemonic = ''
        this.dropdown = !this.dropdown
      }
    },
    async importMnemonic() {
      if (this.mnemonicIsValid) {
        const mnemonic = this.mnemonicClean
        this.$store.dispatch('common/session/importMnemonic', { mnemonic })
      }
    },
    mnemonicGenerate() {
      const mnemonic = bip39.generateMnemonic()
      this.mnemonic = mnemonic
    },
    truncate(string) {
      return `${string.substring(0, 16)}...`
    }
  }
}
</script>
