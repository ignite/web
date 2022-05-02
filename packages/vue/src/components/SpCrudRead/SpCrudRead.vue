<template>
  <div>
    <div v-if="items" style="max-width: 600px">
      <div
        v-for="item in items"
        :key="item.id"
        style="
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 3rem;
        "
      >
        <div style="width: 50px">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H38C42.4183 0 46 3.58172 46 8V38C46 42.4183 42.4183 46 38 46H8C3.58172 46 0 42.4183 0 38V8Z"
              fill="black"
              fill-opacity="0.03"
            />
            <path
              d="M24.3334 16.3335H19.0001C18.6465 16.3335 18.3073 16.474 18.0573 16.724C17.8072 16.9741 17.6667 17.3132 17.6667 17.6668V28.3335C17.6667 28.6871 17.8072 29.0263 18.0573 29.2763C18.3073 29.5264 18.6465 29.6668 19.0001 29.6668H27.0001C27.3537 29.6668 27.6928 29.5264 27.9429 29.2763C28.1929 29.0263 28.3334 28.6871 28.3334 28.3335V20.3335L24.3334 16.3335Z"
              stroke="black"
              stroke-opacity="0.64"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.3333 16.3335V20.3335H28.3333"
              stroke="black"
              stroke-opacity="0.64"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6666 23.6665H20.3333"
              stroke="black"
              stroke-opacity="0.64"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6666 26.3335H20.3333"
              stroke="black"
              stroke-opacity="0.64"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.6666 21H20.9999H20.3333"
              stroke="black"
              stroke-opacity="0.64"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div style="width: 100%">
          <div v-for="f in fields">
            <div class="item-title capitalize-first-letter">
              {{ f }}
            </div>
            <div class="item-value">{{ item[f as string] }}</div>
            <SpSpacer size="xsm" />
          </div>
        </div>
        <div style="width: 20px">
          <SpDropdown>
            <template #button>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="20" r="1.5" fill="black" />
                <circle cx="20" cy="20" r="1.5" fill="black" />
                <circle cx="25" cy="20" r="1.5" fill="black" />
              </svg>
            </template>
            <template #dropdown>
              <div style="width: 160px">
                <div class="dropdown-option" @click="$emit('editItem', item)">
                  Edit
                </div>
                <div
                  class="dropdown-option"
                  style="color: #d80228"
                  @click="$emit('deleteItem', item)"
                >
                  Delete
                </div>
              </div>
            </template>
          </SpDropdown>
        </div>
      </div>
      <div v-if="(items || []).length === 0">
        <SpSpacer size="md" />
        <SpTypography size="md" class="empty">No items</SpTypography>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue'

import { useAddress } from '../../composables'
import { useGaia } from 'cosmos-gaia-vue-client'
import SpButton from '../SpButton'
import SpDropdown from '../SpDropdown'
import SpModal from '../SpModal'
import SpSpacer from '../SpSpacer'
import SpTypography from '../SpTypography'

export default defineComponent({
  name: 'SpCrudRead',

  components: {
    SpSpacer,
    SpTypography,
    SpButton,
    SpDropdown,
    SpModal
  },

  props: {
    storeName: {
      type: String,
      required: true
    },

    itemName: {
      type: String,
      required: true
    },

    commandName: {
      type: String,
      required: true
    },

    fields: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    // gaia
    let { gaia } = useGaia()

    // composables
    let { address, shortAddress } = useAddress()

    // state
    let storeNameCamelCased = props.storeName
      .charAt(0)
      .toUpperCase()
      .concat(props.storeName.slice(1))
      .split('.')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
    let m = gaia[storeNameCamelCased].value
    let items = ref([])

    // lh
    onBeforeMount(async () => {
      items.value = (await m[props.commandName]())?.data[props.itemName]
    })

    return {
      address,
      shortAddress,
      items
    }
  }
})
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

.dropdown-option:not(:last-child) {
  padding: 0 0 16px 0;
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

.capitalize-first-letter:first-letter {
  text-transform: uppercase;
}

.empty {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.667);
}
</style>
