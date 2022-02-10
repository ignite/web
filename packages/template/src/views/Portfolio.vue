<template>
  <div v-if="address" class="container">
    <div class='row'>
      <div class="col-md-6">
        <SpAssets />

        <Suspense>
          <template #default>
            <SpTxList />
          </template>
          <template #fallback> loading </template>
        </Suspense>
      </div>
      <div class="col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-2 d-none d-md-block">
        <SpTx />
      </div>
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
