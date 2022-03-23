import { OfflineDirectSigner } from '@cosmjs/proto-signing'
import {
  AppCurrency,
  Bech32Config,
  BIP44,
  Currency,
  Key
} from '@keplr-wallet/types'
import { computed, ComputedRef } from 'vue'

import { AmountWithMeta } from '../utils/interfaces'
import { useIgnite } from '@ignt/vue'

type Response = {
  connectToKeplr: (onSuccessCb: () => void, onErrorCb: () => void) => void
  isKeplrAvailable: ComputedRef<boolean>
  getOfflineSigner: (chainId: string) => OfflineDirectSigner
  getKeplrAccParams: (chainId: string) => Promise<Key>
  listenToAccChange: (cb: EventListener) => void
}

export default function (): Response {
  let { ignite } = useIgnite()

  let connectToKeplr = async (
    onSuccessCb: () => void,
    onErrorCb: () => void
  ) => {
    try {
      let features = ['no-legacy-stdTx']

      let staking = await ignite.value?.CosmosStakingV1Beta1.queryParams()
      let tokens = await ignite.value?.CosmosBankV1Beta1.queryTotalSupply()

      let chainId: string = ignite.value?.env.chainID || ''
      let chainName: string = ignite.value?.env.chainName || ''
      let rpc: string = ignite.value?.env.rpcURL || ''
      let rest: string = ignite.value?.env.apiURL || ''
      let addrPrefix: string = ignite.value?.env.prefix || ''

      let stakeCurrency: Currency = {
        coinDenom: staking?.data.params?.bond_denom?.toUpperCase() || '',
        coinMinimalDenom: staking?.data.params?.bond_denom || '',
        coinDecimals: 0
      }

      let bip44: BIP44 = {
        coinType: 118
      }

      let bech32Config: Bech32Config = {
        bech32PrefixAccAddr: addrPrefix,
        bech32PrefixAccPub: addrPrefix + 'pub',
        bech32PrefixValAddr: addrPrefix + 'valoper',
        bech32PrefixValPub: addrPrefix + 'valoperpub',
        bech32PrefixConsAddr: addrPrefix + 'valcons',
        bech32PrefixConsPub: addrPrefix + 'valconspub'
      }

      let currencies: AppCurrency[] = tokens?.data.supply?.map((c) => {
        const y: AmountWithMeta = {
          amount: '0',
          denom: '',
          coinDenom: '',
          coinMinimalDenom: '',
          coinDecimals: 0
        }
        y.coinDenom = c.denom?.toUpperCase() || ''
        y.coinMinimalDenom = c.denom || ''
        y.coinDecimals = 0

        return y
      }) as AppCurrency[]

      let feeCurrencies: AppCurrency[] = tokens?.data.supply?.map((c) => {
        const y: AmountWithMeta = {
          amount: '0',
          denom: '',
          coinDenom: '',
          coinMinimalDenom: '',
          coinDecimals: 0
        }
        y.coinDenom = c.denom?.toUpperCase() || ''
        y.coinMinimalDenom = c.denom || ''
        y.coinDecimals = 0

        return y
      }) as AppCurrency[]

      let coinType = 118

      let gasPriceStep = {
        low: 0.01,
        average: 0.025,
        high: 0.04
      }

      if (chainId) {
        await window.keplr.experimentalSuggestChain({
          features,
          chainId,
          chainName,
          rpc,
          rest,
          stakeCurrency,
          bip44,
          bech32Config,
          currencies,
          feeCurrencies,
          coinType,
          gasPriceStep
        })

        window.keplr.defaultOptions = {
          sign: {
            preferNoSetFee: true,
            preferNoSetMemo: true
          }
        }

        await window.keplr.enable(chainId)
        onSuccessCb()
      } else {
        console.error('Cannot access chain data')
        onErrorCb()
      }
    } catch (e) {
      console.error(e)
      onErrorCb()
    }
  }

  let isKeplrAvailable = computed<boolean>(() => {
    return !!window.keplr
  })

  let getOfflineSigner = (chainId: string) =>
    window.keplr.getOfflineSigner(chainId)

  let getKeplrAccParams = async (chainId: string) =>
    await window.keplr.getKey(chainId)

  let listenToAccChange = (cb: EventListener) => {
    window.addEventListener('keplr_keystorechange', cb)
  }

  return {
    connectToKeplr,
    isKeplrAvailable,
    getOfflineSigner,
    getKeplrAccParams,
    listenToAccChange
  }
}
