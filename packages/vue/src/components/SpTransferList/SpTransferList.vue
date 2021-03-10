<template>
	<div class="sp-transfer-list" v-if="depsLoaded">
		<div class="sp-transfer-list__header">
			<h3>Transfer List</h3>
			| A list of your recent transfers
		</div>
		<table class="sp-transfer-list__table">
			<thead>
				<tr>
					<th>STATUS</th>
					<th>ADDRESS</th>
					<th>AMOUNT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tx in transactions[1]" v-bind:key="tx.hash">
					<td>
						{{ tx.height }}
					</td>
					<td>
						{{ tx.hash }}
					</td>
					<td>
						{{ JSON.parse(tx.tx_result.log) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: 'SpTransferList',
	props: { address: String, refresh: Boolean },
	data: function () {
		return {
			bankAddress: ''
		}
	},
	computed: {
		depsLoaded() {
			return this._depsLoaded
		},
		transactions() {
			console.log('here')
			return this.$store.getters['common/transfers/getTransactions'](
				this.bankAddress
			)
		}
	},
	beforeCreate() {
		const module = ['common', 'transfers']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module ' + this.modulePath + ' has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	async created() {
		if (this._depsLoaded) {
			this.bankAddress = this.address
			if (this.bankAddress != '') {
				await this.$store.dispatch('common/transfers/QueryTransactions', {
					subscribe: true,
					address: this.bankAddress,
					page: 1
				})
			}
		}
	},

	watch: {
		address: function (newAddr, oldAddr) {
			if (newAddr != oldAddr && this._depsLoaded) {
				this.bankAddress = newAddr
				if (this.bankAddress != '') {
					this.$store.dispatch('common/transfers/QueryTransactions', {
						subscribe: true,
						address: this.bankAddress,
						page: 1
					})
				}
			}
		}
	}
}
</script>
