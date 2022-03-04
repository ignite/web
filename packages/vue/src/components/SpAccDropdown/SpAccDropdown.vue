<template>
  <transition name="dropdown-fade">
    <div v-if="showDefault" class="account-dropdown">
      <span class="description-grey mb-3 d-block">Connected wallet</span>
      <div class="mb-3" style="display: flex; align-items: center">
        <SpProfileIcon :address="address" />
        <div style="display: flex; flex-flow: column; margin-left: 12px">
          <span class="account-name">
            {{ accName }}
          </span>
          <span
            class="description-grey copy-address"
            title="Copy address"
            @click="copy(address)"
          >
            {{ shortAddress }}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 0.375H0.375V8.625H8.625V0.375Z"
                stroke="#094EFD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.125 3.375H11.625V11.625H3.375V10.125"
                stroke="#094EFD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="dropdown-option" @click="$emit('disconnect')">
        <span> Disconnect wallet </span>
      </div>
      <hr class="divider" />
      <div class="dropdown-option" @click="switchToSettings">
        <span> Settings </span>
        <SpChevronRightIcon />
      </div>
      <hr class="divider" />
      <div class="dropdown-option mb-3">
        <span> Support </span>
        <SpExternalArrowIcon />
      </div>
      <div class="dropdown-option mb-3">
        <span> Twitter </span>
        <SpExternalArrowIcon />
      </div>
      <div class="dropdown-option mb-3">
        <span> Telegram </span>
        <SpExternalArrowIcon />
      </div>
      <div style="text-align: center; margin-top: 2rem">
        <span class="description-grey terms-link mr-2">Privacy</span>•
        <span class="description-grey terms-link mr-2 ml-1">Terms of use</span>•
        <span class="description-grey terms-link ml-1">Cookies</span>
      </div>
    </div>
    <div v-else-if="showSettings" class="account-dropdown">
      <header class="account-dropdown__header">
        <div class="account-dropdown__back" @click="switchToDefault">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 10L1 10M1 10L9.53125 19M1 10L9.53125 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="account-dropdown__title">Settings</div>
      </header>

      <div class="dropdown-option mb-3">
        <span> Chain </span>
        <span> {{ chainId }} </span>
      </div>
      <hr class="divider" />

      <div class="dropdown-option mb-3">
        <span> Cosmos SDK API </span>
        <span> {{ apiConnected ? 'connected' : 'disconnected' }} </span>
      </div>
      <hr class="divider" />

      <div class="dropdown-option mb-3">
        <span> Tendermint RPC </span>
        <span> {{ rpcConnected ? 'connected' : 'disconnected' }} </span>
      </div>
      <hr class="divider" />

      <div class="dropdown-option mb-3">
        <span> WebSocket </span>
        <span> {{ wsConnected ? 'connected' : 'disconnected' }} </span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive
} from 'vue'
import { useStore } from 'vuex'

import SpChevronRightIcon from '../SpChevronRight'
import SpExternalArrowIcon from '../SpExternalArrow'
import SpLinkIcon from '../SpLinkIcon'
import SpProfileIcon from '../SpProfileIcon'

export enum UI_STATE {
  'DEFAULT' = 1,

  'SETTINGS' = 2
}

export interface State {
  currentUIState: UI_STATE
}

export let initialState: State = {
  currentUIState: UI_STATE.DEFAULT
}

import { useAddress, useClipboard } from '../../composables'

export default defineComponent({
  name: 'SpAccountDropdown',

  components: {
    SpProfileIcon,
    SpChevronRightIcon,
    SpExternalArrowIcon,
    SpLinkIcon
  },

  props: {
    wallet: {
      type: Object,
      required: true
    },

    accName: {
      type: String,
      required: true
    }
  },

  emits: ['disconnect', 'close'],

  setup(_, { emit }) {
    // store
    let $s = useStore()

    // composables
    let { address, shortAddress } = useAddress({ $s })
    let { copy } = useClipboard()

    // computed
    let chainId = computed<string>(() => $s.getters['common/env/chainId'])
    let apiConnected = computed<boolean>(
      () => $s.getters['common/env/apiConnected']
    )
    let rpcConnected = computed<boolean>(
      () => $s.getters['common/env/rpcConnected']
    )
    let wsConnected = computed<boolean>(
      () => $s.getters['common/env/wsConnected']
    )
    let showDefault = computed<boolean>(
      () => state.currentUIState === UI_STATE.DEFAULT
    )
    let showSettings = computed<boolean>(
      () => state.currentUIState === UI_STATE.SETTINGS
    )

    // state
    let state: State = reactive(initialState)

    // methods
    let clickOutsideHandler = (evt) => {
      let dropdownEl = document.querySelector('.account-dropdown')
      let dropdownButtonEl = document.querySelector('.account-dropdown-button')
      if (
        !dropdownEl?.contains(evt.target) &&
        !dropdownButtonEl?.contains(evt.target)
      ) {
        emit('close')
        state.currentUIState = UI_STATE.DEFAULT
      }
    }
    let switchToSettings = () => {
      state.currentUIState = UI_STATE.SETTINGS
    }
    let switchToDefault = () => {
      state.currentUIState = UI_STATE.DEFAULT
    }

    // lh
    onMounted(() => {
      document.addEventListener('click', clickOutsideHandler)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', clickOutsideHandler)
    })

    return {
      //state
      state,
      // compoasbles
      address,
      shortAddress,
      // methods
      copy,
      switchToDefault,
      switchToSettings,
      // computed
      showDefault,
      showSettings,
      chainId,
      apiConnected,
      rpcConnected,
      wsConnected
    }
  }
})
</script>

<style lang="scss">
.input {
  padding: 16px 13.5px;
  background: rgba(0, 0, 0, 0.03);
  border: 0;
  border-radius: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  width: 100%;
}

.input:placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.input-wrapper {
  display: flex;
  flex: 1;
}

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
  top: 7rem;
  right: 2rem;
  z-index: 90;
  background: #fff;
  height: auto;
  padding: 2.8rem;
  max-width: 320px;
  width: 100%;
  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
  border-radius: 10px;

  &__header {
    display: flex;
    align-items: center;
    height: 48px;
    margin: -28px -28px 26px;
    padding: 8px 48px 8px 24px;
  }

  &__back {
    cursor: pointer;
  }

  &__title {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 133%;
    text-align: center;
    letter-spacing: -0.007em;
    color: #000000;
    flex-grow: 1;
  }
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

.close-dropdown-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  font-size: 20px;
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

.copy-address {
  cursor: pointer;
  user-select: none;

  > svg {
    margin: 0 0 -1px 3px;
  }
}
.copy-address:hover {
  opacity: 0.8;
}
.copy-address:active {
  color: #4251fa;
}

.dropdown-fade-enter,
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>
