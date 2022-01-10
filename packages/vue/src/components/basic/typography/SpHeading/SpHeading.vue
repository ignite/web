<template>
	<component :is='component' :class='cssClass' v-bind="$attrs">
		<slot />
	</component>
</template>

<script lang='ts'>
/**
 * SpHeading Component
 *
 * Heading component give users clear hierarchies, organize information of your interface.
 * This component provides default heading styles for H1-H6.
 */

import { computed, defineComponent } from 'vue'

import { headingLevelValidator } from '../../../prop-validators'

export default defineComponent({
	name: 'SpHeading',
	props: {
		// Determining the level of the header element.
		level: {
			type: String,
			required: true,
			validator: headingLevelValidator
		},
		// Pass the name of the HTML element you want to render.
		tag: {
			type: String,
			default: 'h'
		}
	},
	setup(props) {
		/**
		 * Get HTML element for component
		 * @returns {String}
		 */
		const component = computed(() => props.tag === 'h' ? `h${props.level}` : props.tag);

		/**
		 * Get component class
		 * @returns {String}
		 */
		const cssClass = computed(() => `text-h${props.level}`)

		return {
			component,
			cssClass
		}
	}
})
</script>
