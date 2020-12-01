<template>
	<div>
		<div class="container">
			<SpH3>
				Balance
				<IconSynchronization1
					v-if="address"
					class="h3__icon"
					@click.native="balancesUpdate"
				/>
			</SpH3>
			<div v-if="balances.length < 1">Account balance appears to be empty.</div>
			<div class="list">
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
@import '../styles/main.css';

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
import SpH3 from './SpH3'
import IconSynchronization1 from './icons/IconSynchronization1'

export default {
	components: {
		SpH3,
		IconSynchronization1
	},
	category: 'wallet',
	computed: {
		address() {
			return this.$store.getters['common/session/address']
		},
		balances() {
			const query = 'cosmos/cosmos-sdk/bank/allBalances'
			const address = this.address
			const balances = this.$store.getters[query]({ address })
			return balances ? balances.balances : []
		}
	},
	watch: {
		'$store.state.common.session.client': async function() {
			this.balancesUpdate()
		}
	},
	methods: {
		numberFormat(number) {
			return Intl.NumberFormat().format(number)
		},
		balancesUpdate() {
			const query = 'cosmos/cosmos-sdk/bank/queryAllBalances'
			const address = this.address
			this.$store.dispatch(query, { address })
		}
	}
}
</script>
