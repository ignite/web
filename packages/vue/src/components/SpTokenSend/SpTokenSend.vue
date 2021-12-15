<template>
  <div v-if="isSigningOngoing">
    <div class="transfer-ongoing-title">Opening Keplr</div>
    <div class="transfer-ongoing-subtitle">Sign transaction..</div>
  </div>

  <div v-else-if="isTransferSuccess">
    <div class="transfer-success-title">Assets transferred</div>
    <div class="transfer-success-subtitle">{{ transfer.amount }}</div>
    <div>
      <SpButton @click="resetTransaction" type="primary">done</SpButton>
    </div>
  </div>

  <div v-else>
    <div class="title-wrapper">
      <div class="title" :class="{ active: showSendScreen }" @click="switchToSend">Send</div>

      <div style="width: 24px; height: 100%" />

      <div class="title" :class="{ active: showReceiveScreen }" @click="switchToReceive">Receive</div>
    </div>

    <div style="width: 100%; height: 32px" />

    <div v-if="showSendScreen">
      <div class="enter-address-wrapper">
        <div class="input-label">Send to</div>

        <div style="width: 100%; height: 8px" />

        <div class="input-wrapper">
          <input
            class="input"
            name="rcpt"
            v-model="transfer.recipient"
            placeholder="Enter recipient address"
            :disabled="!address"
          />
        </div>
      </div>

      <div style="width: 100%; height: 24px" />

      <div v-if="balances.length > 0">
        <SpAmountSelectNew
          v-for="(amount, index) in transfer.amount"
          :index="index"
          :last="transfer.amount.length == 1"
          v-model="transfer.amount[index]"
          :available="balances"
          :selected="selectedDenoms"
          v-bind:key="'amount' + index"
          v-on:self-remove="transfer.amount.splice(index, 1)"
        />
      </div>

      <div style="width: 100%; height: 24px" />

      <div>
        <SpButton @click="sendTransaction" type="primary" :disabled="!validForm">Send</SpButton>
      </div>
    </div>

    <div v-if="showReceiveScreen">
      <div class="receive-wrapper">
        <SpCardNew>
          <template v-slot:top>
            <div class="qrcode-wrapper">
              <SpQrCode :value="bankAddress" color="#fff" />
            </div>
          </template>

          <template v-slot:bottom>
            <div class="address-wrapper">
              <div class="address">
                {{ bankAddress }}
              </div>
              <div class="copy"></div>
            </div>
          </template>
        </SpCardNew>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Bech32 } from '@cosmjs/encoding'

import { Amount, DenomTraces, Relayer } from '@/utils/interfaces'

import SpButton from '@/components/SpButton'
import SpAmountSelectNew from '@/components/SpAmountSelect'
import SpCardNew from '@/components/SpCard'
import SpQrCode from '@/components/SpQrCode'

export interface TransferData {
  recipient: string
  channel: string
  amount: Array<Amount>
  memo: string
  fees: Array<Amount>
}

export interface SpTokenSendState {
  transfer: TransferData
  feesOpen: boolean
  memoOpen: boolean
  bankAddress: string
  staking: Record<string, unknown>
  denomTraces: DenomTraces
  currentUIState: UI_STATE
}

export enum UI_STATE {
  'FRESH' = 1,
  'BOOTSTRAPED' = 2,
  'ABLE_TO_TRANSFER' = 100,
  'SIGNING_ONGOING' = 200,
  'TRANSFER_ONGOING' = 300,
  'TRANSFER_SUCCESS' = 301,
  'TRANSFER_ERROR' = 302,
  'ABLE_TO_RECEIVE' = 400,
}

