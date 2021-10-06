import { SpSidebar } from '@starport/vue'

export default {
	title: 'Example/SpSidebar',
	component: SpSidebar,
	argTypes: {}
}
const Template = (args) => ({
	components: { SpSidebar },
	setup() {
		return { args }
	},
	template: `<SpSidebar v-bind="args">
							<template v-slot:header>Slot Header</template>
							<template v-slot>Slot Default</template>
							<template v-slot:footer>Slot Footer</template>
						</SpSidebar>`
})

export const OnSmallScreen = Template.bind({})
OnSmallScreen.parameters = {
	viewport: {
		defaultViewport: 'iphonex'
	}
}
