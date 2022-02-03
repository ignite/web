<template>
  <transition name="dropdown-fade">
    <div class="account-dropdown" v-if="showDefault">
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
    <div class="account-dropdown" v-else-if="showSettings">
      <div class="dropdown-option mb-3">
        <input
          class="input"
          placeholder="Enter a API "
          v-model="state.envConfig.apiNode"
        />
      </div>
      <div class="dropdown-option mb-3">
        <input
          class="input"
          placeholder="Enter a RPC"
          v-model="state.envConfig.rpcNode"
        />
      </div>
      <div class="dropdown-option mb-3">
        <input
          class="input"
          placeholder="Enter a WS"
          v-model="state.envConfig.wsNode"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  computed,
  reactive
} from 'vue'
import { useStore } from 'vuex'

import SpProfileIcon from '../SpProfileIcon'
import SpChevronRightIcon from '../SpChevronRight'
import SpExternalArrowIcon from '../SpExternalArrow'
import SpLinkIcon from '../SpLinkIcon'

export enum UI_STATE {
  'DEFAULT' = 1,

  'SETTINGS' = 2
}
export interface EnvConfigData {
  apiNode: string
  rpcNode: string
  wsNode: string
}

export interface State {
  currentUIState: UI_STATE
  envConfig: EnvConfigData
}

export let initialState: State = {
  currentUIState: UI_STATE.DEFAULT,
  envConfig: {
    apiNode: 'http://localhost:1317',
    rpcNode: 'http://localhost:26657',
    wsNode: 'ws://localhost:26657/websocket'
  }
}

import { useClipboard, useAddress } from '../../composables'

export default defineComponent({
  name: 'SpAccountDropdown',

  components: {
    SpProfileIcon,
    SpChevronRightIcon,
    SpExternalArrowIcon,
    SpLinkIcon
  },

  emits: ['disconnect', 'close'],

  props: {
    wallet: {
      type: Object,
      required: true
    },

    accName: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    }
  },

  setup(_, { emit }) {
    // store
    let $s = useStore()

    // composables
    let { shortAddress } = useAddress({ $s })
    let { copy } = useClipboard()

    let apiTendermint = computed(() => $s.getters['common/env/apiTendermint'])
    let apiCosmos = computed(() => $s.getters['common/env/apiCosmos'])
    let apiWS = computed(() => $s.getters['common/env/apiWS'])

    // state
    let state: State = reactive({
      ...initialState,
      envConfig: {
        apiNode: apiCosmos.value,
        rpcNode: apiTendermint.value,
        wsNode: apiWS.value
      }
    })

    // actions
    let setEnvConfig = (opts) => $s.dispatch('common/env/config', opts)

    // computed
    let showDefault = computed(() => state.currentUIState === UI_STATE.DEFAULT)
    let showSettings = computed(
      () => state.currentUIState === UI_STATE.SETTINGS
    )

    // methods
    let clickOutsideHandler = (evt) => {
      let dropdownEl = document.querySelector('.account-dropdown')
      let dropdownButtonEl = document.querySelector('.account-dropdown-button')
      if (
        !dropdownEl?.contains(evt.target) &&
        !dropdownButtonEl?.contains(evt.target)
      ) {
        emit('close')
        setEnvConfig({
          ...state.envConfig
        })
      }
    }
    let switchToSettings = () => {
      state.currentUIState = UI_STATE.SETTINGS
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
      // methods
      shortAddress,
      copy,
      switchToSettings,
      // computed
      showDefault,
      showSettings
    }
  }
})
</script>

<style>
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
