<template>
	<router-link :to="link" v-if="link" class="sp-button">
		<slot></slot>
	</router-link>
	<button type="button" v-else class="sp-button">
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
		disabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
