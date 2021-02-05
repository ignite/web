<template>
	<div v-if="!block.data" :class="['sheet -is-empty']">Fetching block data</div>

	<div v-else class="sheet">
		<div class="sheet__header">
			<div class="sheet__header-main">
				<p>{{ block.data.blockMsg.height }}</p>
			</div>
			<div class="sheet__header-side">
				<div class="sheet__header-side-top">
					<CopyIconText
						class="copy-icon-text"
						:text="block.data.blockMsg.blockHash"
						:link="
							`${appEnv.RPC}/block_by_hash?hash=0x${block.data.blockMsg.blockHash}`
						"
						:copy-content="block.data.blockMsg.blockHash"
						:tooltip-text="'BlockHash is copied'"
					/>
				</div>
				<div class="sheet__header-side-btm">
					<span>{{ getFmtTime(block.data.blockMsg.time) }}</span>
				</div>
			</div>
		</div>

		<div class="sheet__main">
			<div
				v-if="block.data.blockMsg.txs > 0 && block.data.txs.length > 0"
				class="txs"
			>
				<div class="txs__header">
					<p class="txs__header-title">Transactions</p>
					<p class="txs__header-note">
						<span>{{ block.data.txs.length }}</span>
						<span v-if="failedTxsCount"> / </span>
						<span v-if="failedTxsCount" class="txs__header-note-warn"
							>{{ failedTxsCount }} error</span
						>
					</p>
				</div>

				<div
					v-for="(tx, txIndex) in block.data.txs"
					:key="txIndex + tx.txhash"
					class="txs__tx tx"
				>
					<div class="tx__main">
						<div v-if="tx.meta.code" class="tx__error">
							<span class="tx__error-title">Error</span>
							<p class="tx__error-msg">{{ tx.meta.log }}</p>
						</div>

						<div class="tx__main-cards">
							<YamlCards
								:contents="tx.body.messages"
								:card-type="
									getCardCounts(tx.body.messages) > 1 ? 'Messages' : 'Message'
								"
							/>
							<!-- <YamlCards
								:contents="getEvents(tx)"
								:card-type="
									getCardCounts(getEvents(tx)) > 1 ? 'Events' : 'Event'
								"
							/> -->
						</div>
					</div>
					<div class="tx__side">
						<div class="tx__info">
							<p class="tx__title">Tx Info</p>

							<div class="tx__info-container">
								<div class="tx__info-content tx-info">
									<span class="tx-info__title">Hash</span>
									<CopyIconText
										class="copy-icon-text"
										:text="tx.txHash"
										:link="`${appEnv.RPC}/tx?hash=0x${tx.txHash}`"
										:copy-content="tx.txHash"
										:tooltip-text="'TxHash is copied'"
										:tooltip-direction="'left'"
									/>
								</div>
								<div class="tx__info-content tx-info">
									<span class="tx-info__title">Gas Used / Wanted</span>
									<p class="tx-info__content">
										{{ `${tx.meta.gas_used} / ${tx.meta.gas_wanted}` }}
									</p>
								</div>
								<div class="tx__info-content tx-info">
									<span class="tx-info__title">Fee</span>
									<p class="tx-info__content">{{ getTxFee(tx) }}</p>
								</div>
								<div v-if="tx.body.memo" class="tx__info-content tx-info">
									<span class="tx-info__title">Memo</span>
									<p class="tx-info__content">{{ tx.body.memo }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="txs -is-empty">
				<p>0 Transactions</p>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

import CopyIconText from './CopyIconText'
import YamlCards from './YamlCards'

export default {
	components: {
		CopyIconText,
		YamlCards
	},
	props: {
		block: { type: Object, required: true }
	},
	computed: {
		...mapGetters('cosmos', ['appEnv']),
		failedTxsCount() {
			return this.block.data.txs.filter(tx => tx.meta.code).length
		}
	},
	methods: {
		getFmtTime(time) {
			const momentTime = moment(time)
			return momentTime.format('MMM D YYYY, HH:mm:ss')
		},
		getTxFee(tx) {
			const amount = tx.auth_info.fee.amount
			if (!amount) return 'N/A'

			return amount.length < 1 ? '0' : `${amount[0].amount} ${amount[0].denom}`
		},
		getEvents(tx) {
			return tx.logs.flatMap(log => log.events)
		},
		getCardCounts(contents) {
			return contents.length
		}
	}
}
</script>

<style scoped>
.sheet {
	height: 100%;
	padding-right: var(--sp-g-offset-side);
	display: flex;
	flex-direction: column;
}
.sheet {
	overflow-y: scroll;
}
.sheet::-webkit-scrollbar {
	width: 0px;
}

.sheet.-is-empty {
	display: flex;
	align-items: center;
	justify-content: center;
	animation: tempLoadingEffect 1.5s ease-in-out infinite;
}
@keyframes tempLoadingEffect {
	0% {
		color: var(--sp-c-txt-grey);
	}
	50% {
		color: var(--sp-c-txt-secondary);
	}
	100% {
		color: var(--sp-c-txt-grey);
	}
}

.sheet__header {
	display: flex;
	align-items: center;
	margin-bottom: 2.5rem;
}

.sheet__header-main {
	margin-right: 1.5rem;
}
.sheet__header-main p {
	font-size: 3.1875rem;
	font-weight: var(--sp-f-w-bold);
}

.sheet__header-side-top {
	margin-bottom: 4px;
}
.sheet__header-side-top .copy-icon-text {
	max-width: 50%;
}

.sheet__header-side-btm {
	margin-bottom: 4px;
}
.sheet__header-side-btm span {
	font-size: 0.8125rem;
	color: var(--sp-c-txt-secondary);
}
.sheet__main {
	height: 100%;
}

.txs {
	height: 100%;
}
.txs.-is-empty {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}
.txs.-is-empty p {
	font-size: 2rem;
	font-weight: var(--sp-f-w-light);
	color: var(--sp-c-txt-gray);
	margin-bottom: 5rem;
}

.txs__header {
	display: flex;
	align-items: flex-end;
	margin-left: 2px;
	margin-bottom: 1.5rem;
}
.txs__header-title {
	font-size: 1.3125rem;
	font-weight: var(--sp-f-w-medium);
	margin-right: 0.85rem;
}
.txs__header-note {
	font-size: 1rem;
	color: var(--sp-c-txt-third);
	margin-bottom: 1.8px;
}
.txs__header-note-warn {
	color: var(--sp-c-txt-danger);
}
@media only screen and (max-width: 992px) {
	.txs__header {
		margin-left: 0;
	}
}

.tx {
	display: flex;
	margin-bottom: 3rem;
}
.tx:not(:last-child) {
	padding-bottom: 3rem;
	border-bottom: 1px solid var(--sp-c-border-primary);
}
.tx__main {
	flex-grow: 1;
	margin-right: 3rem;
}
.tx__main-cards > *:not(:last-child) {
	margin-bottom: 1.5rem;
}
.tx__side {
	width: 15vw;
	max-width: 180px;
}
.tx__error {
	color: var(--sp-c-txt-danger);
	padding: 1.25rem 1.5rem;
	border-radius: 12px;
	background-color: var(--sp-c-bg-danger);
	margin-bottom: 1.5rem;
}
.tx__error-title {
	display: block;
	font-size: 0.75rem;
	font-weight: var(--sp-f-w-bold);
	text-transform: uppercase;
	margin-bottom: 0.5rem;
}
.tx__error-msg {
	font-size: 0.875rem;
}
.tx__title {
	font-weight: var(--sp-f-w-medium);
	font-size: 0.75rem;
	line-height: 130.9%;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--sp-c-txt-third);
	margin-bottom: 0.85rem;
}
@media only screen and (max-width: 992px) {
	.tx {
		flex-direction: column-reverse;
	}
	.tx__side {
		width: 100%;
		max-width: 100%;
		margin-bottom: 2rem;
	}
	.tx__main {
		width: 100%;
	}
}

.tx-info:not(:last-child) {
	margin-bottom: 1.5rem;
}
.tx-info__title {
	display: inline-block;
	/* font-weight: var(--sp-f-w-medium); */
	font-size: 0.75rem;
	line-height: 130.9%;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--sp-c-txt-third);
	margin-bottom: 4px;
}
.tx-info__content {
	color: var(--sp-c-txt-secondary);
}
@media only screen and (max-width: 992px) {
	.tx-info:not(:last-child) {
		margin-bottom: 1rem;
	}
	.tx-info:first-child {
		max-width: 50%;
	}
}

.copy-icon-text >>> a {
	font-family: var(--sp-f-secondary);
}
</style>
