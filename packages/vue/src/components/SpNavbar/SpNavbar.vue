<template>
  <div class="navbar-wrapper">
    <div class="navbar-section">
      <router-link
          :to="'/'"
          class="sp-nav-link"
          :alt="'Home'"
          :title="'Home'"
      >
        <div style="display: flex; align-items: center">
          <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.1562 10.1835L16.4168 1.95008L30.6775 10.1835V26.6502L16.4168 34.8836L2.1562 26.6502V10.1835Z" stroke="#111111" stroke-width="2.8"/>
            <rect x="13.5" y="15.5" width="5.83333" height="5.83333" rx="2.91667" fill="#111111"/>
          </svg>
          <span style="padding: 4px 8px; margin-left: 10px; background: rgba(0, 0, 0, 0.03); border-radius: 24px; font-weight: 500; font-size: 10px">
            Beta
          </span>
        </div>
      </router-link>
      <router-link
          :key="`link-${lid}`"
          v-for="(link, lid) in data.links"
          :to="link.url"
          class="sp-nav-link"
          :class="link.name === data.selectedLink ? 'selected' : ''"
          :alt="link.name"
          :title="link.name"
      >
        <div class="">
          {{ link.name }}
        </div>
      </router-link>
    </div>
    <div class="navbar-section">
      <div
          v-if="data.connectedWallet"
          class="sp-nav-link selected"
          style="display: flex; align-items: center"
          @click="data.accontDropdown = true"
      >
        <SpProfileIcon />
        <span style="margin-left: 12px; margin-right: 12px;">
          {{ data.connectedWallet.name }}
        </span>
        <ChevronDownIcon />
      </div>
      <div
          v-else
          :ref="connectWalletButton"
          class="sp-nav-link"
          style="display: flex; align-items: center"
          @click="data.connectWalletModal = true"
      >
        Connect wallet
      </div>
      <SpAccountDropdown
          v-if="data.accontDropdown"
          :connectedWallet="data.connectedWallet"
          @disconnect="() => { data.connectedWallet = null; data.accontDropdown = false; }"
          @close="data.accontDropdown = false"
      />
    </div>
    <SpModal
        :visible="data.connectWalletModal"
        :closeIcon="false"
        :cancelButton="false"
        :submitButton="false"
        @close="data.connectWalletModal = false"
        @submit="data.connectWalletModal = false"
        style="text-align: center;"
    >
      <template v-slot:header>
        <div v-if="data.modalPage === 'connect'">
          <KeplrIcon />
          <h3 v-if="keplrAvailable">Connect your wallet</h3>
          <h3 v-else>Install Keplr</h3>
        </div>
        <div v-else-if="data.modalPage === 'connecting'">
          <div class="description-grey">Opening Keplr</div>
          <h3>Connecting</h3>
        </div>
        <div v-else-if="data.modalPage === 'error'">
          <WarningIcon style="margin-bottom: 20px;" />
          <h3>Keplr cannot launch</h3>
        </div>
      </template>
      <template v-slot:body>
        <div style="max-width: 320px; text-align: center; margin: auto;">
          <div v-if="data.modalPage === 'connect'">
            <p v-if="keplrAvailable">Connect your Keplr wallet via the Keplr browser extension to use this app.</p>
            <p v-else>Install & connect your Keplr wallet via the Keplr browser extension to use this app.</p>
          </div>
          <div v-else-if="data.modalPage === 'connecting'">
            <div style="margin-top: 2rem">
              <SpSpinner />
            </div>
            <SpButton
                aria-label="Cancel"
                type="secondary"
                @click="data.modalPage = 'connect'"
                style="margin-top: 3rem"
            >
              Cancel
            </SpButton>
            <div class="external-link" style="margin-top: 2rem">
              Having trouble opening Keplr?
            </div>
          </div>
          <div v-else-if="data.modalPage === 'error'" style="padding: 20px 0;">
            <div class="external-link">
              <span>Keplr troubleshooting</span>
              <ExternalArrowIcon style="margin-left: 0.5rem;" />
            </div>
          </div>
        </div>
      </template>
      <template v-if="keplrAvailable" v-slot:footer>
        <div v-if="data.modalPage === 'connect'">
          <SpButton
              aria-label="Connect Keplr"
              type="primary"
              @click="useKeplr"
          >
            Connect Keplr
          </SpButton>
        </div>
        <div
            v-if="data.modalPage === 'error'"
            style="gap: 10px; display: flex; justify-content: center;"
        >
          <SpButton
              aria-label="Connect Keplr"
              type="secondary"
              @click="data.connectWalletModal = false"
          >
            Cancel
          </SpButton>
          <SpButton
              aria-label="Connect Keplr"
              type="primary"
              @click="data.modalPage = 'connect'"
          >
            Try again
          </SpButton>
        </div>
      </template>
    </SpModal>
  </div>
</template>

<script lang="ts">
import SpModal from '../SpModal/SpModal.vue'
import SpAccountDropdown from './SpAccountDropdown.vue'
import SpSpinner from './SpSpinner.vue'
import SpProfileIcon from './SpProfileIcon.vue'
import { defineComponent, inject, computed, reactive, ref, watch, onBeforeMount } from 'vue'
import { useStore  } from 'vuex'
import KeplrIcon from './assets/KeplrIcon.vue'
import WarningIcon from './assets/WarningIcon.vue'
import ExternalArrowIcon from './assets/ExternalArrow.vue'
import ChevronDownIcon from './assets/ChevronDown.vue'

