<template>
  <div class="tx-list">
    <div
      v-if="newTxs > 0"
      @click="loadNewItems"
      class="load-more"
      role="button"
    >
      {{ newTxs + 'new' + (newTxs > 1 ? 'items' : 'item') }}
    </div>

    <div class="list">
      <SpTxListItem v-for="i in paginated" :key="i.hash" :tx="i" />
    </div>

    <div
      v-if="leftToShowMore > 0"
      @click="showMoreItems"
      class="show-more"
      role="button"
    >
      show more {{ leftToShowMore }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  PropType,
  reactive,
  Ref,
  ref,
  watch
} from 'vue'
import { useStore } from 'vuex'
import { usePagination } from 'vue-composable'

import { useTxs } from '../../composables'
import { TxForUI } from '../../composables/useTxs'

import SpTxListItem from '../SpTxListItem'

export default defineComponent({
  name: 'SpTxList',

  props: {
    address: {
      type: String as PropType<string>
    }
  },

  components: { SpTxListItem },

  async setup() {
    // store
    let $s = useStore()

    // state
    let txsDisplayed: Ref<number> = ref(10) // increase pageSize on user click
    let { pager, normalize, newTxs } = await useTxs({
      $s,
      opts: { order: 'desc', realTime: true }
    })

    // computed
    let page: ComputedRef<TxForUI[]> = computed(() =>
      pager.value.page.value.map(normalize).sort((a, b) => b.height - a.height)
    )

    // state
    let pagResul = reactive(
      usePagination({
        currentPage: 1,
        pageSize: txsDisplayed.value,
        total: computed(() => page.value.length)
      })
    )
    let { currentPage, lastPage, offset, pageSize, first } = pagResul

    // computed
    let paginated: ComputedRef<TxForUI[]> = computed(() =>
      page.value.slice(offset, offset + txsDisplayed.value)
    )
    let leftToShowMore: ComputedRef<number> = computed(() => {
      let leftTotal = page.value.length - paginated.value.length
      return leftTotal > 10 ? 10 : leftTotal
    })

    //watch
    watch(
      () => txsDisplayed.value,
      async () => {
        pagResul = reactive(
          usePagination({
            currentPage: 1,
            pageSize: txsDisplayed.value,
            total: computed(() => page.value.length)
          })
        )
      }
    )

    // methods
    let loadNewItems = () => {
      pager.value.load()
      first()
    }
    let showMoreItems = () => {
      txsDisplayed.value += leftToShowMore.value
    }

    return {
      newTxs,
      paginated,
      currentPage,
      lastPage,
      offset,
      pageSize,
      loadNewItems,
      showMoreItems,
      leftToShowMore
    }
  }
})
</script>

<style scoped lang="scss">
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
