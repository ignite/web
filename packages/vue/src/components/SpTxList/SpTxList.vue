<template>
  <div class="tx-list">
    <div class="title">Transactions</div>

    <div v-if="newTxs" @click="loadNewItems" class="load-more" role="button">
      {{ showMoreText }}
    </div>

    <div class="list" v-if="list.length > 0">
      <SpTxListItem v-for="i in list" :key="i.hash" :tx="i" />
    </div>
    <div v-else class="empty">Transaction history is empty</div>

    <div
      v-if="leftToShowMore"
      @click="showMoreItems"
      class="show-more"
      role="button"
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

import SpTxListItem from '../SpTxListItem'

export interface State {
  listSize: number
  listMaxSize: number
}

export let initialState: State = {
  listSize: 10,
  listMaxSize: 15
}

export default defineComponent({
  name: 'SpTxList',

  components: { SpTxListItem },

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
    let list = computed<TxForUI[]>(() =>
      pager.value.page.value.map(normalize).slice(0, state.listSize)
    )
    let leftToShowMore = computed<boolean>(
      () =>
        state.listSize < state.listMaxSize &&
        pager.value.page.value.length > state.listSize
    )
    let showMoreText = computed<string>(
      () => `${newTxs.value} new ${newTxs.value > 1 ? 'items' : 'item'}`
    )

    // methods
    let loadNewItems = () => {
      pager.value.load()
    }
    let showMoreItems = () => {
      state.listSize = state.listMaxSize
    }

    return {
      //state
      newTxs,
      // computed
      list,
      leftToShowMore,
      showMoreText,
      /// methods
      loadNewItems,
      showMoreItems
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
}
.tx-list {
  position: relative;
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
  top: 0;
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
