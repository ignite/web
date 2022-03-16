<template>
  <section>
    <header class="assets-header">
      <h2 class="title">Assets</h2>
      <div v-if="balances.assets.length" class="assets-header__search">
        <div class="assets-header__search-content">
          <div class="search-container">
            <span class="search-icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12.5C9.81371 12.5 12.5 9.81371 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 9.81371 3.18629 12.5 6.5 12.5Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5002 14.5002L10.7422 10.7422"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="search"
              autocomplete="off"
              placeholder="Search assets"
              class="input--search"
              @input="resetDisplayLimit"
            />
            <span
              v-if="searchQuery"
              class="clear-icon"
              @click.prevent="resetSearch"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4182 16 8C16 3.5818 12.4183 0 8 0C3.58172 0 0 3.5818 0 8C0 12.4182 3.58172 16 8 16ZM11.5442 4.45588C11.8382 4.74977 11.8382 5.22656 11.5442 5.52068L9.06483 8L11.5442 10.4793C11.8382 10.7734 11.8382 11.2502 11.5442 11.5441C11.2501 11.8382 10.7734 11.8382 10.4793 11.5441L8 9.0648L5.52065 11.5441C5.22662 11.8382 4.74989 11.8382 4.45582 11.5441C4.16179 11.2502 4.16179 10.7734 4.45582 10.4793L6.93517 8L4.45582 5.52068C4.16179 5.22656 4.16179 4.74977 4.45582 4.45588C4.74986 4.16176 5.22659 4.16176 5.52065 4.45588L8 6.9352L10.4793 4.45588C10.7734 4.16176 11.2501 4.16176 11.5442 4.45588Z"
                  fill="black"
                  fill-opacity="0.20"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </header>
    <table class="assets-table">
      <thead v-if="balances.assets.length" class="assets-table__thead">
        <tr>
          <td>Asset</td>
          <td></td>
          <td class="assets-table__align-right">Available balance</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(balance, index) in filteredBalanceList.slice(0, displayLimit)"
          :key="index"
          class="assets-table__row"
        >
          <td class="assets-table__denom">
            <div class="sp-denom-marker">
              <SpDenom :denom="balance.amount.denom" modifier="avatar" />
            </div>
            <div class="sp-denom-name">
              <SpDenom :denom="balance.amount.denom" />
            </div>
          </td>
          <td
            :class="[
              typeof balance.path === 'object'
                ? 'assets-table__channels--object'
                : null,
              'assets-table__channels'
            ]"
          >
            <ul v-if="balance.path">
              <li>Channels</li>
              <li v-for="(channel, $index) in balance.path" :key="$index">
                <div>
                  {{ channel }}
                </div>
              </li>
            </ul>
          </td>
          <td class="assets-table__amount">
            {{ new Intl.NumberFormat('en-GB').format(balance.amount.amount) }}
          </td>
        </tr>
        <tr v-if="noSearchResults" class="assets-table__row">
          <td class="assets-table__row--no-results" colspan="3">
            <h4>No results for '{{ searchQuery }}'</h4>
            <p>Try again with another search</p>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if="address && balances.isLoading">
      <div v-for="n in 2" :key="n" class="loading__row">
        <div class="loading__col">
          <span class="loading__avatar"></span>
          <span class="loading__denom"></span>
        </div>
        <div class="loading__col loading__col--justify-end">
          <span class="loading__ibc"></span>
        </div>
        <div class="loading__col loading__col--justify-end">
          <span class="loading__amount"></span>
        </div>
      </div>
    </template>
    <div
      v-if="!address || (!balances.isLoading && !balances.assets.length)"
      class="no-result-label"
    >
      You have no assets
    </div>
    <div
      v-if="!balances.isLoading && isShowMore"
      class="show-more"
      @click="onShowMore"
    >
      Show more
      <span class="arrow-icon">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.0001 7.4001L0.600098 2.0001L2.0001 0.600098L6.0001 4.6001L10.0001 0.600098L11.4001 2.0001L6.0001 7.4001Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, toRefs } from 'vue'
import { useStore } from 'vuex'

import { useAddress, useAssets } from '../../composables'
import SpDenom from '../SpDenom'

