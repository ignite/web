<template>
	<div class="sp-component sp-transfer-list" v-if="depsLoaded">
		<div class="sp-transfer-list__header sp-component-title">
			<h3>Transfer list</h3>
			<span>|</span>
			<span>A list of your recent transfers</span>
		</div>
		<table
			class="sp-transfer-list__table sp-box"
			v-if="address && transactions.length > 0"
		>
			<thead>
				<tr>
					<th class="sp-transfer-list__status">STATUS</th>
					<th class="sp-transfer-list__table__address">ADDRESS</th>
					<th class="sp-transfer-list__table__amount">AMOUNT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tx in transactions" v-bind:key="tx.response.hash">
					<td class="sp-transfer-list__status">
						<div class="sp-transfer-list__status__wrapper">
							<div
								class="sp-transfer-list__status__icon"
								:class="{
									'sp-transfer-list__status__icon__failed':
										tx.response.code != 0,
									'sp-transfer-list__status__icon__sent':
										tx.response.code == 0 &&
										tx.body.messages[0].from_address == bankAddress,
									'sp-transfer-list__status__icon__received':
										tx.response.code == 0 &&
										tx.body.messages[0].to_address == bankAddress
								}"
							>
								<span
									class="sp-icon"
									:class="{
										'sp-icon-Close': tx.response.code != 0,
										'sp-icon-UpArrow':
											tx.response.code == 0 &&
											tx.body.messages[0].from_address == bankAddress,
										'sp-icon-DownArrow':
											tx.response.code == 0 &&
											tx.body.messages[0].to_address == bankAddress
									}"
								/>
							</div>
							<div class="sp-transfer-list__status__action">
								<div class="sp-transfer-list__status__action__text">
									{{
										tx.response.code == 0
											? tx.body.messages[0].from_address == bankAddress
												? 'Sent To'
												: 'Received From'
											: 'Failed'
									}}
								</div>
								<div class="sp-transfer-list__status__action__date">
									{{ getFmtTime(tx.response.timestamp) }}
								</div>
							</div>
						</div>
					</td>
					<td class="sp-transfer-list__table__address">
						{{
							tx.body.messages[0].from_address == bankAddress
								? tx.body.messages[0].to_address
								: tx.body.messages[0].from_address
						}}
					</td>
					<td class="sp-transfer-list__table__amount">
						<div
							v-for="(token, index) in tx.body.messages[0].amount"
							v-bind:key="'am' + index"
						>
							{{
								tx.body.messages[0].from_address == bankAddress
									? '-' + token.amount + ' ' + token.denom.toUpperCase()
									: '+' + token.amount + ' ' + token.denom.toUpperCase()
							}}
						</div>
					</td>
				</tr>
			</tbody>
		</table>

		<table class="sp-transfer-list__table sp-box" v-else>
			<tbody>
				<tr>
					<td class="sp-transfer-list__status">
						<div class="sp-transfer-list__status__wrapper">
							<div
								class="sp-transfer-list__status__icon sp-transfer-list__status__icon__empty"
							>
								<span class="sp-icon sp-icon-Transactions" />
							</div>
							<div class="sp-transfer-list__status__action">
								<div class="sp-transfer-list__status__action__text">
									No transactions yet
								</div>
								<div
									class="sp-transfer-list__status__action__date"
									v-if="!address"
								>
									Add or unlock a wallet to see recent transactions
								</div>
							</div>
						</div>
					</td>
					<td class="sp-transfer-list__table__address"></td>
					<td class="sp-transfer-list__table__amount"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import dayjs from 'dayjs'

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
		sentTransactions() {
			return this.$store.getters['common/transfers/getGetTxsEvent']({
				event: 'transfer.sender%3D%27' + this.bankAddress + '%27'
			})
		},
		receivedTransactions() {
			return this.$store.getters['common/transfers/getGetTxsEvent']({
				event: 'transfer.recipient%3D%27' + this.bankAddress + '%27'
			})
		},
		transactions() {
			let sent =
				this.sentTransactions.txs?.map((tx, index) => {
					tx.response = this.sentTransactions.tx_responses[index]
					return tx
				}) ?? []
			let received =
				this.receivedTransactions.txs?.map((tx, index) => {
					tx.response = this.receivedTransactions.tx_responses[index]
					return tx
				}) ?? []
			return [...sent, ...received].sort(
				(a, b) => b.response.height - a.response.height
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
				await this.$store.dispatch('common/transfers/ServiceGetTxsEvent', {
					subscribe: true,
					event: 'transfer.sender%3D%27' + this.bankAddress + '%27'
				})
				await this.$store.dispatch('common/transfers/ServiceGetTxsEvent', {
					subscribe: true,
					event: 'transfer.recipient%3D%27' + this.bankAddress + '%27'
				})
			}
		}
	},
	methods: {
		getFmtTime(time) {
			const momentTime = dayjs(time)
			return momentTime.format('D MMM, YYYY')
		}
	},
	watch: {
		address: function (newAddr, oldAddr) {
			if (newAddr != oldAddr && this._depsLoaded) {
				this.bankAddress = newAddr
				if (this.bankAddress != '') {
					this.$store.dispatch('common/transfers/ServiceGetTxsEvent', {
						subscribe: true,
						event: 'transfer.sender%3D%27' + this.bankAddress + '%27'
					})
					this.$store.dispatch('common/transfers/ServiceGetTxsEvent', {
						subscribe: true,
						event: 'transfer.recipient%3D%27' + this.bankAddress + '%27'
					})
				}
			}
		}
	}
}
</script>
