<template>
  <Suspense v-if="address">
    <template #default>
      <SpGetTokenTransferList />
    </template>
    <template #fallback>
      <div class="tx-list">
        <div class="title">Transactions</div>
        <div v-for="n in 4" :key="n" class="loading__row">
          <div class="loading__col">
            <span class="loading__avatar"></span>
            <span class="loading__denom"></span>
          </div>

          <div class="loading__col loading__col--justify-end">
            <span class="loading__amount"></span>
          </div>
        </div>
      </div>
    </template>
  </Suspense>
  <div v-else class="tx-list">
    <div class="title">Transactions</div>
    <div class="empty">Transaction history is empty</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { useAddress } from '../../composables'
import SpGetTokenTransferList from '../SpGetTokenTransferList'

export default defineComponent({
  name: 'SpTokenTransferList',

  components: { SpGetTokenTransferList },

  setup() {
    let $s = useStore()

    // composables
    let { address } = useAddress({ $s })

    return { address }
  }
})
</script>

<style lang="scss" scoped>
$base-color: rgba(0, 0, 0, 0.03);
$animation-duration: 1.6s;
$shine-color: rgba(0, 0, 0, 0.06);
$avatar-offset: 32 + 16;

.title {
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 127%;
  /* identical to box height, or 36px */
  letter-spacing: -0.02em;
  font-feature-settings: 'zero';
  color: #000000;
  margin-bottom: 32px;
}

.loading {
  &__row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 29px;
  }

  &__col {
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    display: flex;
    align-items: center;

    &--justify-center {
      justify-content: center;
    }

    &--justify-end {
      justify-content: end;
    }
  }

  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 24px;
    display: inline-flex;

    background: linear-gradient(
      90deg,
      $base-color 0px,
      $shine-color 40px,
      $base-color 80px
    );
    background-size: 600px;
    animation: shine-avatar $animation-duration infinite linear;
  }

  &__denom {
    width: 96px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(
      90deg,
      $base-color 0px,
      $shine-color 40px,
      $base-color 80px
    );
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear;
  }

  &__amount {
    width: 96px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(
      90deg,
      $base-color 0px,
      $shine-color 40px,
      $base-color 80px
    );
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear;
  }

  &__ibc {
    width: 64px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(
      90deg,
      $base-color 0px,
      $shine-color 40px,
      $base-color 80px
    );
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear;
  }
}

.empty {
  /* Body/M */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* light/muted */

  color: rgba(0, 0, 0, 0.667);
}

@keyframes shine-avatar {
  0% {
    background-position: -100px + $avatar-offset;
  }
  40%,
  100% {
    background-position: 140px + $avatar-offset;
  }
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 140px;
  }
}
</style>
