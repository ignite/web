<template>
  <section>
    <header class='assets-header'>
      <h2 class='title'>Assets</h2>
    </header>
    <table class='assets-table'>
      <tbody>
      <tr v-for='balance in balances' :key='balance' class='assets-table__row'>
        <td class='assets-table__denom'>
          <div class="sp-denom-marker">
            {{balance.denom.charAt(0).toUpperCase()}}
          </div>
          <div class='sp-denom-name'>
            {{ balance.denom.toUpperCase() }}
          </div>
        </td>
        <td class='assets-table__amount'>
          {{ new Intl.NumberFormat('en-GB').format(balance.amount) }}
        </td>
      </tr>
      </tbody>
    </table>

  </section>
</template>

<script lang="ts">
/**
 * SpAssets Component
 *
 * This component displays the current account balance.
 */

import { computed, defineComponent, onMounted, PropType } from 'vue'
import { useStore } from "vuex"

export default defineComponent({
  name: 'SpAssets',
  props: {
    address: {
      type: String as PropType<string>
    }
  },
  setup(props) {
    // Access store via useStore hook.
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
        params: { address: props.address },
        options: { all: true, subscribe: true },
      })
    })

    // computed
    let balances = computed(() => {
      return (
        store.getters['cosmos.bank.v1beta1/getAllBalances']({
          params: { address: props.address }
        })?.balances ?? []
      )
    })

    return {
      balances
    }
  }

})
</script>

<style lang='scss'>
.assets-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.assets-table {
  width: 100%;

  &__denom {
    border-top-left-radius: .75rem;
    border-bottom-left-radius: .75rem;
    vertical-align: middle;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  &__amount {
    box-sizing: border-box;
    display: table-cell;
    padding-bottom: 20px;
    padding-top: 20px;

    font-family: Inter,serif;
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
  font-family: Inter,serif;
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
  background: radial-gradient(83.33% 83.33% at 16.67% 16.67%, #F5F5F5 0%, #D7D7D7 42.19%, #FDFDFD 100%);
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
  font-family: Inter,serif;
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