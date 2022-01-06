<template>
  <transition name="dropdown-fade">
    <div class="account-dropdown">
      <SpLinkIcon
        icon="Close"
        aria-label="Close modal"
        class="close-icon"
        text=""
        @click="$emit('close')"
      />
      <span class="description-grey mb-3 d-block">Connected wallet</span>
      <div class="mb-3" style="display: flex; align-items: center">
        <SpProfileIcon />
        <div style="display: flex; flex-flow: column; margin-left: 12px">
          <span class="account-name">
            {{ connectedWallet.name }}
          </span>
          <span class="description-grey">
            Keplr
          </span>
        </div>
      </div>
      <div class="dropdown-option" @click="disconnectWallet">
        <span>
          Disconnect wallet
        </span>
      </div>
      <hr class="divider" />
      <div class="dropdown-option">
        <span>
          Settings
        </span>
        <ChevronRightIcon />
      </div>
      <hr class="divider" />
      <div class="dropdown-option mb-3">
        <span>
          Support
        </span>
        <ExternalArrowIcon />
      </div>
      <div class="dropdown-option mb-3">
        <span>
          Twitter
        </span>
        <ExternalArrowIcon />
      </div>
      <div class="dropdown-option mb-3">
        <span>
          Telegram
        </span>
        <ExternalArrowIcon />
      </div>
      <div style="text-align: center; margin-top: 1.6rem;">
        <span class="description-grey terms-link mr-2">Privacy</span>•
        <span class="description-grey terms-link mr-2 ml-1">Terms of use</span>•
        <span class="description-grey terms-link ml-1">Cookies Policy</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from 'vuex'
import SpProfileIcon from './SpProfileIcon.vue'
import ChevronRightIcon from './assets/ChevronRight.vue'
import ExternalArrowIcon from './assets/ExternalArrow.vue'

export default {
  name: 'SpAccountDropdown',
  components: {
    SpProfileIcon,
    ChevronRightIcon,
    ExternalArrowIcon,
  },
  props: {
    connectedWallet: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const store = useStore()

    const disconnectWallet = async () => {
      await store.dispatch('common/wallet/signOut')
      emit('disconnect')
    }

    return {
      disconnectWallet,
    }
  }
}
</script>

<style>
.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.d-block {
  display: block;
}

.account-dropdown {
  position: fixed;
  box-sizing: border-box;
  top: 2rem;
  right: 2rem;
  z-index: 90;
  background: #fff;
  height: auto;
  padding: 2.8rem;
  max-width: 288px;
  width: 100%;
  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
}

.divider {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  margin: 1.2rem -2.8rem;
}

.dropdown-option {
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-option:hover {
  opacity: 0.8;
}

.terms-link {
  cursor: pointer;
}

.terms-link:hover {
  opacity: 0.8;
}

.close-icon {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  background: transparent;
}

.account-name {
  font-size: 13px;
  font-weight: bold;
  line-height: 153.8%;
}

.description-grey {
  font-size: 13px;
  line-height: 153.8%;
  color: rgba(0, 0, 0, 0.667);
}

.dropdown-fade-enter,
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity .2s ease;
}
</style>
