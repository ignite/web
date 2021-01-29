<template>
	<div class="SpAccountList">
		<ul v-if="accountList.length > 0">
			<li v-for="account in accountList" v-bind:key="account.address">
				<button @click="useAccount(account.address)">
					{{ account.address }}
				</button>
			</li>
		</ul>
		<div class="SpAccountNew">
			<button @click="newAccountForm()">Add new account</button>
		</div>
		<div class="SpAccountForm" v-if="newAccount.show">
			<div class="SpAccountCheckbox">
				<label for="SpAccountNextAvailable"
					>Create next available account?</label
				>
				<input
					type="checkbox"
					v-model="newAccount.nextAvailable"
					id="SpAccountNextAvailable"
				/>
			</div>
			<div class="SpAccountCreate">
				<button @click="createAccount()">
					Create account
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
		}
	},
	methods: {
		defaultState() {
			return {
				newAccount: {
					show: false,
					nextAvailable: true,
					HDPath: null
				}
			}
		},
		reset() {
			Object.assign(this.$data, this.defaultState())
		},
		newAccountForm() {
			this.newAccount.show = true
		},
		async createAccount() {
			if (this.newAccount.nextAvailable){
				await this.$store.dispatch('chain/common/wallet/addAccount')
			}
			this.reset()
		}
	}
}
</script>
