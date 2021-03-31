<template>
	<router-link
		:to="link"
		v-if="link"
		class="sp-button"
		:class="'sp-button-' + type"
		:disabled="disabled"
	>
		<span class="sp-button__text"><slot></slot></span>
	</router-link>
	<a
		:href="href"
		v-else-if="href"
		class="sp-button"
		:class="'sp-button-' + type"
		:disabled="disabled"
		:target="target"
	>
		<span class="sp-button__text"><slot></slot></span>
	</a>
	<button
		type="button"
		v-else
		class="sp-button"
		:class="'sp-button-' + type"
		:disabled="disabled"
	>
		<span class="sp-button__text"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 'SpButton',
	props: {
		link: {
			type: String
		},
		href: {
			type: String
		},
		target: {
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
