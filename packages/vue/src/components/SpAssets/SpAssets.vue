<template>
  <section>
    <header class="assets-header">
      <h2 class="title">Assets</h2>
    </header>
    <table class="assets-table">
      <tbody>
        <tr v-for="b in balances" class="assets-table__row">
          <td class="assets-table__denom">
            <div class="sp-denom-marker">
              {{ b.amount.denom.charAt(0) }}
            </div>
            <div class="sp-denom-name">
              {{ b.amount.denom }}
            </div>
            <div class="sp-denom-ibc-path" v-if="b.path">
              {{ b.path }}
            </div>
          </td>
          <td class="assets-table__amount">
            {{ new Intl.NumberFormat('en-GB').format(Number(b.amount.amount)) }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { useAssets } from '../../composables'

export default defineComponent({
  name: 'SpAssets',

  setup() {
    // store
    let $s = useStore()

    // composables
    let { balances } = useAssets({ $s })

    return { balances }
  }
})
</script>

<style lang="scss">
.assets-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.assets-table {
  width: 100%;

  &__denom {
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    vertical-align: middle;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  &__amount {
    box-sizing: border-box;
    display: table-cell;
    padding-bottom: 20px;
    padding-top: 20px;

    font-family: Inter, serif;
    font-size: 16px;
    letter-spacing: -0.112px;
    line-height: 21px;
    tab-size: 4;
    text-align: right;
    text-indent: 0;
    vertical-align: middle;
    font-weight: 700;
  }
}

.sp-denom-name {
  display: inline-block;
  font-family: Inter, serif;
  font-size: 16px;
  letter-spacing: -0.112px;
  line-height: 21px;
  tab-size: 4;
  text-align: right;
  text-indent: 0;
  vertical-align: middle;
  font-weight: 600;
}

.sp-denom-marker {
  display: inline-flex;
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-right: 0.8rem;
  background: radial-gradient(
    83.33% 83.33% at 16.67% 16.67%,
    #f5f5f5 0%,
    #d7d7d7 42.19%,
    #fdfdfd 100%
  );
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.62);
  border-radius: 24px;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  /* or 20px */

  align-items: center;
  justify-content: center;
  letter-spacing: -0.007em;
}

.title {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 127%;
  /* identical to box height, or 36px */

  letter-spacing: -0.016em;
  font-feature-settings: 'zero';

  color: #000000;
}
</style>
