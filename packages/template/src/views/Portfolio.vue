<template>
  <div>
    <div style="margin-top: 10px; width: 400px; padding: 20px; float: right">
      <SpAssets v-if="address" :address="address" />
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
