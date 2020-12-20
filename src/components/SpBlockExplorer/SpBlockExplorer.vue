<template>
	<transition key="default" name="sp-fade" mode="out-in">
		<div v-if="!isBlocksStackEmpty && isBackendAlive" class="explorer">
			<FullWidthContainer>
				<div slot="sideSheet" class="explorer__block">
					<transition name="sp-fadeMild" mode="out-in">
						<BlockDetailSheet
							v-if="highlightedBlock"
							:key="blockSheetKey"
							:block="highlightedBlock"
						/>
					</transition>
				</div>
				<div slot="mainContent" class="explorer__chain">
					<div class="explorer__chain-header">Blocks</div>
					<div class="explorer__chain-main">
						<BlockChain :blocks="fmtBlockData" />
					</div>
				</div>
			</FullWidthContainer>
		</div>

		<div v-else key="empty" class="explorer -is-empty">
			<div class="explorer__container">
				<IconBox />
				<p>Generating blocks</p>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import blockHelpers from '../../helpers/block'

import FullWidthContainer from './FullWidthContainer'
import BlockDetailSheet from './BlockDetailSheet'
import BlockChain from './BlockChain'
import IconBox from '../icons/Box'

export default {
	components: {
		FullWidthContainer,
		BlockChain,
		BlockDetailSheet,
		IconBox
	},
	data() {
		return {
			states: {
				isScrolledInTopHalf: true,
				isLoading: false
			}
		}
	},
	computed: {
		/*
		 *
		 * Vuex
		 *
		 */
		...mapGetters('cosmos', [
			'highlightedBlock',
			'blocksStack',
			'lastBlock',
			'stackChainRange',
			'latestBlock',
			'appEnv',
			'backendRunningStates'
		]),
		/*
		 *
		 * Local
		 *
		 */
		blockSheetKey() {
			if (this.highlightedBlock && this.highlightedBlock.data) {
				return this.highlightedBlock.data.blockMsg.blockHash
			}
			return ''
		},
		fmtBlockData() {
			const fmtgetFormattedBlock = blockHelpers.getFormattedBlock(
				this.blocksStack
			)

			if (!fmtgetFormattedBlock) return null

			return fmtgetFormattedBlock
		},
		isBlocksStackEmpty() {
			return (
				this.blocksStack.length <= 0 ||
				!this.fmtBlockData ||
				(this.fmtBlockData && this.fmtBlockData.length <= 0)
			)
		},
		isBackendAlive() {
			return this.backendRunningStates.api
		}
	},
	beforeDestroy() {
		if (this.latestBlock) {
			this.getBlockchain({
				blockHeight: this.latestBlock.height,
				toReset: true,
				toGetLowerBlocks: true
			})
		}
	},
	methods: {
		/*
		 *
		 * Vuex
		 *
		 */
		...mapMutations('cosmos', ['popOverloadBlocks']),
		...mapActions('cosmos', ['addBlockEntry', 'getBlockchain']),
		/*
		 *
		 * Local
		 *
		 */
		/*
     *
     // Pop overloaded blocks (over maxStackCount)
     // only when scrolling to upperhalf of the table
     *
     */
		async handleScrollTop() {
			this.states.isScrolledInTopHalf = true
			if (!this.latestBlock) return

			const isShowingLatestBlock =
				parseInt(this.latestBlock.height) === this.stackChainRange.highestHeight

			if (!isShowingLatestBlock && !this.states.isLoading) {
				this.states.isLoading = true

				await this.getBlockchain({
					blockHeight: this.stackChainRange.highestHeight,
					toGetLowerBlocks: false
				}).then(() => (this.states.isLoading = false))
			}
		},
		/*
     *
     // Load extra 20 blocks
     // only when scrolling to bottom of the table
     *
     */
		async handleScrollBottom() {
			this.states.isScrolledInTopHalf = false
			this.states.isLoading = true

			await this.getBlockchain({
				blockHeight: this.lastBlock.height,
				toGetLowerBlocks: true
			}).then(() => (this.states.isLoading = false))
		}
	}
}
</script>

<style scoped>
@import '../../styles/main.css';

.explorer {
	--top-offset: 2.25rem;
}
.explorer {
	font-family: var(--sp-f-primary);
	height: 100vh;
	padding-top: 2.25rem;
}
@media only screen and (max-width: 992px) {
	.explorer {
		--top-offset: 1.5rem;
	}
}

.explorer__chain {
	height: inherit;
}
.explorer__chain-main {
	height: calc(100% - 40px);
}
.explorer__chain-header {
	font-size: 3.1875rem;
	font-weight: var(--sp-f-w-bold);
	margin-bottom: 2rem;
	padding-left: calc(var(--sp-g-offset-side) - 4px);
}
@media only screen and (max-width: 992px) {
	.explorer__chain-header {
		margin-bottom: 1rem;
	}
}

.explorer__block {
	height: 100%;
	min-width: 400px;
}

.explorer.-is-empty {
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--sp-c-txt-light);
	animation: tempLoading 5s ease-in-out infinite;
}
.explorer.-is-empty .explorer__container svg {
	display: block;
	margin: 0 auto 0.5rem auto;
}
.explorer.-is-empty .explorer__container svg >>> path {
	fill: var(--sp-c-txt-light);
	fill-opacity: 1;
}
@keyframes tempLoading {
	0%,
	100% {
		opacity: 0.3;
	}
	50% {
		opacity: 0.8;
	}
	75% {
		opacity: 0.8;
	}
}
</style>
