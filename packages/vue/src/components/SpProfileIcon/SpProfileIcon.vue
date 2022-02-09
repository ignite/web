<template>
  <div class="avatar" v-html="getAvatar()" />
</template>

<script>
import { defineComponent } from 'vue'

import { MD5 } from 'crypto-js'
import avatar from 'gradient-avatar'

export default defineComponent({
  name: 'SpProfileIcon',

  props: {
    address: {
      type: String,
      default: 'Demo Account'
    }
  },

  setup(props) {
    const getAvatar = () => {
      return avatar(MD5(props.address) + '', 64)
    }

    return {
      getAvatar
    }
  }
})
</script>

<style>
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.avatar > svg {
  width: 32px;
  height: 32px;
}
</style>
