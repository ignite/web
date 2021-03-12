<template>
	<div
		:class="[
			'chain-container',
			{
				'-is-loading': isLoading,
				'-has-higher': hasHigherBlocks,
				'-has-lower': hasLowerBlocks
			}
		]"
		v-if="depsLoaded"
	>
		<div ref="chain" :class="['chain']" @scroll="handleTableScroll">
			<div v-if="viewedBlocks" class="chain__blocks">
				<button
					v-for="block in viewedBlocks"
					:id="block.hash"
					:key="block.hash"
					:class="[
						'chain__block',
						{
							'-has-txs': block.details.data.txs.length > 0,
							'-is-active': block.hash === highlightedBlock.hash
						}
					]"
					@click="handleCardClicked"
				>
					<SpBlockCard
						:title="block.height"
						:note="getFmtTime(block.timestamp)"
						:is-active="block.hash === highlightedBlock.hash"
					>
						<div v-if="block.details.data.txs.length > 0" class="block-info">
							<span
								v-if="getFailedTxsCount(block.txDecoded) > 0"
								class="block-info__indicator"
							></span>
							<span class="block-info__text">{{
								getBlockNoteCopy(block.txDecoded.length, 'transaction')
							}}</span>
							·
							<span class="block-info__text">{{
								getBlockNoteCopy(getMsgsAmount(block.txDecoded), 'message')
							}}</span>
						</div>
					</SpBlockCard>
				</button>
			</div>
		</div>

		<button class="util-btn -top" @click="handleNavClick('top')">
			<SpArrow />
		</button>
	</div>
</template>

<script>
import dayjs from 'dayjs'

import axios from 'axios'

