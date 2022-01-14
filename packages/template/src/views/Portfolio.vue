<template>
  <div class="row">
    <div class="col">
      <SpAssets v-if="address" :address="address" />
    </div>
    <div class="col">
      <SpTx v-if="address" :fromAddress="address" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { SpTx, SpAssets } from '@starport/vue'

export default {
  name: 'Portfolio',

  components: { SpTx, SpAssets },

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
