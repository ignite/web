import { Ignite } from 'ignite-sdk'
import { computed, ComputedRef, inject, Ref } from 'vue'

type Response = {
  $ignt: ComputedRef<Ignite | undefined>
}

export default function (): Response {
  let i = inject<Ref<Ignite>>('ignt')
  let c = computed<Ignite | undefined>(() => i?.value)

  return {
    $ignt: c
  }
}
