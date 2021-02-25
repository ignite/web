<template>
	<div class="sp-wallet" v-if="depsLoaded">
		<div v-if="loggedIn">
			<button @click="toggleAccountList()" class="SpButton">
				<div class="SpButtonText">
					<template v-if="walletName">{{ walletName }}:</template
					>{{ currentAccount }}
				</div>
			</button>
			<SpAccountList
				v-if="showAccounts && walletName"
				v-on:account-selected="showAccounts = false"
			/>
		</div>
		<div v-else>
			<button @click="toggleWalletList()" class="SpButton">
				<div class="SpButtonText">SIGN IN</div>
			</button>
			<SpWalletList
				v-if="showWallets"
				v-on:wallet-selected="showWallets = false"
			/>
		</div>
	</div>
</template>
<script>
import SpAccountList from '../SpAccountList'
import SpWalletList from '../SpWalletList'
export default {
	name: 'SpWallet',
	components: {
		SpAccountList,
		SpWalletList
	},
	data() {
		return {
			showWallets: false,
			showAccounts: false
		}
	},
	computed: {
		currentAccount() {
			if (this._depsLoaded) {
				if (this.loggedIn) {
					return this.$store.getters['chain/common/wallet/address']
				} else {
					return null
				}
			} else {
				return null
			}
		},
		walletName() {
			if (this._depsLoaded) {
				return this.$store.getters['chain/common/wallet/walletName']
			} else {
				return ''
			}
		},
		loggedIn() {
			if (this._depsLoaded) {
				return this.$store.getters['chain/common/wallet/loggedIn']
			} else {
				return false
			}
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['chain', 'common', 'wallet']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.module + ' has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	methods: {
		toggleWalletList() {
			this.showWallets = !this.showWallets
			if (this.showWallets) {
				this.showAccounts = false
				this.$emit('dropdown-opened')
			}
		},
		closeDropdowns() {
			this.showAccounts = false
			this.showWallets = false
		},
		toggleAccountList() {
			if (this.walletName) {
				this.showAccounts = !this.showAccounts
				if (this.showAccounts) {
					this.showWallets = false
					this.$emit('dropdown-opened')
				}
			}
		}
	}
}
</script>
