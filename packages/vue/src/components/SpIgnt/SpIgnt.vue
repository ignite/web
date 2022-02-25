<template>
  <slot />
</template>
<script lang="ts">
import { Ignite } from 'ignite-sdk'
import { computed, defineComponent, provide, ref, watch } from 'vue'
import { useStore } from 'vuex'

import { useAddress, useKeplr } from '../../composables'

export default defineComponent({
  name: 'SpIgnt',

  async setup() {
    // store
    let $s = useStore()

    // state
    let $ignt = ref<Ignite>()

    // composables
    let { address } = useAddress({ $s })

    // computed
    let chainId = computed<string>(() => $s.getters['common/env/chainId'])

    let { getOfflineSigner } = useKeplr({ $s })

    watch(
      () => address.value,
      async () => {
        if (address.value) {
          let signer = getOfflineSigner(chainId.value)

          let i = new Ignite({
            signer,
            address: address.value,
            env: {
              chainID: chainId.value,
              chainName: chainId.value,
              apiURL: 'http://localhost:1317',
              rpcURL: 'http://localhost:26657',
              wsURL: 'ws://localhost:26657/websocket'
            }
          })

          await i.init()

          $ignt.value = i
        }
      },
      { immediate: true }
    )

    provide('ignt', $ignt)
  }
})
</script>
