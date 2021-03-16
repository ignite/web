<template>
	<div
		contenteditable
		v-on:keyup="keyUp"
		v-on:blur="blur"
		v-on:paste="paste"
		v-on:delete="del"
	></div>
</template>
<script>
export default {
	name: 'SpKeyArea',
	props: {
		value: {
			type: String
		}
	},
	data() {
		return {
			rawContent: this.value,
			delayTimer: null
		}
	},
	methods: {
		validateInput(el) {
			console.log(el)

			this.rawContent = el.innerText
		},
		keyUp(event) {
			console.log('keyup')

			if (event.keyCode == 32) {
				this.validateInput(event.target)
			}
		},
		blur(event) {
			console.log('blur')
			this.validateInput(event.target)
		},
		paste(event) {
			console.log('paste')
			this.validateInput(event.target)
		},
		del(event) {
			console.log('del')
			this.validateInput(event.target)
		}
	}
}
</script>
