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
          @click="visibleModal = 'create-post'"
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
            <SpDropdown>
              <template v-slot:button>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="15" cy="20" r="1.5" fill="black"/>
                  <circle cx="20" cy="20" r="1.5" fill="black"/>
                  <circle cx="25" cy="20" r="1.5" fill="black"/>
                </svg>
              </template>
              <template v-slot:dropdown>
                <div style="width: 160px;">
                  <div class="dropdown-option" @click="visibleModal = 'edit-post'">
                    Edit
                  </div>
                  <div class="dropdown-option" style="color: #D80228;" @click="visibleModal = 'delete-post'">
                    Delete
                  </div>
                </div>
              </template>
            </SpDropdown>
          </div>
        </div>
        <div v-if="posts.length === 0" style="text-align: center">
          <SpSpacer size="md" />
          <SpTypography size="md">
            No post items
          </SpTypography>
          <SpTypography size="sm" feedback="link">
            Create your first post
          </SpTypography>
        </div>
      </div>
    </div>

    <SpModal
      :visible="visibleModal === 'create-post'"
      title="Create post"
      :closeIcon="true"
      :submitButton="true"
      :cancelButton="true"
      @close="visibleModal = ''"
      @submit="visibleModal = ''"
      style="text-align: center"
    >
      <template v-slot:body>
        <SpSpacer size="sm" />
        <div>
          <label for="ptitle" class="sp-label">Title</label>
          <input placeholder="Enter title" type="text" id="ptitle" name="ptitle" class="sp-input">
        </div>
        <SpSpacer size="xs" />
        <div>
          <label for="pdescription" class="sp-label">Description</label>
          <input placeholder="Enter description" type="text" id="pdescription" name="pdescription" class="sp-input">
        </div>
        <SpSpacer size="xs" />
      </template>
    </SpModal>

    <SpModal
      :visible="visibleModal === 'edit-post'"
      title="Edit post"
      :closeIcon="true"
      :submitButton="true"
      :cancelButton="true"
      @close="visibleModal = ''"
      @submit="visibleModal = ''"
      style="text-align: center"
    >
      <template v-slot:body>
        <SpSpacer size="sm" />
        <div>
          <label for="ptitle" class="sp-label">Title</label>
          <input placeholder="Enter title" type="text" id="ptitle" name="ptitle" class="sp-input">
        </div>
        <SpSpacer size="xs" />
        <div>
          <label for="pdescription" class="sp-label">Description</label>
          <input placeholder="Enter description" type="text" id="pdescription" name="pdescription" class="sp-input">
        </div>
        <SpSpacer size="xs" />
      </template>
    </SpModal>

    <SpModal
      :visible="visibleModal === 'delete-post'"
      :closeIcon="true"
      @close="visibleModal = ''"
      @submit="visibleModal = ''"
      style="text-align: center"
    >
      <template v-slot:header>
        <SpSpacer size="sm" />
        <div style="text-align: center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H10H42" stroke="#D80228" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12V8C16 6.93913 16.4214 5.92172 17.1716 5.17157C17.9217 4.42143 18.9391 4 20 4H28C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V12M38 12V40C38 41.0609 37.5786 42.0783 36.8284 42.8284C36.0783 43.5786 35.0609 44 34 44H14C12.9391 44 11.9217 43.5786 11.1716 42.8284C10.4214 42.0783 10 41.0609 10 40V12H38Z" stroke="#D80228" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22V34" stroke="#D80228" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 22V34" stroke="#D80228" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <SpSpacer size="xs" />
        <SpTypography size="md" modifier="highlight" style="font-weight: 700">
          Delete this post?
        </SpTypography>
      </template>
      <template v-slot:body>
        <SpSpacer size="sm" />
        <SpTypography size="md">
          This item will be deleted.
        </SpTypography>
        <SpTypography size="md">
          You can’t undo this action.
        </SpTypography>
        <SpSpacer size="md" />
        <div style="display: flex; gap: 10px; justify-content: center">
          <SpButton
            type="secondary"
            @click="visibleModal = ''"
            style="width: 40%;"
          >
            Cancel
          </SpButton>
          <SpButton
            type="primary"
            @click="visibleModal = ''"
            style="width: 40%;"
          >
            Delete
          </SpButton>
        </div>
      </template>
    </SpModal>

  </div>
</template>

<script>
import { SpSpacer, SpTypography, SpButton, SpDropdown, SpModal } from '@starport/vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'Data',
  components: {
    SpSpacer,
    SpTypography,
    SpButton,
    SpDropdown,
    SpModal
  },

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
    let visibleModal = ref('')

    // computed
    let address = computed(() => $s.getters['common/wallet/address'])

    return {
      address,
      visibleModal,
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

.dropdown-option {
  padding: 1rem 1.4rem;
}

.sp-label {
  display: block;
  text-align: left;
  width: 100%;
  margin: 0 4px;
}
.sp-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin: 4px 0px;
}
</style>