import SpButton from '../../../vue/src/components/SpButton'

export default {
	title: 'Example/SpButton',
	component: SpButton,
	argTypes: {
		type: {
			description: 'To switch the themes.',
			type: 'radio',
			options: ['primary', 'secondary'],
			defaultValue: 'primary'
		},
		disabled: {
			description: 'Disable your button.',
			type: 'boolean',
			defaultValue: false
		},
		busy: {
			description: 'Button loading mode.',
			type: 'boolean',
			defaultValue: false
		},
		href: {
			description: 'Set yours href attribute.',
			type: 'string',
			defaultValue: ''
		},
		link: {
			description: 'Set router-link "to" attribue.',
			type: 'string',
			defaultValue: ''
		},
		target: {
			description: `Set "target" attribute value.`,
			type: 'select',
			options: ['_blank', '_self', '_parent', '_top', 'framename']
		}
	}
}

const Template = (args) => ({
	components: { SpButton },
	setup() {
		return { args }
	},
	template: '<SpButton v-bind="args">SpButton</SpButton>'
})

export const Primary = Template.bind({})
Primary.args = {
	type: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
	type: 'secondary'
}

export const Loading = Template.bind({})
Loading.args = {
	busy: true
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true
}

export const OpenAtNewTab = Template.bind({})
OpenAtNewTab.args = {
	href: 'https://www.wikipedia.org',
	target: '_blank'
}

// export const GoRouteLink = Template.bind({})
// GoRouteLink.args = {
// 	link: '/story/example-introduction--page',
// 	target: '_self'
// }
