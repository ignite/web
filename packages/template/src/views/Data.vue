<template>
  <SpCrud store-name="foo.bar.bar" item-name="Product" />
</template>

<script>
import { SpCrud } from '@starport/vue'

export default {
  name: 'Data',

  components: { SpCrud }
}
</script>
