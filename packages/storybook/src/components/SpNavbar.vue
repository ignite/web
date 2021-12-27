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
					<span
						style="padding: 4px 8px; margin-left: 10px; background: rgba(0, 0, 0, 0.03); border-radius: 24px; font-weight: 500; font-size: 10px">
						Beta
					</span>
				</div>
			</router-link>
			<router-link
				:key="`link-${lid}`"
				v-for="(link, lid) in links"
				:to="link.url"
				class="sp-nav-link"
				:class="link.name === selectedLink ? 'selected' : ''"
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
				v-if="connectedWallet"
				class="sp-nav-link selected"
				style="display: flex; align-items: center"
			>
				<div
					style="width: 32px;
					height: 32px;
					border-radius: 50%;
					background: linear-gradient(276.98deg, #EAE501 3.37%, #A5FBFF 22.05%, #4251FA 56.21%, #320B93 95.92%);"
				/>
				<span style="margin-left: 12px; margin-right: 12px;">
					{{ connectedWallet.name }}
				</span>
				<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 2L6 6L2 2" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
				</svg>
			</div>
			<div
				v-else
				class="sp-nav-link"
				style="display: flex; align-items: center"
				@click="connectWalletModal = true"
			>
				Connect wallet
			</div>
		</div>
		<SpModal
			:visible="connectWalletModal"
			:closeIcon="false"
			:cancelButton="false"
			:submitButton="'Connect Keplr'"
			@close="connectWalletModal = false"
			@submit="connectWalletModal = false"
		>
			<template v-slot:header>
				<div style="text-align: center;">
					<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 1rem">
						<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint0_radial_463_11054)"/>
						<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint1_radial_463_11054)" fill-opacity="0.57"/>
						<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint2_radial_463_11054)" fill-opacity="0.68"/>
						<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint3_radial_463_11054)" fill-opacity="0.08"/>
						<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint4_linear_463_11054)" fill-opacity="0.03"/>
						<path d="M16.896 41.3002V26.4202L30.96 41.3002H38.784V40.9162L22.608 23.9722L37.536 7.8922V7.7002H29.664L16.896 21.9082V7.7002H10.56V41.3002H16.896Z" fill="white"/>
						<defs>
							<radialGradient id="paint0_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-37.1557 23.4718) rotate(140.172) scale(82.5605 99.6279)">
								<stop stop-color="#2F80F2"/>
								<stop offset="0.999657" stop-color="#A942B5"/>
							</radialGradient>
							<radialGradient id="paint1_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.777489 1.2476) rotate(46.3208) scale(76.3717 80.0265)">
								<stop stop-color="#45F9DE"/>
								<stop offset="1" stop-color="#A942B5" stop-opacity="0"/>
							</radialGradient>
							<radialGradient id="paint2_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-47.52 -23.8545) rotate(180) scale(46.101 23.7402)">
								<stop stop-color="#E957C5"/>
								<stop offset="1" stop-color="#A942B5" stop-opacity="0"/>
							</radialGradient>
							<radialGradient id="paint3_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-42.8213 3.44693) rotate(119.938) scale(27.6729 41.487)">
								<stop stop-opacity="0.184878"/>
								<stop offset="1" stop-color="#101010"/>
							</radialGradient>
							<linearGradient id="paint4_linear_463_11054" x1="45.234" y1="28.8037" x2="0" y2="0.5" gradientUnits="userSpaceOnUse">
								<stop stop-color="white" stop-opacity="0.184878"/>
								<stop offset="1" stop-color="white"/>
							</linearGradient>
						</defs>
					</svg>
					<h3>Connect your wallet</h3>
				</div>
			</template>
			<template v-slot:body>
				<p>Connect your Keplr wallet via the Keplr browser extension to use this app.</p>
			</template>
			<template v-slot:footer>
				<SpButton
					aria-label="Connect Keplr"
					type="primary"
				>
					Connect Keplr
				</SpButton>
			</template>
		</SpModal>
	</div>
</template>

<script lang="ts">
import SpModal from './SpModal.vue'
import { defineComponent } from 'vue'

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
	components: { SpModal },
	props: {
		cancelButton: {
			type: Boolean,
			defaultsTo: true
		},
	},
	data() {
		return {
			links: [
				{ name: 'Portfolio', url: '/portfolio' },
				{ name: 'Data', url: '/data' },
			],
			selectedLink: 'Portfolio',
			connectedWallet: null,/* {
				name: 'Alice'
			}*/
			connectWalletModal: false
		}
	},
	computed: {
		keplrAvailable: function (): boolean {
			return window.keplr ? true : false
		},
	},
	methods: {
		useKeplr: async function (): Promise<void> {
			if (this._depsLoaded) {
				const staking = this.$store.getters['cosmos.staking.v1beta1/getParams']()
				const tokens = this.$store.getters['cosmos.bank.v1beta1/getTotalSupply']()
				const chainId = this.$store.getters['common/env/chainId']
				try {
					await window.keplr.experimentalSuggestChain({
						features: ['no-legacy-stdTx'],
						chainId: chainId,
						chainName: this.$store.getters['common/env/chainName'],
						rpc: this.$store.getters['common/env/apiTendermint'],
						rest: this.$store.getters['common/env/apiCosmos'],
						stakeCurrency: {
							coinDenom: staking.params.bond_denom.toUpperCase(),
							coinMinimalDenom: staking.params.bond_denom,
							coinDecimals: 0,
						},
						bip44: {
							coinType: 118,
						},
						bech32Config: {
							bech32PrefixAccAddr: this.$store.getters['common/env/addrPrefix'],
							bech32PrefixAccPub: this.$store.getters['common/env/addrPrefix'] + 'pub',
							bech32PrefixValAddr: this.$store.getters['common/env/addrPrefix'] + 'valoper',
							bech32PrefixValPub: this.$store.getters['common/env/addrPrefix'] + 'valoperpub',
							bech32PrefixConsAddr: this.$store.getters['common/env/addrPrefix'] + 'valcons',
							bech32PrefixConsPub: this.$store.getters['common/env/addrPrefix'] + 'valconspub',
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
					const offlineSigner = window.getOfflineSigner(chainId)
					await this.$store.dispatch('common/wallet/connectWithKeplr', offlineSigner)
					this.done()
				} catch (e) {
					console.error(e)
				}
			}
		},
	}
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
</style>
