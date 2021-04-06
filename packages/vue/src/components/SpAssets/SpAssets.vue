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
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'SpAssets',
	props: {
		balances: Array
	},
	data() {
		return {
			denomTraces: {}
		}
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		},
		fullBalances() {
			return this.balances.map((x) => {
				this.addMapping(x)
				x.color = this.str2rgba(x.denom.toUpperCase())
				return x
			})
		}
	},
	methods: {
		async addMapping(balance) {
			if (balance.denom.indexOf('ibc/') == 0) {
				let denom = balance.denom.split('/')
				let hash = denom[1]
				this.denomTraces[hash] = await this.$store.dispatch(
					'ibc.applications.transfer.v1/QueryDenomTrace',
					{
						options: { subscribe: false, all: false },
						params: { hash }
					}
				)
			}
		},
		str2rgba(r) {
			for (var a, o = [], c = 0; c < 256; c++) {
				a = c
				for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1
				o[c] = a
			}
			for (var n = -1, t = 0; t < r.length; t++)
				n = (n >>> 8) ^ o[255 & (n ^ r.charCodeAt(t))]
			return ((-1 ^ n) >>> 0).toString(16)
		}
	}
})
</script>
