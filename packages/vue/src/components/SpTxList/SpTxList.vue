<template>
  <div>
    <div>
      <span>total {{ sentTxsPager.total.value }} </span>
      <span>currentPage {{ sentTxsPager.currentPage.value }}</span>
      <span>page size {{ sentTxsPager.page.value.length }}</span>
    </div>
    <button
      @click="sentTxsPager.back"
      :disabled="!sentTxsPager.hasBackPage.value"
    >
      backSentPage
    </button>
    <button
      @click="sentTxsPager.next"
      :disabled="!sentTxsPager.hasNextPage.value"
    >
      nextSentPage
    </button>

    <div style="display: flex; flex-wrap: wrap">
      <div v-for="i in sentTxsPager.page.value" class="tx-pill out">
        {{ i.signatures[0].substr(0, 4) }}
      </div>
    </div>

    <div>
      <span>total {{ receivedTxsPager.total.value }} </span>
      <span>currentPage {{ receivedTxsPager.currentPage.value }}</span>
      <span>page size {{ receivedTxsPager.page.value.length }}</span>
    </div>

    <button
      @click="receivedTxsPager.back"
      :disabled="!receivedTxsPager.hasBackPage.value"
    >
      backReceivedPage
    </button>
    <button
      @click="receivedTxsPager.next"
      :disabled="!receivedTxsPager.hasNextPage.value"
    >
      nextReceivedPage
    </button>

    <div style="display: flex; flex-wrap: wrap">
      <div v-for="i in receivedTxsPager.page.value" class="tx-pill in">
        {{ i.signatures[0].substr(0, 4) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'

import { useTxs } from '../../composables'

export default defineComponent({
  name: 'SpTxList',

  props: {
    address: {
      type: String as PropType<string>
    }
  },

  async setup() {
    // store
    let $s = useStore()

    let { receivedTxsPager, sentTxsPager } = await useTxs({
      $s,
      opts: { order: 'desc', realTime: true }
    })

    return {
      receivedTxsPager,
      sentTxsPager
    }
  }
})
</script>

<style scoped lang="scss">
.tx-pill {
  font-size: 18px;
  padding: 10px;
  margin: 4px;
  background: #ccc;
  border-radius: 20px;
}

.tx-pill.out {
  background: red;
}

.tx-pill.in {
  background: green;
}
</style>
