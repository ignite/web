<template>
  <div class="tx-list">
    <div class="title">Transactions</div>

    <div v-if='newTxs' class="load-more" role="button" @click="loadNewItems">
      <template v-if='state.isNewTxLoading'>
        <SpSpinner size='16'></SpSpinner>
      </template>
      <template v-else>
        {{ showMoreText }}
      </template>
    </div>
    <div v-if="Object.keys(txByMonth).length > 0" class="list">
      <div v-for="(txs, month, index) in txByMonth" :key="`${index}`">
        <h3 class='tx-list__subheading'>{{month.replace(/[0-9]/g, '')}}</h3>
        <SpTxListItem v-for='(tx, i) in txs' :key='`${tx.hash}-${tx.timestamp}-${i}`' :tx="tx" />
      </div>
    </div>
    <div v-else class="empty">Transaction history is empty</div>

    <div
      v-if="leftToShowMore"
      class="show-more"
      role="button"
      @click="showMoreItems"
    >
      Show more
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

import { useTxs } from '../../composables'
import { TxForUI } from '../../composables/useTxs'
import SpSpinner from '../SpSpinner'
import SpTxListItem from '../SpTxListItem'

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
  name: 'SpTxList',

  components: { SpSpinner, SpTxListItem },

  async setup() {


    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { pager, normalize, newTxs } = await useTxs({
      $s,
      opts: { order: 'desc', realTime: true }
    })

    // computed
    let list = computed<TxForUI[]>(() => {
        return pager.value.page.value
          .map(normalize)
          .slice(0, state.listSize)
          .sort((a, b) => b.height - a.height)
    })
    let txByMonth = computed(() => {
      const groupByYear = groupBy("timestamp");
      return groupByYear(list.value);
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
    let getTxMonth = (timestamp):string =>
      new Date(timestamp).toLocaleString('en-US', {
        year: "numeric",
        month: 'long'
      });
    let groupBy = (key) => (array) =>
      array.reduce((acc, obj) => {
        const property = getTxMonth(obj[key]);
        acc[property] = (acc[property] || []).concat(obj);
        return acc;
      }, {});

    return {
      // state
      newTxs,
      // computed
      list,
      leftToShowMore,
      showMoreText,
      /// methods
      loadNewItems,
      showMoreItems,
      txByMonth,
      getTxMonth,
      state,
    }
  }
})
</script>

<style scoped lang="scss">
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
  margin-bottom: 40px;

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
  flex-direction: column;
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
</style>
