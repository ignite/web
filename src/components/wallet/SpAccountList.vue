<template>
	<div class="SpAccountList">
		<div v-if="!newAccount.show">
			<strong>AVAILABLE ACCOUNTS:</strong>
			<ul v-if="accountList.length > 0">
				<li v-for="account in accountList" v-bind:key="account.address">
					<button @click="useAccount(account.address)" class="SpButton">
						<div class="SpButtonText">
							{{ account.address }}
						</div>
					</button>
				</li>
			</ul>
			<hr />
			<div class="SpAccountNew">
				<button @click="newAccountForm()" class="SpButton">
					<div class="SpButtonText">ADD NEW ACCOUNT</div>
				</button>
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
export default {
	name: 'SpAccountList',
	data() {
		return this.defaultState()
	},
	computed: {
		accountList() {
			return this.$store.state.chain.common.wallet.activeWallet.accounts
		},
		HDPath() {
			return this.$store.state.chain.common.wallet.activeWallet.HDpath
		}
	},
	methods: {
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
		async useAccount(address) {
			await this.$store.dispatch('chain/common/wallet/switchAccount', address)
			this.$emit('account-selected')
		},
		async createAccount() {
			if (this.newAccount.nextAvailable) {
				await this.$store.dispatch('chain/common/wallet/addAccount')
			} else {
				await this.$store.dispatch(
					'chain/common/wallet/addAccount',
					this.newAccount.pathIncrement
				)
			}
			this.reset()
		}
	}
}
</script>
