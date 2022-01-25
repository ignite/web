<template>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <div class="sp-welcome__header">
        <h2>Welcome to Starport</h2>
      </div>
      <p>
        Starport is a powerful CLI tool that offers everything you need to
        build, test, and launch your own sovereign blockchain.<br />
        This Vue app template includes wallet integration, token send
        functionality, IBC relayer, and more.<br />
        Use this template to build UI for your own blockchain.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpWelcome'
})
</script>
