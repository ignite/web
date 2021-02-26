<template>
	<router-link class="sp-badge-button" :to="link" v-if="link">
		<div class="sp-badge-button__icon">
			<span class="sp-icon" :class="'sp-icon-' + icon" />
		</div>
	</router-link>
	<a class="sp-badge-button" v-else>
		<div class="sp-badge-button__icon">
			<span class="sp-icon" :class="'sp-icon-' + icon" />
		</div>
	</a>
</template>
<script>
export default {
	name: 'SpBadgeButton',
	props: {
		link: {
			type: String
		},
		icon: {
			type: String,
			required: true
		}
	}
}
</script>
