<template>
	<div v-if="depsLoaded">
		<div class="container">
			<SpH3>
				{{ bankAddress }}<br />
				Balance
				<SpIconSynchronization1 class="h3__icon" @click="balancesUpdate" />
			</SpH3>
			<div v-if="balances && balances.length < 1">
				Account balance appears to be empty.
			</div>
			<div class="list" v-if="balances">
				<div v-for="b in balances" :key="b.denom" class="list__item">
					<div class="list__item__h3">
						{{ b.denom }}
					</div>
					<div class="list__item__h2">
						{{ numberFormat(b.amount) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	font-family: var(--sp-f-primary);
}
.list {
	display: flex;
	flex-wrap: wrap;
}
.list__item {
	background: rgb(247, 247, 247);
	padding: 1rem;
	border-radius: 0.5rem;
	width: 100%;
	max-width: 225px;
	margin-bottom: 10px;
	margin-right: 10px;
	box-sizing: border-box;
}
.list__item__h3 {
	font-size: 0.875rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-weight: 700;
	margin-bottom: 0.25rem;
}
.list__item__h2 {
	font-size: 1.75rem;
}
.h3__icon {
	width: 1em;
	height: 1em;
	padding: 0 0.25em;
	fill: rgba(0, 0, 0, 0.25);
	cursor: pointer;
}
</style>

<script>
import SpH3 from '../SpH3'
import SpIconSynchronization1 from '../SpIconSynchronization1'

export default {
	name: 'SpBankBalances',
	components: {
		SpH3,
		SpIconSynchronization1
	},
	category: 'wallet',
	props: { address: String, refresh: Boolean },
	data: function () {
		return {
			bankAddress: ''
		}
	},
	computed: {
		balances() {
			return (
				this.$store.getters[
					'chain/cosmos/cosmos-sdk/cosmos.bank.v1beta1/getAllBalances'
				]({ address: this.bankAddress })?.balances ?? []
			)
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	beforeCreate() {
		const module = ['chain', 'cosmos', 'cosmos-sdk', 'cosmos.bank.v1beta1']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log(
					'Module `chain.cosmos.cosmos-sdk.bank` has not been registered!'
				)
				this._depsLoaded = false
				break
			}
		}
	},
	mounted: function () {
		if (this._depsLoaded) {
			this.bankAddress = this.address
			if (this.bankAddress != '') {
				this.$store.dispatch(
					'chain/cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
					{
						address: this.address,
						subscribe: this.refresh
					}
				)
			}
		}
	},
	watch: {
		address: function (newAddr, oldAddr) {
			if (newAddr != oldAddr && this._depsLoaded) {
				this.bankAddress = newAddr
				if (this.bankAddress != '') {
					this.$store.dispatch(
						'chain/cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
						{
							address: this.bankAddress,
							subscribe: this.refresh
						}
					)
				}
			}
		}
	},
	methods: {
		numberFormat(number) {
			return Intl.NumberFormat().format(number)
		},
		async balancesUpdate() {
			if (this._depsLoaded) {
				await this.$store.dispatch(
					'chain/cosmos/cosmos-sdk/cosmos.bank.v1beta1/QueryAllBalances',
					{
						address: this.bankAddress,
						subscribe: false
					}
				)
			}
		}
	}
}
</script>
