<template>
  <div class="page-background">
    <div class="container">

      <SpSpacer size="md" />

      <div style="display: flex; justify-content: space-between">
        <SpTypography
          modifier="highlight"
          size="md"
          style="font-weight: 700"
        >
          Post items
        </SpTypography>
        <SpButton
          aria-label="Create post"
          type="primary"
        >
          Create post
        </SpButton>
      </div>

      <SpSpacer size="sm" />

      <div style="max-width: 600px;">
        <div
          :key="post.id"
          v-for="post in posts"
          style="display: flex; justify-content: space-between; gap: 14px"
        >
          <div style="width: 50px">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8C0 3.58172 3.58172 0 8 0H38C42.4183 0 46 3.58172 46 8V38C46 42.4183 42.4183 46 38 46H8C3.58172 46 0 42.4183 0 38V8Z" fill="black" fill-opacity="0.03"/>
              <path d="M24.3334 16.3335H19.0001C18.6465 16.3335 18.3073 16.474 18.0573 16.724C17.8072 16.9741 17.6667 17.3132 17.6667 17.6668V28.3335C17.6667 28.6871 17.8072 29.0263 18.0573 29.2763C18.3073 29.5264 18.6465 29.6668 19.0001 29.6668H27.0001C27.3537 29.6668 27.6928 29.5264 27.9429 29.2763C28.1929 29.0263 28.3334 28.6871 28.3334 28.3335V20.3335L24.3334 16.3335Z" stroke="black" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.3333 16.3335V20.3335H28.3333" stroke="black" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.6666 23.6665H20.3333" stroke="black" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.6666 26.3335H20.3333" stroke="black" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.6666 21H20.9999H20.3333" stroke="black" stroke-opacity="0.64" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div style="width: 100%">
            <div class="item-title">Title</div>
            <div class="item-value">{{ post.title }}</div>
            <SpSpacer size="xs" />
            <div class="item-title">Description</div>
            <div class="item-value">{{ post.description }}</div>
            <SpSpacer size="xs" />
            <div class="item-title">by {{ post.author }}</div>
            <SpSpacer size="md" />
          </div>
          <div style="width: 20px">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="20" r="1.5" fill="black"/>
              <circle cx="20" cy="20" r="1.5" fill="black"/>
              <circle cx="25" cy="20" r="1.5" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpSpacer, SpTypography, SpButton } from '@starport/vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Data',
  components: { SpSpacer, SpTypography, SpButton },

  setup() {
    // store
    let $s = useStore()
    const posts = [
      {
        id: 0,
        title: 'Relay nodes',
        description: 'Therefore, relay nodes require significantly more power and are only',
        author: 'cosmos1p05...94029y'
      },
      {
        id: 1,
        title: 'Relay nodes',
        description: 'Therefore, relay nodes require significantly more power and are only',
        author: 'cosmos1p05...94029y'
      },
      {
        id: 2,
        title: 'Relay nodes',
        description: 'Therefore, relay nodes require significantly more power and are only',
        author: 'cosmos1p05...94029y'
      },
    ]

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address,
      posts
    }
  }
}
</script>

<style scoped lang="scss">
.page-background {
  background: white;
}

.item-title {
  font-size: 13px;
  line-height: 153.8%;
  color: rgba(0, 0, 0, 0.667);
}

.item-value {
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}
</style>