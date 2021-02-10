<template>
	<transition key="default" name="sp-fade" mode="out-in">
		<div v-if="blocks.length >= 20" class="explorer">
			<FullWidthContainer>
				<template v-slot:sideSheet>
					<div class="explorer__block">
						<transition name="sp-fadeMild" mode="out-in">
							<BlockDetailSheet
								v-if="states.highlightedBlock"
								:key="blockSheetKey"
								:block="states.highlightedBlock"
							/>
						</transition>
					</div>
				</template>
				<template v-slot:mainContent>
					<div class="explorer__chain">
						<div class="explorer__chain-header">Blocks</div>
						<div class="explorer__chain-main">
							<BlockChain :blocks="blocks" v-on:block-selected="setBlock" />
						</div>
					</div>
				</template>
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
/*
import { mapGetters, mapMutations, mapActions } from 'vuex'
import blockHelpers from '../../helpers/block'
*/

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
				isLoading: false,
				highlightedBlock: {}
			}
		}
	},
	computed: {
		blocks() {
			return this.$store.getters['chain/common/blocks/getBlocks'](20)
		},

		blockSheetKey() {
			if (this.highlightedBlock && this.highlightedBlock.data) {
				return this.highlightedBlock.data.blockMsg.blockHash
			}
			return ''
		}
	},
	methods: {
		setBlock(block) {
			console.log('here')
			this.states.highlightedBlock = block
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
	height: calc(100vh - 84px);
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
