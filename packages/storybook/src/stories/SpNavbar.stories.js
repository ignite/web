// import { SpNavbar } from '@starport/vue'
import SpNavbar from '../components/SpNavbar'
import '@starport/vue/lib/starport-vue.css'
import { app } from '@storybook/vue3'
import vueLib from '@starport/vue'
app.use(vueLib)

export default {
	title: 'Example/SpNavbar',
	component: SpNavbar,
	decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
	argTypes: {
		title: {
			control: 'text',
			description: 'Text visible at the top of the modal',
			defaultValue: 'Create post'
		},
	}
}

const Template = (args) => ({
	components: { SpNavbar },
	setup() {
		return { args }
	},
	template: `<SpNavbar v-bind="args">
	</SpNavbar>`
})

export const VisibleModal = Template.bind({})
VisibleModal.args = {
	visible: true,
}
