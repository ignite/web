<template>
	<section>
		<header class='assets-header'>
			<SpHeading level='1'>Assets</SpHeading>
		</header>
		<table class='assets-table'>
			<tbody>
				<tr v-for='balance in balances' :key='balance' class='assets-table__row'>
					<td class='assets-table__denom'>
						<div class="sp-denom-marker">
							{{balance.denom.charAt(0).toUpperCase()}}
						</div>
						{{ balance.denom.toUpperCase() }}
					</td>
					<td class='assets-table__amount'>
						{{ new Intl.NumberFormat('en-GB').format(balance.amount) }}
					</td>
				</tr>
			</tbody>
		</table>

	</section>
</template>

<script lang="ts">
/**
 * SpAssets Component
 *
 * This component displays the current account balance.
 */

import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from "vuex"

import SpHeading from '../basic/typography/SpHeading'

export default defineComponent({
	name: 'SpAssets',
	components: { SpHeading },
	setup() {
		// Access store via useStore hook.
		const store = useStore()
		const address = 'cosmos1kqg0yeunkkc9r67shyfv7r8k0ddaqzndug8ej5'

		onMounted(async () => {
			await store.dispatch('cosmos.bank.v1beta1/QueryAllBalances', {
				params: { address: address },
				options: { all: true, subscribe: true },
			})
		})

		// computed
		let balances = computed(() => {
			return (
				store.getters['cosmos.bank.v1beta1/getAllBalances']({
					params: { address: address }
				})?.balances ?? []
			)
		})



		return {
			balances
		}
	}

})
</script>

<style lang='scss'>
.assets-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.assets-table {
	width: 100%;

	&__denom {
		border-top-left-radius: .75rem;
		border-bottom-left-radius: .75rem;
		vertical-align: middle;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
	}

	&__amount {
		border-top-right-radius: .75rem;
		border-bottom-right-radius: .75rem;
		vertical-align: middle;
		text-align: right;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
	}
}
.sp-denom-marker {
	display: inline-block;
	height: 2rem;
	width: 2rem;
	vertical-align: middle;
	margin-right: 0.8rem;
	background: radial-gradient(83.33% 83.33% at 16.67% 16.67%, #F5F5F5 0%, #D7D7D7 42.19%, #FDFDFD 100%);
	box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.62);
	border-radius: 24px;
	text-align: center;
}
</style>
