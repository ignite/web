import SpButton from '../../../vue/src/components/SpButton'

export default {
	title: 'Example/SpButton',
	component: SpButton,
	argTypes: {
		type: {
			description: 'To switch the themes.',
			control: { type: 'radio' },
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
		},
		text: {
			description: 'Not a prop, but child. The text inside SpButton tag.',
			type: 'string',
			defaultValue: 'SpButton.'
		}
	}
}

const Template = (args) => ({
	components: { SpButton },
	setup() {
		return { args }
	},
	template: '<SpButton v-bind="args">{{ args.text }}</SpButton>'
})

export const Primary = Template.bind({})
Primary.args = {
	type: 'primary',
	text: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
	type: 'secondary',
	text: 'Secondary'
}

export const Loading = Template.bind({})
Loading.args = {
	busy: true
}

export const Disabled = Template.bind({})
Disabled.args = {
	disabled: true,
	text: 'Disabled'
}

export const GoParentTab = Template.bind({})
GoParentTab.args = {
	href: 'https://www.wikipedia.org',
	target: '_blank',
	text: 'Wikipedia'
}

// export const GoRouteLink = Template.bind({})
// GoRouteLink.args = {
// 	link: '/story/example-introduction--page',
// 	target: '_self'
// }
