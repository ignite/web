<template>
  <div class="amount-select-wrapper">
    <div class="token-info">
      <div class="token-denom">
        {{ fulldenom.denom.toUpperCase() }}
      </div>

      <div class="token-amount">{{ fulldenom.amount }} available</div>
    </div>

    <div class="input-wrapper">
      <input
        class="input"
        :class="{
          'sp-error': fulldenom.amount != '' && parseAmount(fulldenom.amount) - parseAmount(amount) < 0,
        }"
        name="rcpt"
        v-model="amount"
        placeholder="0"
        v-on:focus="focused = true"
        v-on:blur="focused = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Amount, ColoredAmount } from '@/utils/interfaces'
import { str2rgba } from '@/utils/helpers'

export interface SpAmountSelectState {
  amount: string
  denom: string | null
  focused: boolean
  modalOpen: boolean
  searchTerm: string
}

export default defineComponent({
  name: 'SpAmountSelect',

  data: function (): SpAmountSelectState {
    return {
      amount: '',
      denom: null,
      focused: false,
      modalOpen: false,
      searchTerm: '',
    }
  },

  props: {
    modelValue: {
      type: Object as PropType<Amount>,
    },
    available: {
      type: Array as PropType<Array<Amount>>,
    },
    index: { type: Number as PropType<number> },
    selected: {
      type: Array as PropType<Array<string>>,
    },
    last: {
      type: Boolean as PropType<boolean>,
    },
  },

  emits: ['update:modelValue', 'self-remove'],

  mounted: function () {
    this.amount = this.modelValue?.amount + '' ?? ''
    this.denom = this.modelValue?.denom ?? null
  },

  computed: {
    currentVal: function (): Amount {
      return { amount: this.amount, denom: this.denom ?? '' }
    },

    fulldenom: function (): ColoredAmount {
      return (
        this.denoms.find((x: ColoredAmount) => x.denom == this.denom) ?? {
          amount: '',
          denom: '',
          color: '',
        }
      )
    },

    enabledDenoms: function (): Array<Amount> {
      return (
        this.available?.filter(
          (x) =>
            this.selected?.findIndex((y) => y == x.denom) == -1 ||
            this.selected?.findIndex((y) => y == x.denom) == this.index,
        ) ?? []
      )
    },

    denoms: function (): Array<ColoredAmount> {
      return (
        this.available?.map((x: Amount) => {
          const y: ColoredAmount = { amount: '0', denom: '', color: '' }
          y.amount = x.amount
          y.denom = x.denom
          y.color = str2rgba(x.denom.toUpperCase())
          return x as ColoredAmount
        }) ?? []
      )
    },

    filteredDenoms: function (): Array<ColoredAmount> {
      return this.searchTerm == ''
        ? this.denoms
        : this.denoms.filter((x) => x.denom.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1)
    },
  },

  methods: {
    toggleModal: function (): void {
      this.modalOpen = !this.modalOpen
    },

    selfRemove: function (): void {
      this.$emit('self-remove')
    },

    setDenom: function (avail: Amount): void {
      if (this.enabledDenoms.findIndex((x) => x == avail) != -1) {
        this.denom = avail.denom
        this.modalOpen = false
      }
    },

    parseAmount: function (amount: string): number {
      return amount == '' ? 0 : parseInt(amount)
    },
  },

  watch: {
    modelValue: function (newVal: Amount): void {
      this.amount = newVal.amount
      this.denom = newVal.denom
    },

    amount: function (newVal: string, oldVal: string): void {
      if (newVal != oldVal) {
        this.$emit('update:modelValue', this.currentVal)
      }
    },

    denom: function (newVal: string, oldVal: string): void {
      if (newVal != oldVal) {
        this.$emit('update:modelValue', this.currentVal)
      }
    },
  },
})
</script>

<style scoped>
.amount-select-wrapper {
  display: flex;
}

.input {
  width: 100%;

  background: none;
  border: 0;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 100%;
  /* identical to box height, or 21px */

  text-align: right;
  letter-spacing: -0.007em;

  /* light/inactive */

  color: #000000;
}

.input:placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.token-info {
  display: flex;
  flex-direction: column;
}

.token-denom {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.007em;

  /* light/text */

  color: #000000;
}

.token-amount {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 130.7%;
  /* identical to box height, or 17px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.token-info {
  display: flex;
  flex: 1;
}

.input-wrapper {
  display: flex;
  flex: 1;
}
</style>
