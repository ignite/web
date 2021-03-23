<template>
	<div class="sp-mnemonic-input" contenteditable="true">
		<span>word1</span>
		<span>word2</span>
		<span>word3</span>
		<span>word4</span>
		<span>word5</span>
	</div>
</template>

<script>
export default {
	name: 'SpMnemonicInput',
	props: {
		modelValue: String
	},
	data() {
		return {
			value: []
		}
	},
	emits: ['update:modelValue'],
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
		changeContent(content) {
			this.$emit('update:modelValue', content)
		}
	}
}
</script>
