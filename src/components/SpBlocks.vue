<template>
	<div v-if="blocks.length > 0" class="explorer">
		<FullWidthContainer>
			<template v-slot:sideSheet>
				<div class="explorer__block">
					<div class="detailSheet">
						ff
					</div>
				</div>
			</template>
			<template v-slot:mainContent>
				<div class="explorer__chain">
					<div class="explorer__chain-header">Blocks</div>
					<div class="explorer__chain-main">
						<BlockChain />
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
	<div></div>
</template>
<script>
import BlockChain from './legacy_SpBlockExplorer/BlockChain'
import FullWidthContainer from './legacy_SpBlockExplorer/FullWidthContainer'
import IconBox from './icons/Box'

export default {
	components: {
		FullWidthContainer,
		BlockChain,
		IconBox
	},
	computed: {
		blocks() {
			return this.$store.getters['chain/common/blocks/getBlocks'](10)
		}
	}
}
</script>

<style scoped>
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
