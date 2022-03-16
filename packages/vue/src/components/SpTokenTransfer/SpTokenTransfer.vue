<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <div class="loading-spinner">
        <SpSpinner size="46"></SpSpinner>
      </div>
      <div style="width: 100%; height: 24px" />

      <div class="tx-ongoing-title">Opening Keplr</div>

      <div style="width: 100%; height: 8px" />

      <div class="tx-ongoing-subtitle">Sign transaction...</div>
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

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">Assets transferred</div>

      <div style="width: 100%; height: 8px" />

      <div
        v-for="(x, i) in state.tx.amount"
        :key="'amount' + i"
        class="tx-feedback-subtitle amount"
        :index="i"
      >
        {{ parseAmount(x.amount.amount) }} {{ x.amount.denom }}
      </div>

      <div style="width: 100%; height: 8px" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="resetTx">Done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <div class="warning-icon">
        <svg
          width="58"
          height="54"
          viewBox="0 0 58 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            fill="#FE475F"
          />
          <path
            d="M1.4375 52.4375L29 1.25L56.5625 52.4375H1.4375Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 19.625V34.0625"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">Something went wrong</div>

      <div style="width: 100%; height: 16px" />

      <div class="tx-feedback-subtitle">
        Your tokens could not be transferred and will remain on your wallet.
      </div>

      <div style="width: 100%; height: 24px" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="sendTx">Try again</SpButton>

        <div style="width: 100%; height: 8px" />

        <SpButton style="width: 100%" type="secondary" @click="resetTx"
          >Cancel</SpButton
        >
      </div>
    </div>

    <!-- wallet locked-->
    <div v-else-if="showWalletLocked">
      <div class="wallet-locked-wrapper">unlock your wallet</div>
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
          :class="{ active: showReceive, disabled: !hasAnyBalance }"
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

          <div class="input-wrapper">
            <input
              v-model="state.tx.receiver"
              class="input"
              :class="{
                error: state.tx.receiver.length > 0 && !validReceiver
              }"
              placeholder="Recipient address"
              :disabled="!hasAnyBalance"
            />
            <div
              v-if="state.tx.receiver.length > 0 && !validReceiver"
              class="error-message"
            >
              Invalid address
            </div>
          </div>
        </div>

        <div style="width: 100%; height: 21px" />
        <div v-if="hasAnyBalance">
          <SpAmountSelect
            class="token-selector--main"
            :selected="state.tx.amount"
            :balances="balances.assets"
            @update="handleTxAmountUpdate"
          />
          <div style="width: 100%; height: 34px" />
        </div>

        <div
          :class="[
            'advanced-label',
            { 'advanced-label--disabled': !hasAnyBalance }
          ]"
          @click="hasAnyBalance && (state.advancedOpen = !state.advancedOpen)"
        >
          Advanced
          <template v-if="hasAnyBalance">
            <svg
              v-if="!state.advancedOpen"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin-left: 7px"
            >
              <path
                d="M5.99998 7.4L0.599976 2L1.99998 0.599998L5.99998 4.6L9.99998 0.599998L11.4 2L5.99998 7.4Z"
                fill="black"
              />
            </svg>
            <svg
              v-else
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin-left: 7px"
            >
              <path
                d="M10.0001 7.4001L6.0001 3.4001L2.0001 7.4001L0.600098 6.0001L6.0001 0.600098L11.4001 6.0001L10.0001 7.4001Z"
                fill="black"
              />
            </svg>
          </template>
        </div>

        <div
          v-if="state.advancedOpen && hasAnyBalance"
          style="width: 100%; height: 24px"
        />

        <div v-if="state.advancedOpen && hasAnyBalance" class="advanced">
          <div class="input-label">Fees</div>

          <div style="width: 100%; height: 14px" />
          <SpAmountSelect
            class="token-selector"
            :selected="state.tx.fees"
            :balances="balances.assets"
            @update="handleTxFeesUpdate"
          />

          <div style="width: 100%; height: 35px" />

          <div class="input-label">Reference (memo)</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.memo"
              class="input"
              placeholder="Enter a reference"
            />
          </div>

          <div style="width: 100%; height: 16px" />

          <div class="input-label">Channel</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.ch"
              class="input"
              placeholder="Enter a channel"
            />
          </div>
        </div>

        <div style="width: 100%; height: 24px" />

        <div>
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendTx"
            >Send</SpButton
          >
        </div>
      </div>

      <!-- receive-->
      <div v-else-if="showReceive">
        <div class="receive-wrapper">
          <SpCard>
            <template #top>
              <div class="qrcode-wrapper">
                <SpQrCode :value="address" color="#000" width="112" />
              </div>
            </template>

            <template #bottom>
              <div class="address-wrapper">
                <div class="address">
                  {{ address }}
                </div>
                <div class="copy"><SpClipboard :text="address" /></div>
              </div>
            </template>
          </SpCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Bech32 } from '@cosmjs/encoding'
