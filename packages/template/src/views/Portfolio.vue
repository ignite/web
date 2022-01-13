<template>
  <div>
    <div style="margin-top: 10px; width: 400px; padding: 20px; float: right">
      <SpTx v-if="address" :fromAddress="address" />
    </div>
  </div>
</template>

<script>
import { SpTx } from '@starport/vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Portfolio',
  components: { SpTx },

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
