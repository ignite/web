<template>
  <div class="row" v-if="address">
    <div class="col">
      <SpAssets />
    </div>
    <div class="col">
      <SpTx />
    </div>
  </div>
  <div class="row" v-if="address">
    <div class="col">
      <Suspense>
        <template #default>
          <SpTxList />
        </template>
        <template #fallback> loading </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { SpTx, SpAssets, SpTxList } from '@starport/vue'

export default {
  name: 'Portfolio',

  components: { SpTx, SpAssets, SpTxList },

  setup() {
    // store
    let $s = useStore()

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex-grow: 1;
  padding: 20px;
}
</style>