import SpBlockCard from '../SpBlockCard'
import SpArrow from '../../SpArrow'
function debounce(func, wait, immediate) {
	var timeout
	return function () {
		var context = this,
			args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}
export default {
	name: 'SpBlockchain',
	components: {
		SpBlockCard,
		SpArrow
	},
	props: {
		blocks: { type: Array, required: true }
	},
	data() {
		return {
			lastScrolledHeight: 0,
			lastScrolledTop: 0,
			isScrolledTop: false,
			isScrolledBottom: false,
			isScrolledAwayFromTop: false,
			isLoading: false,
			hasHigherBlocks: false,
			hasLowerBlocks: false,
			olderBlocks: [],
			localHighlightedBlock: null
		}
	},
	computed: {
		viewedBlocks() {
			return this.blocks.concat(this.olderBlocks)
		},
		latestBlock() {
			return this.viewedBlocks[0]
		},
		highlightedBlock() {
			return this.localHighlightedBlock || this.viewedBlocks[0]
		},
		depsLoaded() {
			return this._depsLoaded
		}
	},
	watch: {
		blocks(newList, oldList) {
			if (oldList.length >= 20) {
				this.olderBlocks.unshift(oldList[oldList.length - 1])
			}
		},
		highlightedBlock(newBlock, oldBlock) {
			if (newBlock != oldBlock) {
				this.$emit('block-selected', newBlock)
			}
		},
		hasLowerBlocks(newVal) {
			console.log(newVal)
			if (!newVal) {
				const start = this.olderBlocks[this.olderBlocks.length - 1].height
				if (!this.isLoading) {
					this.getLowerBlocks(start)
				}
			}
		}
	},
	beforeCreate() {
		const module = ['common', 'env']
		for (let i = 1; i <= module.length; i++) {
			let submod = module.slice(0, i)
			if (!this.$store.hasModule(submod)) {
				console.log('Module `common.env` has not been registered!')
				this._depsLoaded = false
				break
			}
		}
	},
	methods: {
		getFmtTime(time) {
			const momentTime = dayjs(time)
			const duration = dayjs.duration(dayjs().diff(momentTime))

			if (duration.as('years') >= 1) {
				return momentTime.format('MMM D YYYY, HH:mm:ss')
			} else if (duration.as('days') >= 1) {
				return momentTime.format('MMM D, HH:mm:ss')
			}
			return momentTime.format('HH:mm:ss')
		},
		getMsgsAmount(txs) {
			return txs
				.map((tx) => tx.body.messages.length)
				.reduce((accu, curr) => accu + curr)
		},
		getBlockNoteCopy(count, singularUnit) {
			return `${count} ${singularUnit}${count > 1 ? 's' : ''}`
		},
		getFailedTxsCount(txs) {
			return txs.filter((tx) => tx.meta.code > 0).length
		},
		getFormattedBlock(block) {
			return {
				blockMsg: {
					time_formatted: dayjs(block.timestamp).fromNow(true),
					time: block.timestamp,
					height: parseInt(block.height),
					proposer: `${block.details.header.proposer_address.slice(0, 10)}...`,
					blockHash_sliced: `${block.hash.slice(0, 15)}...`,
					blockHash: block.hash,
					txs: block.details.data.txs ? block.details.data.txs.length : 0
				},
				tableData: {
					id: block.height,
					isActive: false
				},
				txs: block.txsDecoded
			}
		},
		handleCardClicked(event) {
			const blockHash = event.currentTarget.id
			const blockPayload = this.viewedBlocks.find((x) => x.hash == blockHash)

			this.localHighlightedBlock = blockPayload
		},

		handleTableScroll: debounce(function (event) {
			const $table = event.target
			const scrolledHeight = $table.scrollTop + $table.offsetHeight
			const tableScrollHeight = $table.scrollHeight

			const isScrolledToTop = scrolledHeight <= $table.offsetHeight
			const isScrolledToBottom = scrolledHeight + 100 >= tableScrollHeight

			this.hasHigherBlocks = !isScrolledToTop
			this.hasLowerBlocks = !isScrolledToBottom

			// const isOnTopHalf = $table.scrollTop < (tableScrollHeight - $table.offsetHeight) / 2
			/*
			const isScrollAwayFromTop = scrolledHeight / tableScrollHeight > 0.2

			const isCallableScrolledDistance =
				$table.offsetHeight /
					Math.abs(scrolledHeight - this.lastScrolledHeight) >
				25

			if (isCallableScrolledDistance) {
				this.isScrolledAwayFromTop = isScrollAwayFromTop

				if (isScrolledToBottom) {
					this.isScrolledTop = false
					this.isScrolledBottom = true
					this.handleScrollBottom()
				}
				if (isScrolledToTop) {
					this.isScrolledTop = true
					this.isScrolledBottom = false
					this.handleScrollTop()
				}
			}
			*/
		}, 250),
		/*
     *
     // Pop overloaded blocks (over maxStackCount)
     // only when scrolling to upperhalf of the table
     *
     */
		async getHigherBlocks() {
			if (!this.latestBlock) return

			const isShowingLatestBlock =
				parseInt(this.latestBlock.height) === this.stackChainRange.highestHeight

			if (!isShowingLatestBlock && !this.isLoading) {
				this.isLoading = true
				if (this._depsLoaded) {
					await this.getBlockchain({
						blockHeight: this.stackChainRange.highestHeight,
						toGetLowerBlocks: false
					}).then(() => {
						this.isLoading = false
						this.setHasHigherBlocksState()
						setTimeout(() => {
							this.$refs.chain.scrollBy({
								top: 24,
								left: 0,
								behavior: 'smooth'
							})
						}, 100)
					})
				}
			}
		},
		/*
     *
     // Load extra 20 blocks
     // only when scrolling to bottom of the table
     *
     */
		async getLowerBlocks(start) {
			if (this._depsLoaded) {
				this.isLoading = true
				let i = 1
				while (i <= 20 && start - i > 0) {
					const resp = await axios.get(
						this.$store.getters['common/env/apiTendermint'] +
							'/block?height=' +
							(start - i)
					)
					const block = {
						height: resp.data.result.block.header.height,
						timestamp: resp.data.result.block.header.time,
						hash: resp.data.result.block_id.hash,
						details: resp.data.result.block
					}

					this.olderBlocks.push(block)
					i++
				}
				this.isLoading = false

				this.$refs.chain.scrollBy({
					bottom: 24,
					left: 0,
					behavior: 'smooth'
				})
			}
		},
		handleScrollTop() {
			this.getHigherBlocks()
		},
		handleScrollBottom() {
			this.getLowerBlocks()
		},
		handleNavClick(dir) {
			if (dir === 'top' && this.hasHigherBlocks) {
				this.getHigherBlocks()
				this.$refs.chain.scrollTo(0, 0)
			}
		},
		setHasHigherBlocksState() {
			/*
			if (
				(this.isScrolledAwayFromTop && !this.isScrolledTop)
			) {
				this.hasHigherBlocks = true
			} else {
				this.hasHigherBlocks = false
			}
			*/
		},
		setHasLowerBlocksState() {
			/*
			if (this.stackChainRange.highestHeight !== 1) {
				this.hasLowerBlocks = true
			} else {
				this.hasLowerBlocks = false
			}
			*/
		}
	}
}
</script>

<style scoped>
.chain-container {
	position: relative;
	height: inherit;
}

.chain {
	--bg-offset: 0.5rem;
}

.chain {
	position: relative;
	min-height: calc(100% - 0rem);
	max-height: calc(100% - 0rem);
	overflow-y: scroll;
	overflow-x: visible;

	background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),
		linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
		radial-gradient(
			farthest-side at 50% 0,
			rgba(0, 0, 0, 0.05),
			rgba(0, 0, 0, 0)
		),
		radial-gradient(
				farthest-side at 50% 100%,
				rgba(0, 0, 0, 0.05),
				rgba(0, 0, 0, 0)
			)
			0 100%;
	background-repeat: no-repeat;
	background-size: 100% 24px, 100% 24px, 100% 24px, 100% 24px;
	background-attachment: local, local, scroll, scroll;
}
.chain::-webkit-scrollbar {
	width: 0px;
}

