<template>
	<div class="sp-accounts-list" v-if="depsLoaded">
		<div v-if="!newAccount.show">
			<ul v-if="accountList.length > 0" class="sp-accounts-list-items">
				<li
					v-for="account in accountList"
					v-bind:key="account.address"
					class="sp-accounts-list-item"
				>
					<div class="sp-accounts-list-item__use">
						<div class="sp-accounts-list-item__path">
							{{ account.pathIncrement }}
						</div>
						<div
							class="sp-accounts-list-item__address"
							@click="useAccount(account.address)"
							:class="{ 'sp-active': account.address == currentAccount }"
						>
							{{ shortenAddress(account.address) }}
						</div>
						<div
							class="sp-accounts-list-item__copy"
							@click="copyToClipboard(account.address)"
						>
							<span class="sp-icon sp-icon-Copy" />
						</div>
					</div>
				</li>
			</ul>
			<div class="sp-accounts-new">
				<SpLinkIcon
					icon="AddNew"
					text="Generate new address"
					v-on:click="createAccount"
				/>
			</div>
		</div>
		<div class="SpAccountForm SpForm" v-if="newAccount.show">
			<div class="SpFormTitle">
				<strong>ADD ACCOUNT:</strong>
			</div>
			<div class="SpAccountCheckbox SpCheckbox">
				<label for="SpAccountNextAvailable"
					>CREATE NEXT AVAILABLE ACCOUNT?

					<input
						type="checkbox"
						v-model="newAccount.nextAvailable"
						id="SpAccountNextAvailable"
				/></label>
			</div>
			<div class="SpAccountHDPath" v-if="!newAccount.nextAvailable">
				USE SPECIFIC HD PATH: <em>{{ HDPath }}</em
				><input
					type="number"
					v-model="newAccount.pathIncrement"
					class="SpInputNumber"
				/>
			</div>
			<div class="SpAccountCreate">
				<button @click="createAccount()" class="SpButton">
					<div class="SpButtonText">CREATE ACCOUNT</div>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import SpLinkIcon from '../SpLinkIcon'

export default {
	name: 'SpAccountList',
	data() {
		return this.defaultState()
	},
	components: {
		SpLinkIcon
	},
	computed: {
		accountList() {
			return this.$store.state.common.wallet.activeWallet.accounts
		},
		HDPath() {
			return this.$store.state.common.wallet.activeWallet.HDpath
		},
		depsLoaded() {
			return this._depsLoaded
		},
		currentAccount() {
			if (this._depsLoaded) {
				return this.$store.getters['common/wallet/address']
			} else {
				return null
			}
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
		copyToClipboard(str) {
			const el = document.createElement('textarea')
			el.value = str
			document.body.appendChild(el)
			el.select()
			el.setSelectionRange(0, 999999)
			document.execCommand('copy')
			document.body.removeChild(el)
		},
		defaultState() {
			return {
				newAccount: {
					show: false,
					nextAvailable: true,
					pathIncrement: null
				}
			}
		},
		reset() {
			Object.assign(this.$data, this.defaultState())
		},
		newAccountForm() {
			this.newAccount.show = true
		},
		shortenAddress(addr) {
			return addr.substr(0, 10) + '...' + addr.slice(-5)
		},
		async useAccount(address) {
			if (this._depsLoaded) {
				await this.$store.dispatch('common/wallet/switchAccount', address)
				this.$emit('account-selected')
			}
		},
		async createAccount() {
			if (this._depsLoaded) {
				if (this.newAccount.nextAvailable) {
					await this.$store.dispatch('common/wallet/addAccount')
				} else {
					await this.$store.dispatch(
						'common/wallet/addAccount',
						this.newAccount.pathIncrement
					)
				}
			}
			this.reset()
		}
	}
}
</script>
