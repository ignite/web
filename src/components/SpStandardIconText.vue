<template>
	<IconText
		class="standard-icon-text"
		:text="text"
		:link="link"
		:icon-type="iconType"
		:is-icon-first="true"
	/>
</template>

<script>
import IconText from './SpIconText/IconText'

export default {
	components: {
		IconText
	},
	props: {
		text: { type: String, required: true },
		link: { type: String, default: null },
		iconType: {
			type: String,
			default: 'check',
			validator: function(value) {
				return ['copy', 'check', 'successDot'].indexOf(value) !== -1
			}
		}
	}
}
</script>
