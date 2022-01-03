<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <div class="tx-ongoing-title">Opening Keplr</div>

      <div style="width: 100%; height: 8px" />

      <div class="tx-ongoing-subtitle">Sign transaction..</div>

      <div style="width: 100%; height: 8px" />
    </div>

    <div v-else-if="isTxSuccess" class="feedback">
      <div class="check-icon">
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="31.5"
            r="29.5"
            stroke="#00CF30"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M19 30.1362L28.6557 40L45 23"
            stroke="#00CF30"
            stroke-width="4"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 8px" />

      <div class="tx-success-title">Assets transferred</div>

      <div style="width: 100%; height: 8px" />

      <div
        class="tx-success-subtitle"
        v-for="(x, i) in state.tx.amount"
        :index="i"
        v-bind:key="'amount' + i"
      >
        {{ parseAmount(x.amount) }} {{ x.denom }}
      </div>

      <div style="width: 100%; height: 8px" />

      <div>
        <SpButton @click="resetTx">done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <div class="tx-success-title">tx errored</div>
      <div>
        <SpButton @click="resetTx">try again</SpButton>
      </div>
    </div>

    <!-- send/receive -->
    <div v-else>
      <div class="title-wrapper">
        <div class="title" :class="{ active: showSend }" @click="switchToSend">
          Send
        </div>

        <div style="width: 24px; height: 100%" />

        <div
          class="title"
          :class="{ active: showReceive }"
          @click="switchToReceive"
        >
          Receive
        </div>
      </div>

      <div style="width: 100%; height: 32px" />

      <!-- send -->
      <div v-if="showSend">
        <div class="enter-address-wrapper">
          <div class="input-label">Send to</div>

          <div style="width: 100%; height: 8px" />

          <div class="input-wrapper">
            <input
              class="input"
              :class="{
                error: state.tx.toAddress.length > 0 && !validToAddress
              }"
              v-model="state.tx.toAddress"
              placeholder="Enter recipient address"
            />
          </div>
        </div>

        <div style="width: 100%; height: 24px" />

        <div v-if="hasAnyBalance">
          <SpAmountSelect
            class="token-selector"
            :selected="state.tx.amount"
            :balances="balances"
            v-on:update="handleTxAmountUpdate"
          />
        </div>

        <div style="width: 100%; height: 24px" />

        <div class="advanced">
          <div class="input-label">Fees</div>

          <div style="width: 100%; height: 8px" />

          <SpAmountSelect
            class="token-selector"
            :selected="state.tx.fees"
            :balances="balances"
            v-on:update="handleTxFeesUpdate"
          />

          <div style="width: 100%; height: 36px" />

          <div class="input-label">Reference (memo)</div>

          <div style="width: 100%; height: 8px" />

          <div class="input-wrapper">
            <input
              class="input"
              placeholder="Enter a reference"
              v-model="state.tx.memo"
            />
          </div>
        </div>

        <div style="width: 100%; height: 24px" />

        <div>
          <SpButton @click="sendTx" :disabled="!ableToTx">Send</SpButton>
        </div>
      </div>

      <!-- receive-->
      <div v-if="showReceive">
        <div class="receive-wrapper">
          <SpCard>
            <template v-slot:top>
              <div class="qrcode-wrapper">
                <SpQrCode :value="fromAddress" color="#fff" />
              </div>
            </template>

            <template v-slot:bottom>
              <div class="address-wrapper">
                <div class="address">
                  {{ fromAddress }}
                </div>
                <div class="copy"><SpClipboard :text="fromAddress" /></div>
              </div>
            </template>
          </SpCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, PropType, watch, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Bech32 } from '@cosmjs/encoding'

import { Amount } from '../../utils/interfaces'

import SpAmountSelect from '../SpAmountSelect'
import SpCard from '../SpCard'
import SpQrCode from '../SpQrCode'
import SpButton from '../SpButton'
import SpClipboard from '../SpClipboard'

// types
export interface TxData {
  toAddress: string
  ch: string
  amount: Array<Amount>
  memo: string
  fees: Array<Amount>
}

export interface State {
  tx: TxData
  currentUIState: UI_STATE
}

export enum UI_STATE {
  'FRESH' = 1,

  'BOOTSTRAPED' = 2,

  'SEND' = 100,
  'SEND_ADD_TOKEN' = 101,

  'TX_SIGNING' = 300,
  'TX_SUCCESS' = 301,
  'TX_ERROR' = 302,

  'RECEIVE' = 400
}

