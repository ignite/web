<template>
  <section>
    <header class="assets-header">
      <h2 class="title">Assets</h2>
      <div class='assets-header__search'>
        <div class='assets-header__search-content'>
          <input v-model="searchQuery" type="text" autocomplete="off" placeholder="Search assets" class="input--search">
        </div>
      </div>
    </header>
    <table class="assets-table">
      <thead class='assets-table__thead'>
        <tr>
          <td>Asset</td>
          <td class='assets-table__align-right'>Available balance</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="balance in filteredBalanceList"
          :key="balance"
          class="assets-table__row"
        >
          <td class="assets-table__denom">
            <div class="sp-denom-marker">
              {{ balance.denom.charAt(0).toUpperCase() }}
            </div>
            <div class="sp-denom-name">
              {{ balance.denom.toUpperCase() }}
            </div>
          </td>
          <td class="assets-table__amount">
            {{ new Intl.NumberFormat('en-GB').format(balance.amount) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if='isShowMore' class='show-more' @click='showMore()'>
      Show more
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SpAssets',

  props: {
    address: {
      type: String as PropType<string>
    },
    resultLimit: {
      type: String || Number,
      default: 3,
      required: false
    }
  },

  setup(props) {
    // store
    const $s = useStore()
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
    let queryAllBalances = (opts: any) =>
      $s.dispatch('cosmos.bank.v1beta1/QueryAllBalances', opts)

    // methods

    const sortList = (list) => {
      return list.sort((a, b) => (a.symbol > b.symbol ? 1 : -1))
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
      return filteredBalanceList.value.length < balances.value.concat(state.demoDenoms).length
    })

    const filteredBalanceList = computed(() => {

      let searchArray = balances.value.concat(state.demoDenoms),
          searchString = state.searchQuery

      if (!searchString) {
        return sortList(searchArray.slice(0, state.displayLimit));
      }

      searchString = searchString.trim().toLowerCase()

      searchArray = searchArray.filter((item) => {
        if (item.denom.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })

      // Return an array with the filtered data.
      return sortList(searchArray.slice(0, state.displayLimit))
    })

    const showMore = () => {
      state.displayLimit += state.displayLimit
    }

    // lh
    onMounted(async () => {
      await queryAllBalances({
        params: { address: props.address},
        query: {"pagination.reverse": false},
        options: { all: true, subscribe: true }
      })
    })

    return {
      filteredBalanceList,
      showMore,
      isShowMore,
      ...toRefs(state),
    }
  }
})

</script>

<style lang="scss" scoped>
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
  height: 24px;
  width: 24px;
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
  font-weight: bold;
  font-size: 28px;
  line-height: 127%;
  /* identical to box height, or 36px */

  letter-spacing: -0.016em;
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

section {
  position: relative;
  padding-bottom: 48px;
}
</style>
