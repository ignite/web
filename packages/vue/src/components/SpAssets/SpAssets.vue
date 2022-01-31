<template>
  <section>
    <header class="assets-header">
      <h2 class="title">Assets</h2>
      <div v-if='balances.length' class='assets-header__search'>
        <div class='assets-header__search-content'>
          <input v-model="searchQuery" type="search" autocomplete="off" placeholder="Search assets" class="input--search">
        </div>
      </div>
    </header>
    <table class="assets-table">
      <thead v-if='balances.length' class='assets-table__thead'>
        <tr>
          <td>Asset</td>
          <td class='assets-table__align-right'>Available balance</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(balance, index) in filteredBalanceList"
          :key="index"
          class="assets-table__row"
        >
          <td class="assets-table__denom">
            <div class="sp-denom-marker">
              <Suspense>
                <SpDenom :denom="balance.denom" modifier="avatar" size='24' />
              </Suspense>
            </div>
            <div class="sp-denom-name">
              {{ balance.denom.toUpperCase() }}
            </div>
          </td>
          <td class="assets-table__amount">
            {{ new Intl.NumberFormat('en-GB').format(balance.amount) }}
          </td>
        </tr>
        <tr v-if='filteredBalanceList<=0 && searchQuery !== ""' class='assets-table__row'>
          <td class='assets-table__row--no-results' colspan='2'>
            <h4>No results for '{{ searchQuery }}' </h4>
            <p>Try again with another search</p>
          </td>
        </tr>
      </tbody>
    </table>
    <template v-if='uiState.isAssetsLoading'>
      <div v-for='n in 2' :key='n' class='loading__row'>
        <div class='loading__col'>
          <span class='loading__avatar'></span>
          <span class='loading__denom'></span>
        </div>
        <div class='loading__col loading__col--justify-end'>
          <span class='loading__ibc'></span>
        </div>
        <div class='loading__col loading__col--justify-end'>
          <span class='loading__amount'></span>
        </div>
      </div>
    </template>
    <div v-if='!uiState.isAssetsLoading && !balances.length' class='no-result-label'>You have no assets</div>
    <div v-if='isShowMore' class='show-more' @click='showMore()'>
      Show more
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'

import SpDenom from '../SpDenom'

export interface State {
  isAssetsLoading: boolean
}

export let initialState: State = {
  isAssetsLoading: true
}

export default defineComponent({
  name: 'SpAssets',
  components: { SpDenom },

  props: {
    address: {
      type: String as PropType<string>
    },
    resultLimit: {
      type: Number,
      default: 3,
      required: false
    }
  },

  setup(props) {
    // store
    const $s = useStore()

    // state
    let uiState: State = reactive(initialState)

    let filteredArrayLength = 0;
    const state = reactive({
      searchQuery: "",
      displayLimit: props.resultLimit,
      demoDenoms:[
        {
          denom: "AAAA",
          amount: "12312312"
        },
        {
          denom: "BBB",
          amount: "12312312"
        },
        {
          denom: "CCC",
          amount: "12312312"
        },
        {
          denom: "DDD",
          amount: "12312312"
        },
        {
          denom: "EEE",
          amount: "12312312"
        },
        {
          denom: "AAAA2",
          amount: "12312312"
        },
        {
          denom: "BBB2",
          amount: "12312312"
        },
        {
          denom: "CCC2",
          amount: "12312312"
        },
        {
          denom: "DDD2",
          amount: "12312312"
        },
        {
          denom: "EEE2",
          amount: "12312312"
        }
      ]
    })

    // actions
    let queryAllBalances = (opts: any) => {
      return $s.dispatch('cosmos.bank.v1beta1/QueryAllBalances', opts)
    }


    // computed
    let balances = computed(() => {
      return (
        $s.getters['cosmos.bank.v1beta1/getAllBalances']({
          params: { address: props.address }
        })?.balances ?? []
      )
    })

    let isShowMore = computed(() => {
      if (!balances.value.length) {
        return
      }

      if (!state.searchQuery) {
        return filteredBalanceList.value.length < balances.value.concat(state.demoDenoms).length
      } else {
        return filteredBalanceList.value.length < filteredArrayLength
      }
    })

    const filteredBalanceList = computed(() => {
      let searchArray = balances.value.length ? balances.value.concat(state.demoDenoms) : [],
          searchString = state.searchQuery

      if (!searchString) {
        return searchArray.slice(0, state.displayLimit);
      }

      searchString = searchString.trim().toLowerCase()

      searchArray = searchArray.filter((item) => {
        if (item.denom.toLowerCase().includes(searchString)) {
          return item
        }
      })
      filteredArrayLength = searchArray.length

      // Return an array with the filtered data.
      return searchArray.slice(0, state.displayLimit)
    })

    const showMore = () => {
      state.displayLimit += state.displayLimit
    }

    watch(
      () => state.searchQuery,
      (searchQuery, prevSearchQuery) => {
        if (!searchQuery) {
          state.displayLimit = props.resultLimit
        }
      }
    )

    // lh
    onMounted(async () => {
      await queryAllBalances({
        params: { address: props.address},
        query: {"pagination.reverse": false},
        options: { all: true, subscribe: true }
      }).then(() => {
        setTimeout(() => uiState.isAssetsLoading = false, 1500);
      })
    })

    return {
      uiState,
      filteredBalanceList,
      balances,
      showMore,
      isShowMore,
      ...toRefs(state),
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
    justify-content: center;
    height: 100%;
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
  &__thead {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 153.8%;
    color: rgba(0, 0, 0, 0.667);
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
  margin-right: 0.8rem;
  background: radial-gradient(
    83.33% 83.33% at 16.67% 16.67%,
    #f5f5f5 0%,
    #d7d7d7 42.19%,
    #fdfdfd 100%
  );
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.62);
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
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
}

.show-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  width: 124px;
  height: 36px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
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
  padding-bottom: 48px;
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

    background: linear-gradient(90deg, $base-color 0px, $shine-color 40px, $base-color 80px);
    background-size: 600px;
    animation: shine-avatar $animation-duration infinite linear
  }

  &__denom {
    width: 96px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(90deg, $base-color 0px, $shine-color 40px, $base-color 80px);
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear
  }

  &__amount {
    width: 96px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(90deg, $base-color 0px, $shine-color 40px, $base-color 80px);
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear
  }

  &__ibc {
    width: 64px;
    height: 22px;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    margin-left: 16px;
    display: inline-flex;

    background: linear-gradient(90deg, $base-color 0px, $shine-color 40px, $base-color 80px);
    background-size: 600px;
    animation: shine-lines $animation-duration infinite linear
  }
}

@keyframes shine-avatar {
  0% {
    background-position: -100px + $avatar-offset
  }
  40%, 100% {
    background-position: 140px + $avatar-offset
  }
}

@keyframes shine-lines {
  0% {
    background-position: -100px
  }
  40%, 100% {
    background-position: 140px
  }
}

</style>
