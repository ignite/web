<template>
  <div class="tx-row">
    <div class="tx-container">
      <div class="tx-icon" :class="tx?.dir">
        <svg
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
      </div>

      <div style="width: 16px; height: 100%" />

      <div class="tx-info">
        <div class="tx-direction">
          {{ dirDescription }}
        </div>
        <div class="tx-meta">
          {{ txDate }}
        </div>
      </div>
      <div class="tx-payload">
        <template v-if="tx.amount.length">
          <span
            v-for="(a, index) in tx.amount"
            :key="`${a.amount}-${a.denom}-${index}`"
            class="tx-amount"
            :class="tx?.dir"
          >
            {{ amountSign + ' ' + a.amount }}
            <SpDenom :denom="a.denom" />
          </span>
        </template>
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
  name: 'SpTokenTransferListItem',

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
      })
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
