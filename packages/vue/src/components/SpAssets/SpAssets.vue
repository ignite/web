<template>
	<div class="sp-assets">
		<div class="sp-assets__header sp-component-title">
			<h3>Assets</h3>
		</div>
		<div class="sp-assets__main sp-box">
			<div class="sp-assets__main__header" v-if="address">
				<div class="sp-assets__main__header__token">TOKEN</div>
				<div class="sp-assets__main__header__amount">AMOUNT</div>
			</div>
			<div class="sp-assets__main__header" v-else>
				<div class="sp-assets__main__header__message">
					Add or unlock a wallet to see your balances
				</div>
			</div>
			<template v-if="!address">
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
					{{ balance.denom.toUpperCase() }}
				</div>
				<div class="sp-assets__main__denom__balance">
					{{ balance.amount }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SpAssets',
	props: {
		balances: Array
	},
	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		},
		fullBalances() {
			return this.balances.map((x) => {
				x.color = this.str2rgba(x.denom.toUpperCase())
				return x
			})
		}
	},
	methods: {
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
}
</script>
