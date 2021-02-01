<template>
	<div>
		<div class="container">
			<div class="row">
				<div v-if="address" class="button">
					<div class="button__text button__address">
						{{ address }}
					</div>
				</div>
				<div class="button" @click="buttonClick">
					<div class="button__icon">
						<IconLock3 />
					</div>
					<div class="button__text">
						{{ address ? 'Log out' : 'Sign in ' }}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="container-dropdown">
					<div v-if="dropdown && !address">
						<div class="dropdown">
							<div class="dropdown__textarea">
								<textarea
									v-model="mnemonic"
									placeholder="Mnemonic..."
									class="dropdown__textarea__input"
								></textarea>
								<div
									class="dropdown__textarea__icon"
									@click="mnemonicGenerate()"
								>
									<IconMagic1 />
								</div>
							</div>
							<div
								:class="[
									'dropdown__button',
									`button__disabled__${!mnemonicIsValid}`
								]"
								@click="mnemonicImport"
							>
								<div class="dropdown__button__text">
									Import mnemonic
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconLock3 from './icons/IconLock3'
import IconMagic1 from './icons/IconMagic1'
import * as bip39 from 'bip39'

export default {
	components: {
		IconLock3,
		IconMagic1
	},
	data() {
		return {
			mnemonic: '',
			dropdown: false
		}
	},
	computed: {
		mnemonicClean() {
			return this.mnemonic.trim()
		},
		mnemonicIsValid() {
			return bip39.validateMnemonic(this.mnemonicClean)
		},
		address() {
			const client = this.$store.getters['chain/common/wallet/client']
			if (client) {
				return this.$store.getters['chain/common/wallet/address']
			} else {
				return false
			}
		}
	},
	methods: {
		buttonClick() {
			if (this.address) {
				this.$store.dispatch('chain/common/wallet/signOut')
			} else {
				this.mnemonic = ''
				this.dropdown = !this.dropdown
			}
		},
		async mnemonicImport() {
			if (this.mnemonicIsValid) {
				const mnemonic = this.mnemonicClean
				await this.$store.dispatch(
					'chain/common/wallet/createWalletWithMnemonic',
					{
						mnemonic
					}
				)
			}
		},
		mnemonicGenerate() {
			const mnemonic = bip39.generateMnemonic(256)
			this.mnemonic = mnemonic
		},
		truncate(string) {
			return `${string.substring(0, 16)}...`
		}
	}
}
</script>