.chain__block {
	cursor: pointer;
	position: relative;
	width: 100%;
	padding-left: var(--sp-g-offset-side);
	padding-right: var(--bg-offset);
}
.chain__block:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: calc(var(--sp-g-offset-side) - var(--bg-offset));
	width: calc(100% - var(--sp-g-offset-side));
	height: 1px;
	background-color: var(--sp-c-border-primary);
}
.chain__block:before {
	content: '';
	position: absolute;
	z-index: 2;
	top: -3px;
	left: calc(var(--sp-g-offset-side) - 1.85rem);
	width: 4px;
	height: calc(100% + 6px);
	background-color: var(--sp-c-txt-highlight);
	opacity: 0;
	transition: opacity 0.3s ease-in;
}
.chain__block.-is-active:before {
	opacity: 1;
	transition: opacity 0.3s ease-in-out;
}
.chain__block ::v-deep(.card) {
	margin-right: 1rem;
}
.chain__block.-has-txs ::v-deep(.card__title) {
	color: var(--sp-c-txt-highlight);
}
@media only screen and (max-width: 992px) {
	.chain__block:before {
		left: calc(var(--sp-g-offset-side) - 1.5rem);
	}
}

.block-info__text:first-child {
	font-weight: var(--sp-f-w-medium);
	color: var(--sp-c-txt-secondary);
}
.block-info__text:last-child {
	color: var(--sp-c-txt-third);
}
.block-info__indicator {
	display: inline-block;
	width: 5px;
	height: 5px;
	border-radius: 100%;
	background-color: var(--sp-c-txt-danger);
	margin-right: 6px;
	transform: translate3d(0, -2px, 0);
}

.util-btn {
	position: absolute;
	top: -0.8rem;
	left: calc((100% - var(--sp-g-offset-side)) / 2 + 22px);
	width: 22px;
	height: 22px;
	background-color: var(--sp-c-bg-primary);
	border-radius: 100%;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 0.5px 3px rgba(0, 0, 0, 0.1),
		0px 1.25px 6px rgba(0, 3, 66, 0.08);
}
.util-btn.-btm {
	top: auto;
	bottom: 1rem;
	transform: rotate(180deg);
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.07), 0px 0.5px 3px rgba(0, 0, 0, 0.1),
		0px 1.25px 6px rgba(0, 3, 66, 0.08);
}
.util-btn {
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s;
}
.chain-container.-has-higher .util-btn.-top,
.chain-container.-has-lower .util-btn.-btm {
	opacity: 1;
	pointer-events: initial;
	transition: opacity 0.3s;
}
</style>
