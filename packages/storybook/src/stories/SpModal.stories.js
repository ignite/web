import { SpModal } from '@starport/vue'
import '@starport/vue/lib/starport-vue.css'
import { app } from '@storybook/vue3'
import vueLib from '@starport/vue'
app.use(vueLib)

export default {
	title: 'Example/SpModal',
	component: SpModal,
	decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
	argTypes: {
		title: {
			control: 'text',
			description: 'Text visible at the top of the modal',
			defaultValue: 'Create post'
		},
		submitButton: {
			description: 'Submit button visibility.',
			type: 'boolean',
			defaultValue: true
		},
		visible: {
			description: 'Modal visibility.',
			type: 'boolean',
			defaultValue: false
		},
		closeIcon: {
			description: 'Close cross icon visibility.',
			type: 'boolean',
			defaultValue: true
		},
		cancelButton: {
			description: 'Cancel button visible under submit button visibility.',
			type: 'boolean',
			defaultValue: true
		}
	}
}

const Template = (args) => ({
	components: { SpModal },
	setup() {
		return { args }
	},
	template: `<SpModal v-bind="args">
	</SpModal>`
})

export const VisibleModal = Template.bind({})
VisibleModal.args = {
	visible: true,
}
