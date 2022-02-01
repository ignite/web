<template>
  <div class="tx-row">
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
        {{
          addrDesc + ' ' + tx.addr.substring(0, 10) + '...' + tx.addr.slice(-4)
        }}
      </div>
    </div>
    <div class="tx-payload">
      <div class="tx-amount" :class="tx?.dir">
        {{ amountSign + ' ' + tx?.amount?.amount }}
      </div>
      <div class="tx-denom">
        <SpDenom :denom="tx.amount.denom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TxForUI } from '../../composables/useTxs'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'
import SpDenom from '../SpDenom/SpDenom.vue'

enum DIR_DESC {
  self = 'Receive',
  in = 'Receive',
  out = 'Send'
}

enum ADDR_DESC {
  self = 'Receive',
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
    let dirDescription: ComputedRef<string> = computed(
      () => DIR_DESC[props.tx.dir]
    )
    let addrDesc: ComputedRef<string> = computed(() => ADDR_DESC[props.tx.dir])
    let amountSign: ComputedRef<string> = computed(
      () => AMOUNT_SIGN[props.tx.dir]
    )

    return { addrDesc, dirDescription, amountSign }
  }
})
</script>

<style scoped lang="scss">
.tx-row {
  background: #fff;

  padding: 12px;
  display: flex;

  border-radius: 8px;

  margin: 4px 0;
}

.tx-row:hover {
  background: rgba(0, 0, 0, 0.03);
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
  display: flex;
  flex-direction: column;
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
