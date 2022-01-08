import { computed } from 'vue'
import { Store } from 'vuex'

import { Amount, AmountWithMeta } from '../utils/interfaces'

export default function useKeplr($s: Store<any>): any {
	let connectToKeplr = async (
		onSuccessCb: () => void,
		onErrorCb: () => void
	) => {
		try {
			const staking = $s.getters['cosmos.staking.v1beta1/getParams']()
			const tokens = $s.getters['cosmos.bank.v1beta1/getTotalSupply']()
			const chainId = $s.getters['common/env/chainId']
			const chainName = $s.getters['common/env/chainName']
			const rpc = $s.getters['common/env/apiTendermint']
			const rest = $s.getters['common/env/apiCosmos']
			const addrPrefix = $s.getters['common/env/addrPrefix']

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
						coinDecimals: 0
					},
					bip44: {
						coinType: 118
					},
					bech32Config: {
						bech32PrefixAccAddr: addrPrefix,
						bech32PrefixAccPub: addrPrefix + 'pub',
						bech32PrefixValAddr: addrPrefix + 'valoper',
						bech32PrefixValPub: addrPrefix + 'valoperpub',
						bech32PrefixConsAddr: addrPrefix + 'valcons',
						bech32PrefixConsPub: addrPrefix + 'valconspub'
					},
					currencies: tokens.supply.map((x: Amount) => {
						const y: AmountWithMeta = {
							amount: '0',
							denom: '',
							coinDenom: '',
							coinMinimalDenom: '',
							coinDecimals: 0
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
							coinDecimals: 0
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
						high: 0.04
					}
				})

				await window.keplr.enable(chainId)
				onSuccessCb()
			} else {
				console.error('Cannot access chain data from vuex store')
				onErrorCb()
			}
		} catch (e) {
			console.error(e)
			onErrorCb()
		}
	}

	let isKeplrAvailbe = computed(() => {
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
		isKeplrAvailbe,
		getOfflineSigner,
		getKeplrAccParams,
		listenToAccChange
	}
}