export default {
  name: 'SpTx',

  components: {
    SpCard,
    SpAmountSelect,
    SpQrCode,
    SpButton,
    SpClipboard
  },

  props: {
    fromAddress: {
      type: String as PropType<string>
    },
    refresh: {
      type: Boolean as PropType<boolean>
    }
  },

  setup(props: any) {
    // store
    const $s = useStore()

    // state
    const state: State = reactive({
      tx: {
        toAddress: '',
        ch: '',
        amount: [],
        memo: '',
        fees: []
      } as TxData,
      currentUIState: UI_STATE.SEND as UI_STATE
    })

    // actions
    const sendMsgSend = (opts: any) =>
      $s.dispatch('cosmos.bank.v1beta1/sendMsgSend', opts)
    const queryAllBalances = (opts: any) =>
      $s.dispatch('cosmos.bank.v1beta1/QueryAllBalances', opts)

    // methods
    const switchToSend = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    const switchToReceive = (): void => {
      state.currentUIState = UI_STATE.RECEIVE
    }
    const parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    const resetTx = (): void => {
      state.tx.amount = []
      state.tx.toAddress = ''
      state.tx.memo = ''
      state.tx.ch = ''
      state.tx.fees = []

      state.currentUIState = UI_STATE.SEND

      bootstrapTxAmount()
    }
    const sendTx = async (): Promise<void> => {
      if (state.currentUIState === UI_STATE.SEND) {
        state.currentUIState = UI_STATE.TX_SIGNING

        const value = {
          amount: state.tx.amount,
          toAddress: state.tx.toAddress,
          fromAddress: props.fromAddress
        }

        const fees = state.tx.fees.map((x) => ({
          ...x,
          amount: x.amount == '' ? '0' : x.amount
        }))

        try {
          const txResult = await sendMsgSend({
            value,
            fees,
            memo: state.tx.memo
          })

          if (txResult.code) {
            throw new Error()
          }

          state.currentUIState = UI_STATE.TX_SUCCESS
        } catch (e) {
          console.error(e)
          state.currentUIState = UI_STATE.TX_ERROR
        }
      }
    }
    const resetFees = (): void => {
      state.tx.fees = []
    }
    const handleTxAmountUpdate = ({ selected }) => {
      state.tx.amount = selected
    }
    const handleTxFeesUpdate = ({ selected }) => {
      state.tx.fees = selected
    }
    const bootstrapTxAmount = () => {
      if (hasAnyBalance.value) {
        const firstBalance = balances.value[0]

        state.tx.amount[0] = { ...firstBalance, amount: '' }
      }
    }

    // lh
    onMounted(async () => {
      if (props.fromAddress) {
        queryAllBalances({
          params: { address: props.fromAddress },
          options: { subscribe: props.refresh }
        })

        bootstrapTxAmount()
      }
    })

    // computed
    const showSend = computed(() => {
      return !showReceive.value
    })
    const showReceive = computed(() => {
      return state.currentUIState === UI_STATE.RECEIVE
    })
    const balances = computed(() => {
      return (
        $s.getters['cosmos.bank.v1beta1/getAllBalances']({
          params: { address: props.fromAddress }
        })?.balances ?? []
      )
    })
    const hasAnyBalance = computed(
      () =>
        balances.value.length > 0 &&
        balances.value.some((x) => parseAmount(x.amount) > 0)
    )
    const isTxOngoing = computed(() => {
      return state.currentUIState === UI_STATE.TX_SIGNING
    })
    const isTxSuccess = computed(() => {
      return state.currentUIState === UI_STATE.TX_SUCCESS
    })
    const isTxError = computed(() => {
      return state.currentUIState === UI_STATE.TX_ERROR
    })
    const validTxFees = computed(() =>
      state.tx.fees.every((x) => {
        const parsedAmount = parseAmount(x.amount)

        return !isNaN(parsedAmount) && parsedAmount > 0
      })
    )
    const validTxAmount = computed(() =>
      state.tx.amount.every((x) => {
        const parsedAmount = parseAmount(x.amount)

        return !isNaN(parsedAmount) && parsedAmount > 0
      })
    )
    const validToAddress = computed(() => {
      let valid = false

      try {
        valid = !!Bech32.decode(state.tx.toAddress)
      } catch {
        valid = false
      }

      return valid
    })
    const ableToTx = computed(
      () =>
        validTxAmount.value &&
        validToAddress.value &&
        validTxFees.value &&
        !!props.fromAddress
    )

    //watch
    watch(
      () => props.fromAddress,
      async (newValue, oldValue) => {
        if (newValue !== oldValue) {
          queryAllBalances({
            params: { address: newValue },
            options: { subscribe: props.refresh }
          })

          bootstrapTxAmount()
        }
      }
    )
    watch(
      () => balances.value,
      async (newValue, oldValue) => {
        if (newValue.length > 0 && oldValue.length === 0) {
          bootstrapTxAmount()
        }
      }
    )

    return {
      //state,
      state,
      // computed
      showSend,
      showReceive,
      balances,
      hasAnyBalance,
      isTxOngoing,
      isTxSuccess,
      isTxError,
      ableToTx,
      validToAddress,
      // methods
      switchToSend,
      switchToReceive,
      parseAmount,
      resetTx,
      sendTx,
      resetFees,
      handleTxAmountUpdate,
      handleTxFeesUpdate
    }
  }
}
</script>

<style scoped>
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tx {
  padding: 12px;
  background: white;
  border-radius: 10px;
}
.token-selector {
}
.qrcode-wrapper {
  background: #000;
  padding: 16px;
  text-align: center;
}

.address-wrapper {
  padding: 16px;
}

.receive-wrapper .address {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* or 24px */

  display: flex;
  align-items: center;

  color: #000000;
}

.tx-success-title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 152%;
  /* identical to box height, or 32px */

  text-align: center;
  letter-spacing: -0.017em;

  /* light/text */

  color: #000000;
}

.tx-success-subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.tx-ongoing-title {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.tx-ongoing-subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 152%;
  /* identical to box height, or 32px */

  text-align: center;
  letter-spacing: -0.017em;

  /* light/text */

  color: #000000;
}

.title-wrapper {
  display: flex;
}

.input-label {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 127%;
  /* identical to box height, or 36px */

  letter-spacing: -0.016em;
  font-feature-settings: 'zero';

  color: rgba(0, 0, 0, 0.33);
}

.title.active {
  color: #000000;
}

.title.active:hover {
  cursor: initial;
}

.title:hover {
  cursor: pointer;
}

.enter-address-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

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
</style>