export interface Amount {
  amount: string
  denom: string
}

export type AmountWithMeta = Amount & {
  coinDenom: string
  coinMinimalDenom: string
  coinDecimals: number
}

export default defineComponent({
  name: 'SpNavbar',
  components: {
    SpModal,
    SpSpinner,
    SpProfileIcon,
    SpAccountDropdown,
    KeplrIcon,
    WarningIcon,
    ExternalArrowIcon,
    ChevronDownIcon,
  },
  props: {
  },
  setup() {
    const data = reactive({
      links: [
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Data', url: '/data' },
      ],
      selectedLink: 'Portfolio',
      connectedWallet: null,
      modalPage: 'connect',
      connectWalletModal: false,
      accontDropdown: false,
    })

    const store = useStore()
    const _depsLoaded = inject('_depsLoaded')
    const connectWalletButton = ref(null)

    const keplrAvailable = computed(() => {
      return !!window.keplr
    })

    const updateWalletData = async (chainId: string) => {
      const walletParams = await window.keplr.getKey(chainId)
      const offlineSigner = window.keplr.getOfflineSigner(chainId)
      console.log(offlineSigner)
      await store.dispatch('common/wallet/connectWithKeplr', offlineSigner)
      data.connectedWallet = {
        name: walletParams.name,
        address: walletParams.bech32Address,
      }
    }

    onBeforeMount(async () => {
      const chainId = store.getters['common/env/chainId']
      if (chainId) {
        try {
          await updateWalletData(chainId)
        } catch (e) {
          console.log('Keplr not connected')
        }
      }
    })

    watch(() => store.getters['common/env/chainId'],
      async (newVal) => {
        if (newVal) {
          try {
            await updateWalletData(newVal)
          } catch (e) {
            console.log('Keplr not connected')
          }
        }
      }
    )

    const useKeplr = async (): Promise<void> => {
      try {
        data.modalPage = 'connecting'

        const staking = store.getters['cosmos.staking.v1beta1/getParams']()
        const tokens = store.getters['cosmos.bank.v1beta1/getTotalSupply']()
        const chainId = store.getters['common/env/chainId']
        const chainName = store.getters['common/env/chainName']
        const rpc = store.getters['common/env/apiTendermint']
        const rest = store.getters['common/env/apiCosmos']
        const addrPrefix = store.getters['common/env/addrPrefix']

        if (chainId) {
          await window.keplr.experimentalSuggestChain({
            features: ['no-legacy-stdTx'],
            chainId: chainId,
            chainName: chainName,
            rpc: rpc,
            rest: rest,
            stakeCurrency: {
              coinDenom: staking.params.bond_denom.toUpperCase(),
              coinMinimalDenom: staking.params.bond_denom,
              coinDecimals: 0,
            },
            bip44: {
              coinType: 118,
            },
            bech32Config: {
              bech32PrefixAccAddr: addrPrefix,
              bech32PrefixAccPub: addrPrefix + 'pub',
              bech32PrefixValAddr: addrPrefix + 'valoper',
              bech32PrefixValPub: addrPrefix + 'valoperpub',
              bech32PrefixConsAddr: addrPrefix + 'valcons',
              bech32PrefixConsPub: addrPrefix + 'valconspub',
            },
            currencies: tokens.supply.map((x: Amount) => {
              const y: AmountWithMeta = {
                amount: '0',
                denom: '',
                coinDenom: '',
                coinMinimalDenom: '',
                coinDecimals: 0,
              }
              y.coinDenom = x.denom.toUpperCase()
              y.coinMinimalDenom = x.denom
              y.coinDecimals = 0
              return y
            }),
            feeCurrencies: tokens.supply.map((x: Amount) => {
              const y: AmountWithMeta = {
                amount: '0',
                denom: '',
                coinDenom: '',
                coinMinimalDenom: '',
                coinDecimals: 0,
              }
              y.coinDenom = x.denom.toUpperCase()
              y.coinMinimalDenom = x.denom
              y.coinDecimals = 0
              return y
            }),
            coinType: 118,
            gasPriceStep: {
              low: 0.01,
              average: 0.025,
              high: 0.04,
            },
          })
          await window.keplr.enable(chainId)
          updateWalletData(chainId)
          data.connectWalletModal = false
          data.modalPage = 'connect'
        } else {
          data.modalPage = 'error'
          console.error('Cannot access chain data from vuex store')
        }
      } catch (e) {
        data.modalPage = 'error'
        console.error(e)
      }
    }

    return {
      keplrAvailable,
      useKeplr,
      data,
      connectWalletButton,
    }
  },
})
</script>

<style>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 80px;
  left: 0;
  right: 0;
  top: 0;
  background: #FFFFFF;
}

.navbar-section {
  display: flex;
  padding: 20px;
  align-items: center;
}

.sp-nav-link {
  font-size: 16px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.667);
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  margin: 0 1rem;
  transition: font-weight .2s ease, color .2s ease;
}

.sp-nav-link:hover {
  opacity: 0.8;
}

.sp-nav-link.selected {
  font-weight: 600;
  color: #000000;
}

.description-grey {
  font-size: 13px;
  line-height: 153.8%;
  color: rgba(0, 0, 0, 0.667);
}

.external-link {
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
}

.external-link:hover {
  opacity: 0.8;
}
</style>
