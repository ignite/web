import { computed } from 'vue'
import { useStore } from 'vuex'

type Options = {
  requiredModules: Array<string>
}

export default function useModule(options: Options) {
  const $s = useStore()

  const loaded = computed(() => options.requiredModules.every((m) => $s.hasModule(m)))

  return {
    loaded
  }
}
