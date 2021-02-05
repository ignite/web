<template>
	<div :class="['cards', ...wrapperState]">
		<p class="cards__title">{{ contents.length }} {{ cardType }}</p>

		<div class="cards__container">
			<div
				v-for="(content, index) in contents"
				:key="getCardKey(index)"
				class="card"
			>
				<div class="wrapper" v-html="getCardContent(content)"></div>
			</div>
		</div>

		<button class="cards__btn" @click="handleChevronClicked"></button>
	</div>
</template>

<script>
import { uuid } from 'vue-uuid'

export default {
	props: {
		cardType: { type: String, default: 'Messages' },
		contents: { type: Array, required: true }
	},
	data() {
		return {
			rootElement: this.$el
		}
	},
	computed: {
		wrapperState() {
			const $element = this.rootElement
			if ($element) {
				const heightVal = $element.getBoundingClientRect().height
				const isWrapperTooTall = heightVal / window.innerHeight > 0.4

				return isWrapperTooTall ? ['-is-foldable', '-is-folded'] : []
			}
			return []
		}
	},
	mounted() {
		this.rootElement = this.$el
	},
	methods: {
		getCardKey(index) {
			return index + uuid.v1()
		},
		getCardContent(msg) {
			const keys = []
			let treeHolder = ''

			for (const key in msg) {
				if (typeof msg[key] === 'object') {
					treeHolder += '<div class="wrapper">'
					treeHolder += `<span class="wrapper__key-item">${key}:</span>`
					treeHolder += `<div class="wrapper">${this.getCardContent(
						msg[key]
					)}</div>`
					treeHolder += '</div>'
				} else {
					treeHolder += `<span class="wrapper__item">${key}: ${msg[key]}</span>`
				}
				keys.push(key)
			}
			return treeHolder
		},
		handleChevronClicked($event) {
			const $btn = $event.target
			const $wrapper = $btn.closest('.cards')
			$wrapper.classList.remove('-is-folded')
		}
	}
}
</script>

<style scoped>
.cards__title {
	font-weight: var(--sp-f-w-medium);
	font-size: 0.75rem;
	line-height: 130.9%;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--sp-c-txt-third);
	margin-bottom: 0.85rem;
}

.cards {
	position: relative;

	height: auto;
	transition: height 0.3s;
}
.cards:after {
	pointer-events: none;
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(
		to top,
		rgba(255, 255, 255, 0.5),
		transparent
	);

	opacity: 0;
	transition: opacity 0.3s;
}
.cards__btn {
	content: '';
	z-index: 2;
	position: absolute;
	left: 50%;
	bottom: 1rem;
	width: 0.8rem;
	height: 0.8rem;
	border-style: solid;
	border-width: 2px 2px 0 0;
	border-color: var(--sp-c-txt-third);
	transform: rotate(135deg);

	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s;
}
.cards.-is-folded {
	height: 30vh;
	overflow: hidden;
	transition: height 0.3s;
}
.cards.-is-folded:after {
	opacity: 1;
	transition: opacity 0.3s;
}
.cards.-is-folded .cards__btn {
	opacity: 0.5;
	pointer-events: initial;
	transition: opacity 0.3s;
}

.card {
	font-size: 0.875rem;
	font-family: var(--sp-f-secondary);
	line-height: 162.5%;
	color: var(--sp-c-txt-secondary);
	padding: 1.5rem 1.75rem 1.5rem 1rem;
	border-radius: 0 12px 12px 12px;
	background-color: var(--sp-c-bg-secondary);
}
.card:not(:last-child) {
	margin-bottom: 1rem;
}
.card >>> .wrapper {
	padding-left: 0.5rem;
}
.card >>> .wrapper__item {
	display: block;
	overflow-wrap: break-word;
}
</style>
