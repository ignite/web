<template>
	<div class="sp-acc">
		<div
			v-if="state.connectedWallet"
			class="sp-nav-link selected"
			style="display: flex; align-items: center"
			@click="state.accountDropdown = true"
		>
			<SpProfileIcon />
			<span style="margin-left: 12px; margin-right: 12px">
				{{ state.connectedWallet.name }}
			</span>
			<SpChevronDownIcon />
		</div>
		<div
			v-else
			class="sp-nav-link"
			style="display: flex; align-items: center"
			@click="state.connectWalletModal = true"
		>
			Connect wallet
		</div>
		<SpAccountDropdown
			v-if="state.accountDropdown"
			:connectedWallet="state.connectedWallet"
			@disconnect="
				() => {
					state.connectedWallet = null
					state.accountDropdown = false
				}
			"
			@close="state.accountDropdown = false"
		/>
		<SpModal
			:visible="state.connectWalletModal"
			:closeIcon="false"
			:cancelButton="false"
			:submitButton="false"
			@close="state.connectWalletModal = false"
			@submit="state.connectWalletModal = false"
			style="text-align: center"
		>
			<template v-slot:header>
				<div v-if="state.modalPage === 'connect'">
					<SpKeplrIcon />
					<h3 v-if="keplrAvailable">Connect your wallet</h3>
					<h3 v-else>Install Keplr</h3>
				</div>
				<div v-else-if="state.modalPage === 'connecting'">
					<div class="description-grey">Opening Keplr</div>
					<h3>Connecting</h3>
				</div>
				<div v-else-if="state.modalPage === 'error'">
					<SpWarningIcon style="margin-bottom: 20px" />
					<h3>Keplr cannot launch</h3>
				</div>
			</template>
			<template v-slot:body>
				<div style="max-width: 320px; text-align: center; margin: auto">
					<div v-if="state.modalPage === 'connect'">
						<p v-if="keplrAvailable">
							Connect your Keplr wallet via the Keplr browser extension to use
							this app.
						</p>
						<p v-else>
							Install & connect your Keplr wallet via the Keplr browser
							extension to use this app.
						</p>
					</div>
					<div v-else-if="state.modalPage === 'connecting'">
						<div style="margin-top: 2rem">
							<SpSpinner />
						</div>
						<SpButton
							aria-label="Cancel"
							type="secondary"
							@click="state.modalPage = 'connect'"
							style="margin-top: 3rem"
						>
							Cancel
						</SpButton>
						<div class="external-link" style="margin-top: 2rem">
							Having trouble opening Keplr?
						</div>
					</div>
					<div v-else-if="state.modalPage === 'error'" style="padding: 20px 0">
						<div class="external-link">
							<span>Keplr troubleshooting</span>
							<SpExternalArrowIcon style="margin-left: 0.5rem" />
						</div>
					</div>
				</div>
			</template>
			<template v-if="keplrAvailable" v-slot:footer>
				<div v-if="state.modalPage === 'connect'">
					<SpButton
						aria-label="Connect Keplr"
						type="primary"
						@click="connectToKeplr"
					>
						Connect Keplr
					</SpButton>
				</div>
				<div
					v-if="state.modalPage === 'error'"
					style="gap: 10px; display: flex; justify-content: center"
				>
					<SpButton
						aria-label="Connect Keplr"
						type="secondary"
						@click="state.connectWalletModal = false"
					>
						Cancel
					</SpButton>
					<SpButton
						aria-label="Connect Keplr"
						type="primary"
						@click="state.modalPage = 'connect'"
					>
						Try again
					</SpButton>
				</div>
			</template>
		</SpModal>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import SpModal from '../SpModal'
import SpButton from '../SpButton'
import SpAccountDropdown from '../SpAccountDropdown'
import SpSpinner from '../SpSpinner'
import SpProfileIcon from '../SpProfileIcon'
import SpKeplrIcon from '../SpKeplrIcon'
import SpWarningIcon from '../SpWarningIcon'
import SpExternalArrowIcon from '../SpExternalArrow'
import SpChevronDownIcon from '../SpChevronDown'

import useKeplr from '@/composables/useKeplr'

export default defineComponent({
	name: 'SpAcc',

	components: {
		SpModal,
		SpButton,
		SpSpinner,
		SpProfileIcon,
		SpAccountDropdown,
		SpKeplrIcon,
		SpWarningIcon,
		SpExternalArrowIcon,
		SpChevronDownIcon
	},

	setup() {
		// state
		const state = reactive({
			connectedWallet: {} as any,
			modalPage: 'connect',
			connectWalletModal: false,
			accountDropdown: false
		})

		// $s
		const $s = useStore()

		// computed

		// methods
		const updateWalletData = async (chainId: string) => {
			const walletParams = await window.keplr.getKey(chainId)
			const offlineSigner = window.keplr.getOfflineSigner(chainId)
			await $s.dispatch('common/wallet/connectWithKeplr', offlineSigner)
			state.connectedWallet = {
				name: walletParams.name,
				address: walletParams.bech32Address
			}
		}
		const autoConnectToChain = async (chainId: string) => {
			if (chainId) {
				try {
					await updateWalletData(chainId)
				} catch (e) {
					console.log('Keplr not connected')
				}
			}
		}

		// lh
		onBeforeMount(async () => {
			const chainId = $s.getters['common/env/chainId']
			autoConnectToChain(chainId)
		})

		// watch
		watch(
			() => $s.getters['common/env/chainId'],
			async (newVal) => {
				autoConnectToChain(newVal)
			}
		)

		// composables
		let { connect: connectToKeplr, keplrAvailable } = useKeplr(
			$s,
			updateWalletData
		)

		return {
			keplrAvailable,
			connectToKeplr,
			state
		}
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
	background: #ffffff;
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
	transition: font-weight 0.2s ease, color 0.2s ease;
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
