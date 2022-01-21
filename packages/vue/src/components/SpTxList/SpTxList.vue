<template>
  <div>
    total sent {{ sentTxsPager.page.value.length }}<br />
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

    total received {{ receivedTxsPager.page.value.length }}<br />

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

    let { receivedTxsPager, sentTxsPager } = await useTxs($s)

    return {
      receivedTxsPager,
      sentTxsPager
    }
  }
})
</script>

<style lang="scss">
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
