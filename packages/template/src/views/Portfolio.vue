<template>
  <div class="container d-flex" v-if="address">
    <div class="col">
      <SpAssets :address="address" />
    </div>
    <div class="col">
      <SpTx :fromAddress="address" />
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
.d-flex {
  display: flex;
}

@media (max-width: 900px) {
  .d-flex {
    flex-direction: column;
  }
}

.col {
  flex-grow: 1;
  padding: 20px;
}
</style>
