<template>
  <div class="tx-row">
    <div class='tx-container'>
      <div class="tx-icon" :class="tx?.dir">
        <svg
          v-if="tx?.dir !== 'self'"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13V3"
            stroke="black"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 6L8 2L12 6"
            stroke="black"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg v-else width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16666 1.66663V5.66663H5.16666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.83999 9.00001C3.27225 10.2269 4.09155 11.2801 5.17443 12.0009C6.25731 12.7217 7.54511 13.0711 8.8438 12.9963C10.1425 12.9216 11.3817 12.4268 12.3747 11.5865C13.3678 10.7462 14.0608 9.60599 14.3495 8.33758C14.6381 7.06917 14.5067 5.74131 13.9751 4.55407C13.4434 3.36684 12.5403 2.38454 11.4019 1.75518C10.2634 1.12583 8.95126 0.883515 7.66311 1.06475C6.37496 1.24599 5.1806 1.84095 4.25999 2.76001L1.16666 5.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>

      <div style="width: 16px; height: 100%" />

      <div class="tx-info">
        <div class="tx-direction">
          {{ dirDescription }}
        </div>
        <div class="tx-meta">
          {{txDate}}
        </div>
      </div>
      <div class="tx-payload">
        <template v-if='tx.amount.length'>
          <span v-for='(amount, index) in tx.amount' :key='`${amount.amount}-${amount.denom}-${index}`' class="tx-amount" :class="tx?.dir">
            {{ amountSign + ' ' + amount.amount }} <SpDenom :denom="amount.denom" />
          </span>
        </template>
        <span v-else class="tx-amount" :class="tx?.dir">
          {{ amountSign + ' ' + tx?.amount?.amount }} <SpDenom :denom="tx.amount.denom" />
        </span>
        <div class="tx-denom">
          {{ addrDesc + ' ' + shortAddr }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { TxForUI } from '../../composables/useTxs'
import SpDenom from '../SpDenom'

enum DIR_DESC {
  self = 'Self',
  in = 'Receive',
  out = 'Send'
}

enum ADDR_DESC {
  self = 'self',
  in = 'from',
  out = 'to'
}

enum AMOUNT_SIGN {
  self = '',
  in = '+',
  out = '-'
}

export default defineComponent({
  name: 'SpTxList',

  props: {
    tx: {
      type: Object as PropType<TxForUI>,
      required: true
    }
  },

  components: { SpDenom },

  setup(props) {
    // computed
    let dirDescription = computed<string>(() => DIR_DESC[props.tx.dir])
    let addrDesc = computed<string>(() => ADDR_DESC[props.tx.dir])
    let addr = computed<string>(() =>
      props.tx.dir === 'in' ? props.tx.sender : props.tx.receiver
    )
    let shortAddr = computed<string>(
      () => addr.value.substring(0, 10) + '...' + addr.value.slice(-4)
    )
    let txDate = computed<string>(() => {
      let date = new Date(props.tx.timestamp)
      return date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      });
    })
    let amountSign = computed<string>(() => AMOUNT_SIGN[props.tx.dir])

    return {
      //computed
      addrDesc,
      shortAddr,
      dirDescription,
      amountSign,
      txDate
    }
  }
})
</script>

<style scoped lang="scss">
.tx-row {
  background: #fff;
  margin-bottom: 28px;
  position: relative;

  &:after {
    content: '';
    display: none;
    width: calc(100% + 32px);
    height: 60px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    position: absolute;
    top: -10px;
    left: -16px;
  }

  &:hover {
    &:after {
      display: block;
    }
  }
}

.tx-container {
  position: relative;
  display: flex;
  align-items: center;

}

.tx-meta {
  /* Body/S */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}
.tx-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.tx-direction {
  /* Label/S */

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  /* light/text */

  color: #000000;
}

.tx-payload {
  text-align: right;
  .tx-amount {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
}

.tx-amount {
  /* Label/S */

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  text-align: right;

  /* light/text */

  color: #000000;
}

.tx-denom {
  /* Body/S */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 153.8%;
  /* identical to box height, or 20px */

  text-align: right;

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

.tx-icon {
  width: 32px;
  height: 32px;
  left: 1px;
  top: 14px;

  /* light/fg */

  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.tx-icon.in {
  transform: rotate(180deg);
}

.tx-amount.in {
  color: #008223;
}
</style>
