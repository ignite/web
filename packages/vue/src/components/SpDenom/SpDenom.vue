<template>
  <span v-if="modifier === 'base'">
    {{ normalizedDenom }}
  </span>
  <span v-else-if="modifier === 'path'">
    {{ normalizedDenom }}
  </span>
  <div v-else-if="modifier === 'avatar'" class="token-avatar">
    {{ normalizedDenom.slice(0, 1) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref,ref } from 'vue'
import { useStore } from 'vuex'

import useDenom from '../../composables/useDenom'

type Modifier = 'avatar' | 'path' | 'base'

export default defineComponent({
  name: 'SpDenom',

  props: {
    denom: {
      type: String as PropType<string>,
      required: true
    },
    modifier: {
      type: String as PropType<Modifier>,
      default: 'base'
    },
    size: {
      type: [String, Number],
      default: 32
    }
  },

  async setup(props) {
    // store
    let $s = useStore()

    const avatarTheme = ref({
      size: props.size + 'px',
    });

    // state
    let normalizedDenom: Ref<string> = ref(props.denom)
    let normalizedPath: Ref<string> = ref('')

    // composables
    let { normalizeDenom } = useDenom({ $s })

    normalizedDenom.value = await normalizeDenom(props.denom)

    return { normalizedDenom, normalizedPath, avatarTheme }
  }
})
</script>

<style lang='scss' scoped>
.token-avatar {
  background: radial-gradient(
    83.33% 83.33% at 16.67% 16.67%,
    #f5f5f5 0%,
    #d7d7d7 42.19%,
    #fdfdfd 100%
  );
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.62);
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: v-bind("avatarTheme.size");
  height: v-bind("avatarTheme.size");

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  /* or 20px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.007em;

  text-transform: uppercase;
}
</style>
