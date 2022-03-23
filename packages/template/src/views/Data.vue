<template>
  <!-- Uncomment the following component to add a form for a `modelName` -->
  <SpCrud store-name="a.ee.ee" item-name="Cars" />
</template>

<script>
import SpCrud from '@starport/vue/src/components/SpCrud/SpCrud.vue'
export default {
  name: 'Data',
  components: { SpCrud }
}
</script>