export default defineComponent({
  name: 'SpTokenSend',

  components: {
    SpCardNew,
    SpButton,
    SpAmountSelectNew,
    SpQrCode,
  },

  props: {
    address: {
      type: String as PropType<string>,
    },
    refresh: {
      type: Boolean as PropType<boolean>,
    },
  },

  data: function (): SpTokenSendState {
    return {
      transfer: {
        recipient: '',
        channel: '',
        amount: [],
        memo: '',
        fees: [],
      } as TransferData,
      feesOpen: false,
      memoOpen: false,
      bankAddress: '',
      staking: {},
      denomTraces: {} as DenomTraces,
      currentUIState: UI_STATE['ABLE_TO_TRANSFER'],
    }
  },

  beforeCreate: function (): void {
    const vuexModule = ['cosmos.bank.v1beta1']
    for (let i = 1; i <= vuexModule.length; i++) {
      const submod = vuexModule.slice(0, i)
      if (!this.$store.hasModule(submod)) {
        console.warn('Module `cosmos.cosmos-sdk.bank` has not been registered!')
        this._depsLoaded = false
        break
      }
    }
  },

  mounted: function (): void {
    this.bankAddress = this.address ?? ''

    this.staking = this.$store.getters['cosmos.staking.v1beta1/getParams']()

    if (this._depsLoaded) {
      this.$store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
        params: { address: this.address },
        options: { all: true, subscribe: this.refresh },
      })
    }
  },

  watch: {
    balances: function (newBal: Array<Amount>, oldBal: Array<Amount>): void {
      if (newBal != oldBal && newBal[0]?.denom && oldBal.length == 0) {
        this.transfer.amount = [{ amount: '', denom: newBal[0].denom }]
        this.transfer.fees = [{ amount: '', denom: newBal[0].denom }]
      }
    },

    address: function (newAddr: string, oldAddr: string): void {
      if (this._depsLoaded) {
        if (newAddr != oldAddr) {
          this.bankAddress = newAddr
          if (this.bankAddress != '') {
            this.$store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
              params: { address: this.bankAddress },
              options: { subscribe: this.refresh },
            })
          }
        }
      }
    },
  },

  computed: {
    showReceiveScreen: function (): boolean {
      return this.currentUIState === UI_STATE['ABLE_TO_RECEIVE']
    },

    showSendScreen: function (): boolean {
      return !this.showReceiveScreen
    },

    isSigningOngoing: function (): boolean {
      return this.currentUIState === UI_STATE['SIGNING_ONGOING']
    },

    isAbleToTransfer: function (): boolean {
      return this.currentUIState === UI_STATE['ABLE_TO_TRANSFER']
    },

    isTransferOngoing: function (): boolean {
      return this.currentUIState === UI_STATE['TRANSFER_ONGOING']
    },

    isTransferSuccess: function (): boolean {
      return this.currentUIState === UI_STATE['TRANSFER_SUCCESS']
    },

    validForm: function (): boolean {
      if (
        this.transfer.amount.every(
          (x) => !isNaN(this.parseAmount(x.amount)) && x.amount != '' && this.parseAmount(x.amount) != 0,
        ) &&
        this.transfer.fees.every((x) => !isNaN(this.parseAmount(x.amount))) &&
        this.validAddress &&
        this.address
      ) {
        return true
      } else {
        return false
      }
    },

    balances: function (): Array<Amount> {
      if (this._depsLoaded) {
        return (
          this.$store.getters['cosmos.bank.v1beta1/getAllBalances']({
            params: { address: this.bankAddress },
          })?.balances ?? []
        )
      } else {
        return []
      }
    },

    nextToAdd: function (): Amount | null {
      const i = this.balances.findIndex((x) => !this.selectedDenoms.includes(x.denom))
      if (i == -1) {
        return null
      } else {
        return this.balances[i]
      }
    },

    nextFeeToAdd: function (): Amount | null {
      const i = this.balances.findIndex((x) => !this.selectedFeeDenoms.includes(x.denom))
      if (i == -1) {
        return null
      } else {
        return this.balances[i]
      }
    },

    selectedDenoms: function (): Array<string> {
      return this.transfer.amount.map((x) => x.denom)
    },

    selectedFeeDenoms: function (): Array<string> {
      return this.transfer.fees.map((x) => x.denom)
    },

    fullBalances: function (): Array<Amount> {
      return this.balances.map((x) => {
        return x
      })
    },
    relayers: function (): Array<Relayer> {
      return this.$store.hasModule(['common', 'relayers']) ? this.$store.getters['common/relayers/getRelayers'] : []
    },

    availableChannels: function (): Array<Relayer> {
      return this.relayers?.filter((x) => x.status == 'connected') ?? []
    },

    depsLoaded: function (): boolean {
      return this._depsLoaded
    },

    validAddress: function (): boolean {
      let toAddress
      try {
        toAddress = !!Bech32.decode(this.transfer.recipient)
      } catch {
        toAddress = false
      }
      return toAddress
    },
  },

  methods: {
    switchToSend(): void {
      this.currentUIState = UI_STATE['ABLE_TO_TRANSFER']
    },

    switchToReceive(): void {
      this.currentUIState = UI_STATE['ABLE_TO_RECEIVE']
    },

    parseAmount(amount: string): number {
      return amount == '' ? 0 : parseInt(amount)
    },

    resetTransaction: function (): void {
      this.transfer.amount = [{ amount: '', denom: this.balances[0].denom }]
      this.transfer.recipient = ''
      this.transfer.memo = ''
      this.transfer.channel = ''
      this.transfer.fees = [{ amount: '', denom: this.balances[0].denom }]
      this.feesOpen = false
      this.memoOpen = false

      this.currentUIState = UI_STATE['ABLE_TO_TRANSFER']
    },

    resetFees: function (): void {
      this.transfer.fees = [{ amount: '', denom: this.balances[0].denom }]
    },

    addToken: function (): void {
      this.transfer.amount.push({
        amount: '',
        denom: this.nextToAdd?.denom ?? '',
      })
    },

    addFeeToken: function (): void {
      this.transfer.fees.push({
        amount: '',
        denom: this.nextFeeToAdd?.denom ?? '',
      })
    },

    sendTransaction: async function (): Promise<void> {
      if (this.currentUIState === UI_STATE['ABLE_TO_TRANSFER']) {
        this.currentUIState = UI_STATE['SIGNING_ONGOING']

        const value = {
          amount: this.transfer.amount,
          toAddress: this.transfer.recipient,
          fromAddress: this.bankAddress,
        }

        this.transfer.fees.forEach((x) => {
          if (x.amount == '') {
            x.amount = '0'
          }
        })

        try {
          const txResult = await this.$store.dispatch('cosmos.bank.v1beta1/sendMsgSend', {
            value,
            fee: this.transfer.fees,
            memo: this.transfer.memo,
          })
          if (txResult && !txResult.code) {
            this.resetTransaction()
          }
        } catch (e) {
          this.currentUIState = UI_STATE['TRANSFER_ERROR']

          console.error(e)
        } finally {
          this.currentUIState = UI_STATE['TRANSFER_SUCCESS']
        }
        await this.$store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
          params: { address: this.address },
          options: { all: true, subscribe: false },
        })
      }
    },
  },
})
</script>

<style scoped>
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

.transfer-success-title {
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

.transfer-success-subtitle {
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

.transfer-ongoing-title {
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

.transfer-ongoing-subtitle {
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

.enter-address-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-wrapper {
  display: flex;
  flex: 1;
}
</style>
