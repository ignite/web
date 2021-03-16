<template>
	<router-link
		:to="link"
		v-if="link"
		class="sp-button"
		:class="'sp-button-' + type"
		:disabled="disabled"
	>
		<slot></slot>
	</router-link>
	<button
		type="button"
		v-else
		class="sp-button"
		:class="'sp-button-' + type"
		:disabled="disabled"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'SpButton',
	props: {
		link: {
			type: String
		},
		type: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
