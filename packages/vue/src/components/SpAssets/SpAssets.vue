<template>
	<div class="sp-assets">
		<div class="sp-assets__header sp-component-title">
			<h3>Assets</h3>
		</div>
		<div class="sp-assets__main sp-box sp-shadow">
			<div class="sp-assets__main__header" v-if="address">
				<div class="sp-assets__main__header__token">TOKEN</div>
				<div class="sp-assets__main__header__amount">AMOUNT</div>
			</div>
			<div class="sp-assets__main__header" v-else>
				<div class="sp-assets__main__header__message">
					Your current account balance will appear here
				</div>
			</div>

			<!-- Empty Assets -->
			<template v-if="!address || fullBalances.length == 0">
				<div class="sp-assets__main__item">
					<div class="sp-assets__main__denom__name">
						<div class="sp-denom-marker" style="background: #809cff" />
						<div class="sp-dummy-fill" />
					</div>
					<div class="sp-assets__main__denom__balance">
						<div class="sp-dummy-fill" />
					</div>
				</div>
				<div class="sp-assets__main__item">
					<div class="sp-assets__main__denom__name">
						<div class="sp-denom-marker" style="background: #80d1ff" />
						<div class="sp-dummy-fill" />
					</div>
					<div class="sp-assets__main__denom__balance">
						<div class="sp-dummy-fill" />
					</div>
				</div>
				<div class="sp-assets__main__item">
					<div class="sp-assets__main__denom__name">
						<div class="sp-denom-marker" style="background: #ffbd80" />
						<div class="sp-dummy-fill" />
					</div>
					<div class="sp-assets__main__denom__balance">
						<div class="sp-dummy-fill" />
					</div>
				</div>
			</template>

			<div
				class="sp-assets__main__item"
				v-for="balance in fullBalances"
				v-bind:key="'denom_' + balance.denom"
			>
				<div class="sp-assets__main__denom__name">
					<div
						class="sp-denom-marker"
						:style="'background: #' + balance.color"
					/>
					<template v-if="balance.denom.indexOf('ibc/') == 0">
						IBC/{{
							denomTraces[
								balance.denom.split('/')[1]
							]?.denom_trace.path.toUpperCase() ?? ''
						}}/{{
							denomTraces[
								balance.denom.split('/')[1]
							]?.denom_trace.base_denom.toUpperCase() ?? 'UNKNOWN'
						}}
					</template>
					<template v-else>
						{{ balance.denom.toUpperCase() }}
					</template>
				</div>
				<div class="sp-assets__main__denom__balance">
					{{ balance.amount }}
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface Amount {
	amount: number
	denom: string
}
export interface DenomTraces {
	[key: string]: string
}
export interface SpAmountSelectState {
	denomTraces: DenomTraces
}
export type ColoredAmount = Amount & { color: string }
export default defineComponent({
	name: 'SpAssets',
	props: {
		balances: Array as PropType<Array<Amount>>
	},
	data() {
		return {
			denomTraces: {} as DenomTraces
		}
	},
	computed: {
		address: function (): string {
			return this.$store.getters['common/wallet/address']
		},
		fullBalances(): Array<ColoredAmount> {
			return (
				this.balances?.map((x: Amount) => {
					this.addMapping(x)
					const y: ColoredAmount = { amount: 0, denom: '', color: '' }
					y.amount = x.amount
					y.denom = x.denom
					y.color = this.str2rgba(x.denom.toUpperCase())
					return x as ColoredAmount
				}) ?? []
			)
		}
	},
	methods: {
		async addMapping(balance: Amount) {
			if (balance.denom.indexOf('ibc/') == 0) {
				const denom = balance.denom.split('/')
				const hash = denom[1]
				this.denomTraces[hash] = await this.$store.dispatch(
					'ibc.applications.transfer.v1/QueryDenomTrace',
					{
						options: { subscribe: false, all: false },
						params: { hash }
					}
				)
			}
		},
		str2rgba(r: string) {
			const o = []
			for (let a, c = 0; c < 256; c++) {
				a = c
				for (let f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1
				o[c] = a
			}
			let n = -1
			for (let t = 0; t < r.length; t++)
				n = (n >>> 8) ^ o[255 & (n ^ r.charCodeAt(t))]
			return ((-1 ^ n) >>> 0).toString(16)
		}
	}
})
</script>
