<template>
  <div class="page-background">
    <SpCrud
      :storeName="'cosmonaut.blog.blog'"
      :itemName="'Post'"
    />
  </div>
</template>

<script>
import { SpCrud } from '@starport/vue'

export default {
  name: 'Data',

  components: { SpCrud }
}
</script>

<style scoped lang="scss">
.page-background {
  background: white;
}
</style>