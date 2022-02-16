<template>
  <div class="sp-system-bar warning" v-if="acc?.accountNumber === 0">
    <span class="icon">
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1442_621)">
          <path
            d="M8.5 15.5C12.6421 15.5 16 12.1421 16 8C16 3.85786 12.6421 0.5 8.5 0.5C4.35786 0.5 1 3.85786 1 8C1 12.1421 4.35786 15.5 8.5 15.5Z"
            stroke="black"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.19727 13.3028L13.8033 2.69678"
            stroke="black"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1442_621">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
    <div class="text">
      <div class="msg bold">
        Account number must be 1 or higher to send transactions.&nbsp;
      </div>
      <div class="msg">
        Account number 0 is unable to send transactions as identified in&nbsp;<a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/chainapsis/keplr-wallet/issues/217"
          class="msg bold"
          >this issue</a
        >.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { useAccount } from '../../composables'

export default defineComponent({
  name: 'SpSystemBar',

  async setup() {
    // store
    let $s = useStore()

    // composable
    let { acc } = await useAccount({ $s })

    return { acc }
  }
})
</script>

<style scoped lang="scss">
.sp-system-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}
.warning {
  background: #fc8c0b;
}

.text {
  display: flex;
  flex-wrap: wrap;
}
.icon {
  display: flex;
  margin-right: 12px;
}

.msg {
  color: #000000;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 153.8%;
}

.bold {
  font-weight: 600;
}
</style>
