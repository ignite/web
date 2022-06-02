import { OfflineDirectSigner } from '@cosmjs/proto-signing'
import {
  AppCurrency,
  Bech32Config,
  BIP44,
  Currency,
  Key
} from '@keplr-wallet/types'

import { Env } from './env'

function plugKeplr(): {
  keplr: {
    connect: (
      onSuccessCb: () => void,
      onErrorCb: () => void,
      params: {
        stakinParams: any
        tokens: any
        env: Env
      }
    ) => void
    isAvailable: () => boolean
    getOfflineSigner: (chainId: string) => OfflineDirectSigner
    getAccParams: (chainId: string) => Promise<Key>
    listenToAccChange: (cb: EventListener) => void
  }
} {
  return {
    keplr: {
      connect: async (onSuccessCb: () => void, onErrorCb: () => void, p) => {
        try {
          let staking = p.stakinParams
          let tokens = p.tokens

          let chainId: string = p.env.chainID || ''
          let chainName: string = p.env.chainName || ''
          let rpc: string = p.env.rpcURL || ''
          let rest: string = p.env.apiURL || ''
          let addrPrefix: string = p.env.prefix || ''

          let stakeCurrency: Currency = {
            coinDenom: staking.params?.bond_denom?.toUpperCase() || '',
            coinMinimalDenom: staking.params?.bond_denom || '',
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

          let currencies: AppCurrency[] = tokens.supply?.map((c) => {
            const y: any = {
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

          let feeCurrencies: AppCurrency[] = tokens.supply?.map((c) => {
            const y: any = {
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
      },

      isAvailable: () => {
        // @ts-ignore
        return !!window.keplr
      },

      getOfflineSigner: (chainId: string) =>
        // @ts-ignore
        window.keplr.getOfflineSigner(chainId),

      getAccParams: async (chainId: string) =>
        // @ts-ignore
        await window.keplr.getKey(chainId),

      listenToAccChange: (cb: EventListener) => {
        window.addEventListener('keplr_keystorechange', cb)
      }
    }
  }
}

export { plugKeplr }