import long from 'long'
import { computed, defineComponent, PropType, reactive, watch } from 'vue'
import { useStore } from 'vuex'

import { AssetForUI } from '@/composables/useAssets'
import { Amount } from '@/utils/interfaces'

import { useAddress, useAssets } from '../../composables'
import SpAmountSelect from '../SpAmountSelect'
import SpButton from '../SpButton'
import SpCard from '../SpCard'
import SpClipboard from '../SpClipboard'
import SpQrCode from '../SpQrCode'
import SpSpinner from '../SpSpinner'

// types
export interface TxData {
  receiver: string
  ch: string
  amount: Array<AssetForUI>
  memo: string
  fees: Array<AssetForUI>
}

export enum UI_STATE {
  'FRESH' = 1,

  'BOOTSTRAPED' = 2,

  'WALLET_LOCKED' = 3,

  'SEND' = 100,
  'SEND_ADD_TOKEN' = 101,

  'TX_SIGNING' = 300,
  'TX_SUCCESS' = 301,
  'TX_ERROR' = 302,

  'RECEIVE' = 400
}

export interface State {
  tx: TxData
  currentUIState: UI_STATE
  advancedOpen: boolean
}

export let initialState: State = {
  tx: {
    receiver: '',
    ch: '',
    amount: [],
    memo: '',
    fees: []
  },
  currentUIState: UI_STATE.SEND,
  advancedOpen: false
}

