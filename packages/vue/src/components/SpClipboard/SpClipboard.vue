<template>
	<div class="clipboard">
		<SpButton @click="() => copy(text)">copy</SpButton>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SpButton from '../SpButton'

import useClipboard from '../../composables/useClipboard'

export default defineComponent({
	name: 'SpClipboard',

	components: {
		SpButton
	},

	props: {
		text: {
			type: String,
			default: ''
		}
	},

	setup() {
		let { copy } = useClipboard()

		return { copy }
	}
})
</script>

<style lang="scss" scoped></style>
