<template>
  <IconText
    :class="['loader-icon-text', { '-is-loading': !isActive }]"
    :text="text"
    :link="link"
    :iconType="iconType"
    :isIconFirst="true"
  />
</template>

<script>
import IconText from './IconText'

export default {
  components: {
    IconText
  },
  props: {
    text: { type: String, required: true },    
    link: { type: String, default: null },    
    isActive: { type: Boolean, default: true },
    activeIconType: {
      type: String,
      default: 'successDot',
      validator: function(value) {
        return ['successDot', 'check'].indexOf(value) !== -1
      }               
    }
  },
  computed: {
    iconType() {
      return this.isActive ? this.activeIconType : 'spinner'
    }
  }
}
</script>

<style scoped>

.loader-icon-text.-is-loading {
  opacity: .45;
}

</style>