export default defineComponent({
  name: 'SpTokenTransfer',

  components: {
    SpCard,
    SpAmountSelect,
    SpQrCode,
    SpButton,
    SpClipboard,
    SpSpinner
  },

  setup() {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { balances } = useAssets({ $s })

    // actions
    let sendMsgSend = (opts: any) =>
      $s.dispatch('cosmos.bank.v1beta1/sendMsgSend', opts)
    let sendMsgTransfer = (opts: any) =>
      $s.dispatch('ibc.applications.transfer.v1/sendMsgTransfer', opts)

    // methods
    let switchToSend = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    let switchToReceive = (): void => {
      if (address.value) {
        state.currentUIState = UI_STATE.RECEIVE
      }
    }
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let resetTx = (): void => {
      state.tx.amount = []
      state.tx.receiver = ''
      state.tx.memo = ''
      state.tx.ch = ''
      state.tx.fees = []

      state.currentUIState = UI_STATE.SEND
    }
    let sendTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let amount: Array<Amount> = state.tx.amount.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let memo = state.tx.memo

      let isIBC = state.tx.ch !== ''

      let send

      let payload: any = {
        amount,
        to_address: state.tx.receiver,
        from_address: address.value
      }

      try {
        if (isIBC) {
          payload = {
            ...payload,
            sourcePort: 'transfer',
            sourceChannel: state.tx.ch,
            sender: address.value,
            receiver: state.tx.receiver,
            timeoutHeight: 0,
            timeoutTimestamp: long
              .fromNumber(new Date().getTime() + 60000)
              .multiply(1000000),
            token: state.tx.amount[0]
          }

          send = () =>
            sendMsgTransfer({
              value: payload,
              fee,
              memo
            })
        } else {
          send = () =>
            sendMsgSend({
              value: payload,
              fee,
              memo
            })
        }

        const txResult = await send()

        if (txResult.code) {
          throw new Error()
        }
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }
    let resetFees = (): void => {
      state.tx.fees = []
    }
    let handleTxAmountUpdate = ({ selected }) => {
      state.tx.amount = selected
    }
    let handleTxFeesUpdate = ({ selected }) => {
      state.tx.fees = selected
    }
    let bootstrapTxAmount = () => {
      if (hasAnyBalance.value) {
        let firstBalance: AssetForUI = balances.value.assets[0]

        state.tx.amount[0] = {
          ...firstBalance,
          amount: {
            amount: '',
            denom: firstBalance.amount.denom
          }
        }
      }
    }

    // computed
    let showSend = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.SEND
    })
    let showReceive = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.RECEIVE
    })
    let showWalletLocked = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.WALLET_LOCKED
    })
    let hasAnyBalance = computed<boolean>(
      () =>
        balances.value.assets.length > 0 &&
        balances.value.assets.some((x) => parseAmount(x.amount.amount) > 0)
    )
    let isTxOngoing = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SIGNING
    })
    let isTxSuccess = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SUCCESS
    })
    let isTxError = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_ERROR
    })
    let validTxFees = computed<boolean>(() =>
      state.tx.fees.every((x) => {
        let parsedAmount = parseAmount(x.amount.amount)

        return !isNaN(parsedAmount) && parsedAmount > 0
      })
    )
    let validTxAmount = computed<boolean>(
      () =>
        state.tx.amount.length > 0 &&
        state.tx.amount.every((x) => {
          let parsedAmount = parseAmount(x.amount.amount)

          return !isNaN(parsedAmount) && parsedAmount > 0
        })
    )
    let validReceiver = computed<boolean>(() => {
      let valid: boolean

      try {
        valid = !!Bech32.decode(state.tx.receiver)
      } catch {
        valid = false
      }

      return valid
    })
    let ableToTx = computed<boolean>(
      () =>
        validTxAmount.value &&
        validReceiver.value &&
        validTxFees.value &&
        !!address.value
    )

    //watch
    watch(
      () => address.value,
      async () => {
        resetTx()
      }
    )
    watch(
      () => balances.value.assets,
      async (newValue, oldValue) => {
        if (newValue.length > 0 && oldValue.length === 0) {
          bootstrapTxAmount()
        }
      }
    )

    return {
      //state,
      state,
      // composable
      address,
      // computed
      showSend,
      showReceive,
      showWalletLocked,
      balances,
      hasAnyBalance,
      isTxOngoing,
      isTxSuccess,
      isTxError,
      ableToTx,
      validReceiver,
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
})
</script>

<style scoped lang="scss">
.advanced-label {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  display: inline-flex;
  align-items: center;

  /* base/black 0 */

  color: #000000;

  &--disabled {
    color: rgba(0, 0, 0, 0.33);
    &:hover {
      cursor: default !important;
    }
  }
}

.advanced-label:hover {
  cursor: pointer;
}
.copy {
  padding: 12px 0;
}
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tx {
  padding-bottom: 40px;
}
.token-selector {
  &--main {
    &::v-deep(.add-token) {
      margin-top: 18px;
    }
  }
}

.advanced {
  &::v-deep(.add-token) {
    margin-top: 17px;
  }
}

.qrcode-wrapper {
  background: rgba(0, 0, 0, 0.03);
  padding: 36px;
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

  word-break: break-all;

  color: #000000;
}

.tx-feedback-title {
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
.tx-feedback-subtitle.amount {
  text-transform: uppercase;
}
.tx-feedback-subtitle {
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
  font-weight: 400;
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

  &.disabled {
    &:hover {
      cursor: text;
    }
  }
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
  margin-top: 4px;
  padding: 12px 16px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  width: 100%;
  outline: 0;
  transition: background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: block;

  &:not([disabled]) {
    &:hover {
      background: rgba(0, 0, 0, 0.07);
    }
  }

  &:focus {
    background: rgba(0, 0, 0, 0.07);
    color: #000;
  }

  &.error {
    box-shadow: 0 0 0 1px rgba(254, 71, 95, 1);
  }
}

.error-message {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 153.8%;
  color: #d80228;
  margin-top: 5px;
}

.input::placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.input-wrapper {
  display: block;
}
</style>