export default defineComponent({
  name: 'SpAssets',
  components: { SpDenom },

  props: {
    displayLimit: {
      type: Number,
      default: 3,
      required: false
    }
  },

  setup(props) {
    // store
    let $s = useStore()

    // state
    const state = ref({
      isLoading: true,
      searchQuery: '',
      balanceList: [],
      displayLimit: props.displayLimit,
      searchInput: ref<null | { focus: () => null }>(null)
    })

    // composables
    let { address } = useAddress({ $s })
    let { balances } = useAssets({ $s, opts: { extractChannels: true } })

    const filteredBalanceList = computed(() => {
      if (!state.value.searchQuery) {
        return balances.value.assets.slice(0, state.value.displayLimit)
      }

      return balances.value.assets.filter((item) =>
        item.amount.denom.toLowerCase().includes(state.value.searchQuery)
      )
    })

    const noSearchResults = computed(() => {
      return (
        !filteredBalanceList.value.length &&
        state.value.searchQuery.length &&
        !balances.value.isLoading
      )
    })

    const isShowMore = computed(() => {
      if (state.value.searchQuery) {
        return filteredBalanceList.value.length > state.value.displayLimit
      }

      return (
        filteredBalanceList.value.length < balances.value.assets.length &&
        !noSearchResults.value
      )
    })

    const onShowMore = () => {
      state.value.displayLimit += state.value.displayLimit
    }

    const resetDisplayLimit = () => {
      state.value.displayLimit = props.displayLimit
    }

    const resetSearch = () => {
      state.value.searchQuery = ''
      nextTick(() => state.value.searchInput?.focus())
    }

    return {
      address,
      balances,
      filteredBalanceList,
      noSearchResults,
      isShowMore,
      onShowMore,
      resetDisplayLimit,
      resetSearch,
      ...toRefs(state.value)
    }
  }
})
</script>

<style lang="scss" scoped>
$base-color: rgba(0, 0, 0, 0.03);
$animation-duration: 1.6s;
$shine-color: rgba(0, 0, 0, 0.06);
$avatar-offset: 32 + 16;

.assets-header {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  > * {
    position: relative;
    width: 100%;

    &:first-child {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }
    &:last-child {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }
  }

  &__search-content {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    position: relative;

    .search-container {
      position: relative;
      margin: 0px -10px -1px 0;

      > input[type='search'] {
        padding: 0 0 0 36px;
        width: 166px;
        height: 50px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: inset 0 0 0 1px rgba(9, 78, 253, 0);
        transition: all 0.2s ease;

        &:focus {
          box-shadow: inset 0 0 0 1px rgba(9, 78, 253, 1);
          color: #000;
          padding: 0 20px 0 37px;
        }

        &::placeholder {
          color: rgba(0, 0, 0, 0.33);
        }

        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
          display: none;
          -webkit-appearance: none;
        }
      }

      .search-icon {
        position: absolute;
        left: 14px;
        top: 18px;
      }

      .clear-icon {
        position: absolute;
        height: 48px;
        right: 13px;
        width: 24px;
        top: 1px;
        display: flex;
        cursor: pointer;
        align-items: center;
        z-index: 456;
        justify-content: center;
        background: #fff;
      }
    }
  }
}

.assets-table {
  width: 100%;

  &__denom {
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    vertical-align: middle;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    width: 35.4%;
  }

  &__amount {
    box-sizing: border-box;
    display: table-cell;
    padding-bottom: 20px;
    padding-top: 20px;

    font-family: Inter, serif;
    font-size: 16px;
    letter-spacing: -0.112px;
    line-height: 21px;
    tab-size: 4;
    text-align: right;
    text-indent: 0;
    vertical-align: middle;
    font-weight: 700;
  }

  &__channels {
    > ul {
      list-style: none;
      display: inline-flex;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.667);
    }

    &--object {
      > ul {
        li {
          display: inline-block;

          div {
            display: inline-block;
          }

          &:first-child {
            margin-right: 4px;
          }

          &:nth-child(n + 3) {
            &:before {
              font-family: sys, serif;
              content: '→';
              display: inline-block;
              margin: 0 5px 0 4px;
            }
          }
        }
      }
    }
  }

  &__thead {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 153.8%;
    color: rgba(0, 0, 0, 0.667);

    td {
      padding-top: 22px;
      padding-bottom: 7px;
    }
  }
  &__align-right {
    text-align: right;
  }
  &__row {
    &--no-results {
      text-align: center;
      padding-top: 32px;
      h4 {
        padding: 0;
        margin: 0;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: -0.007em;
      }
      p {
        padding: 0;
        margin: 4px 0 0 0;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.667);
      }
    }
  }
}

.sp-denom-name {
  display: inline-block;
  font-family: Inter, serif;
  font-size: 16px;
  letter-spacing: -0.112px;
  line-height: 21px;
  tab-size: 4;
  text-align: right;
  text-indent: 0;
  vertical-align: middle;
  font-weight: 600;
}

.sp-denom-marker {
  display: inline-flex;
  vertical-align: middle;
  margin-right: 16px;
  border-radius: 24px;
  text-align: center;
  font-family: Inter, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  /* or 20px */

  align-items: center;
  justify-content: center;
  letter-spacing: -0.007em;
}

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
  margin-top: 0;
}

.input {
  &--search {
    background-image: none;
    border-radius: 4px;
    border: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.33);
    display: inline-block;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
  }
}

.show-more {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 124px;
  height: 36px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  box-shadow: 3px 9px 32px -4px rgba(0, 0, 0, 0.07);
  border-radius: 56px;
  color: #000000;
  font-weight: 500;
  font-size: 13px;
  position: absolute;
  cursor: pointer;
  margin: 0 auto;
}

.no-result-label {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.667);
  margin-top: 22px;
}

section {
  position: relative;
  padding-bottom: 132px;
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

.arrow-icon {
  margin-left: 9px;
}
</style>
