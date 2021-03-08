<template>
	<div v-if="depsLoaded">
		<div class="container">
			<div class="row">
				<div v-if="address" class="button">
					<div class="button__text button__address">
						{{ address }}
					</div>
				</div>
				<div class="button" @click="buttonClick">
					<div class="button__icon">
						<SpIconLock3 />
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
									<SpIconMagic1 />
								</div>
							</div>
							<div
								:class="[
									'dropdown__button',
									`button__disabled__${!mnemonicIsValid}`
								]"
								@click="mnemonicImport"
							>
								<div class="dropdown__button__text">Import mnemonic</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SpIconLock3 from '../SpIconLock3'
import SpIconMagic1 from '../SpIconMagic1'
import * as bip39 from 'bip39'

export default {
	name: 'SpSignIn',
	components: {
		SpIconLock3,
		SpIconMagic1
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
			if (this._depsLoaded) {
				const client = this.$store.getters['common/wallet/client']
				if (client) {
					return this.$store.getters['common/wallet/address']
				} else {
					return false
				}
			} else {
				return false
			}
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['common', 'wallet']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `common.wallet` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	methods: {
		buttonClick() {
			if (this._depsLoaded) {
				if (this.address) {
					this.$store.dispatch('common/wallet/signOut')
				} else {
					this.mnemonic = ''
					this.dropdown = !this.dropdown
				}
			}
		},
		async mnemonicImport() {
			if (this._depsLoaded) {
				if (this.mnemonicIsValid) {
					const mnemonic = this.mnemonicClean
					await this.$store.dispatch('common/wallet/createWalletWithMnemonic', {
						mnemonic
					})
				}
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
