<template>
	<div class="sp-mnemonic">
		<ul class="sp-mnemonic__list">
			<li
				class="sp-mnemonic__list__item"
				v-for="(word, index) in firstHalfWords"
				v-bind:key="'word' + index + 1"
			>
				<span>{{ index + 1 }}</span> {{ word }}
			</li>
		</ul>
		<ul class="sp-mnemonic__list">
			<li
				class="sp-mnemonic__list__item"
				v-for="(word, index) in secondHalfWords"
				v-bind:key="'word' + index + 1 + firstHalfWords.length"
			>
				<span>{{ index + 1 + firstHalfWords.length }}</span> {{ word }}
			</li>
		</ul>
		<div class="sp-mnemonic__copy">
			<SpLinkIcon icon="Copy" text="Copy phrase" v-on:click="copyMnemonic" />
		</div>
	</div>
</template>

<script>
import SpLinkIcon from '../SpLinkIcon'
const copyToClipboard = (str) => {
	const el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	el.setSelectionRange(0, 999999)
	document.execCommand('copy')
	document.body.removeChild(el)
}
export default {
	name: 'SpMnemonic',
	props: {
		mnemonic: {
			type: String,
			required: true
		}
	},
	components: {
		SpLinkIcon
	},
	computed: {
		words() {
			return this.mnemonic.split(' ')
		},
		firstHalfWords() {
			return this.words.slice(0, this.words.length / 2)
		},
		secondHalfWords() {
			return this.words.slice(this.words.length / 2)
		}
	},
	methods: {
		copyMnemonic() {
			copyToClipboard(this.mnemonic)
		}
	}
}
</script>
