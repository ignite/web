<template>
  <div class="tx-list">
    <div class="title">Transactions</div>
    <div v-if="newTxs" class="load-more" role="button" @click="loadNewItems">
      <template v-if="state.isNewTxLoading">
        <SpSpinner :size="16"></SpSpinner>
      </template>
      <template v-else>
        {{ showMoreText }}
      </template>
    </div>
    <div v-if="!address || Object.keys(txByMonth).length <= 0" class="empty">
      Transaction history is empty
    </div>
    <div v-else-if="Object.keys(txByMonth).length > 0" class="list">
      <div v-for="(txs, month, index) in txByMonth" :key="`${index}`">
        <h3 class="tx-list__subheading" v-text="getMonthGroup(month)"></h3>
        <SpTokenTransferListItem
          v-for="(tx, i) in txs"
          :key="`${tx.hash}-${tx.timestamp}-${i}`"
          :tx="tx"
        />
      </div>
    </div>
    <div
      v-if="leftToShowMore"
      class="show-more"
      role="button"
      @click="showMoreItems"
    >
      Show more
      <span class="arrow-icon">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.0001 7.4001L0.600098 2.0001L2.0001 0.600098L6.0001 4.6001L10.0001 0.600098L11.4001 2.0001L6.0001 7.4001Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

import { useAddress, useTxs } from '../../composables'
import { TxForUI } from '../../composables/useTxs'
import SpSpinner from '../SpSpinner'
import SpTokenTransferListItem from '../SpTokenTransferListItem'

export interface State {
  listSize: number
  listMaxSize: number
  isNewTxLoading: boolean
}

export let initialState: State = {
  listSize: 10,
  listMaxSize: 15,
  isNewTxLoading: false
}

export default defineComponent({
  name: 'SpGetTokenTransferList',

  components: { SpSpinner, SpTokenTransferListItem },

  async setup() {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { pager, normalize, newTxs, filterSupportedTypes } = await useTxs({
      $s,
      opts: { order: 'desc', realTime: true }
    })

    // computed
    let list = computed<TxForUI[]>(() => {
      return pager.value.page.value
        .filter(filterSupportedTypes)
        .map(normalize)
        .slice(0, state.listSize)
        .sort((a, b) => b.height - a.height)
    })
    let txByMonth = computed(() => {
      const groupByYear = groupBy('timestamp')
      return groupByYear(list.value)
    })
    let leftToShowMore = computed<boolean>(
      () =>
        state.listSize < state.listMaxSize &&
        pager.value.page.value.length > state.listSize
    )
    let showMoreText = computed<string>(
      () => `${newTxs.value} new ${newTxs.value > 1 ? 'items' : 'item'}`
    )

    // methods
    let loadNewItems = async () => {
      state.isNewTxLoading = true
      await pager.value.load()
      state.isNewTxLoading = !!newTxs.value
    }
    let showMoreItems = () => {
      state.listSize = state.listMaxSize
    }
    let getTxMonth = (timestamp): string =>
      new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long'
      })
    let groupBy = (key) => (array) =>
      array.reduce((acc, obj) => {
        const property = getTxMonth(obj[key])
        acc[property] = (acc[property] || []).concat(obj)
        return acc
      }, {})
    let getMonthGroup = (month) => {
      const currentYear = new Date().getFullYear()
      const monthYear = Number(month.replace(/\D/g, ''))

      return monthYear < currentYear ? month : month.replace(/[0-9]/g, '')
    }

    return {
      // state
      newTxs,
      // computed
      address,
      list,
      leftToShowMore,
      showMoreText,
      /// methods
      loadNewItems,
      showMoreItems,
      txByMonth,
      getTxMonth,
      getMonthGroup,
      state
    }
  }
})
</script>

<style scoped lang="scss">
$base-color: rgba(0, 0, 0, 0.03);
$animation-duration: 1.6s;
$shine-color: rgba(0, 0, 0, 0.06);
$avatar-offset: 32 + 16;

.empty {
  /* Body/M */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}
.title {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 127%;
  /* identical to box height, or 36px */
  letter-spacing: -0.02em;
  font-feature-settings: 'zero';
  color: #000000;
  margin-bottom: 32px;
}
.tx-list {
  position: relative;
  padding-bottom: 40px;

  &__subheading {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.007em;
    color: #000000;
    margin-bottom: 18px;
  }
}
.list {
  display: flex;
  flex-direction: column;
}
.load-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 124px;
  height: 36px;
  left: 0;
  right: 0;
  top: 68px;
  background: #ffffff;
  box-shadow: 3px 9px 32px -4px rgba(0, 0, 0, 0.07);
  border-radius: 56px;
  color: #000000;
  font-weight: 500;
  font-size: 13px;
  position: absolute;
  cursor: pointer;
  margin: 0 auto;
  z-index: 8;
}
.show-more {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 124px;
  height: 36px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 3px 9px 32px -4px rgba(0, 0, 0, 0.07);
  border-radius: 56px;
  color: #000000;
  font-weight: 500;
  font-size: 13px;
  position: absolute;
  cursor: pointer;
  margin: 0 auto;
}

.arrow-icon {
  margin-left: 9px;
}
</style>
