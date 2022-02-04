<template>
  <div class="amount-select">
    <div
      class="selected-item"
      v-for="(x, i) in selected"
      :index="i"
      v-bind:key="'selected' + i"
    >
      <Suspense>
        <SpDenom :denom="x.denom" modifier="avatar" />
      </Suspense>

      <div style="width: 12px; height: 100%" />

      <div class="token-info">
        <div class="token-denom">
          <Suspense>
            <SpDenom :denom="x.denom" />
          </Suspense>
        </div>

        <div
          class="token-amount"
          :class="{
            error: !hasEnoughBalance(x, x.amount)
          }"
        >
          {{ parseAmount(getBalanceAmount(x)) }}
          available
        </div>
      </div>

      <div class="input-wrapper">
        <input
          class="input secondary"
          :value="x.amount"
          @input="(evt) => handleAmountInput(evt, x)"
          placeholder="0"
        />
      </div>
    </div>

    <div
      @click="state.modalOpen = true"
      v-if="ableToBeSelected.length > 0"
      class="add-token"
    >
      <div class="add-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="16"
            cy="16"
            r="15.5"
            stroke="black"
            stroke-opacity="0.07"
          />
          <g clip-path="url(#clip0_721_8528)">
            <path
              d="M16 8.5L16 24.5"
              stroke="black"
              stroke-opacity="0.33"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M24 16.5L8 16.5"
              stroke="black"
              stroke-opacity="0.33"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_721_8528">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(8 8.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div style="width: 12px; height: 100%" />

      <div class="action-text">Add asset</div>
    </div>

    <SpModal :visible="state.modalOpen" :title="'Select asset'">
      <template v-slot:body>
        <div class="modal-body">
          <div class="search">
            <input
              class="input primary"
              v-model="state.tokenSearch"
              placeholder="Search assets"
            />
          </div>

          <div style="width: 100%; height: 16px" />

          <div class="modal-list">
            <div
              class="modal-list-item"
              v-for="(x, i) in ableToBeSelected"
              :index="i"
              v-bind:key="'balance' + i"
              @click="() => handleTokenSelect(x)"
            >
              <Suspense>
                <SpDenom :denom="x.denom" modifier="avatar" />
              </Suspense>

              <div style="width: 12px; height: 100%" />

              <div class="token-info">
                <div class="token-denom">
                  <Suspense>
                    <SpDenom :denom="x.denom" />
                  </Suspense>
                </div>

                <div class="token-amount">
                  {{ parseAmount(x.amount) }} available
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SpModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, reactive } from 'vue'

import { Amount } from '../../utils/interfaces'

import SpModal from '../SpModal'
import SpDenom from '../SpDenom'

export interface State {
  tokenSearch: string
  modalOpen: boolean
}

export let initialState: State = {
  tokenSearch: '',
  modalOpen: false
}

export default defineComponent({
  name: 'SpAmountSelect',

  emits: ['update'],

  components: { SpModal, SpDenom },

  props: {
    selected: {
      type: Array as PropType<Array<Amount>>
    },
    balances: {
      type: Array as PropType<Array<Amount>>
    }
  },

  setup(props: any, { emit }) {
    // state
    let state: State = reactive(initialState)

    // computed
    let ableToBeSelected = computed<any[]>(() => {
      let notSelected = (x: Amount) =>
        props.selected.every((y: Amount) => x.denom !== y.denom)
      let searchFilter = (x: Amount) =>
        x.denom.toUpperCase().includes(state.tokenSearch.toUpperCase())

      return props.balances.filter(notSelected).filter(searchFilter)
    })

    // methods
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let handleAmountInput = (evt: Event, x: Amount) => {
      let newAmount = (evt.target as HTMLInputElement).value

      let newSelected: Array<Amount> = [...props.selected]

      newSelected[newSelected.findIndex((y) => x.denom === y.denom)].amount =
        newAmount

      emit('update', { selected: newSelected })
    }
    let handleTokenSelect = (x: Amount) => {
      let newSelected: Array<Amount> = [...props.selected, { ...x, amount: '' }]

      emit('update', { selected: newSelected })

      state.modalOpen = false
    }
    let getBalanceAmount = (x: Amount) => {
      return (props.balances.find((y) => y.denom === x.denom) as Amount).amount
    }
    let hasEnoughBalance = (x: Amount, desiredToTx) =>
      parseAmount(getBalanceAmount(x)) >= parseAmount(desiredToTx)

    return {
      // state
      state,
      // computed
      ableToBeSelected,
      // methods
      parseAmount,
      hasEnoughBalance,
      handleAmountInput,
      handleTokenSelect,
      getBalanceAmount
    }
  }
})
</script>

<style scoped>
.selected-item {
  display: flex;
  align-items: center;
}
.input.primary {
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

.input.primary:placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.add-token {
  display: flex;
}
.add-token:hover {
  cursor: pointer;
}
.add-icon {
}
.action-text {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  display: flex;
  align-items: center;
  text-align: right;

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.modal-list {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}

.modal-list-item {
  display: flex;
  align-items: center;
  padding: 16px 24px;
}

.modal-list-item:hover {
  background: rgba(0, 0, 0, 0.03);
  cursor: pointer;
}

.amount-select {
}

.input.secondary {
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

.input.secondary:placeholder {
  color: rgba(0, 0, 0, 0.33);
}

.token-info {
  display: flex;
  flex-direction: column;
}

.token-denom {
  text-transform: uppercase;

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
}

.token-amount.error {
  color: #d80228;
}

.input-wrapper {
  display: flex;
  flex: 1;
}
</style>
