import { SpLinkIcon } from '@starport/vue'

const icons = [
	'Download',
	'Upload',
	'Key',
	'Copy',
	'Unlock',
	'Lock',
	'AddNew',
	'Add',
	'Close',
	'LeftArrow',
	'UpArrow',
	'DownArrow',
	'RightArrow',
	'LeftCaret',
	'UpCaret',
	'DownCaret',
	'RightCaret',
	'Status',
	'Docs',
	'Settings',
	'Form',
	'Transactions',
	'Modules',
	'Dashboard',
	'More',
	'Delete',
	'Hash',
	'Reload',
	'Search',
	'Token',
	'Hamburger',
	'Check'
]

export default {
	title: 'Example/SpLinkIcon',
	component: SpLinkIcon,
	decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
	argTypes: {
		text: {
			description: 'Link text',
			type: 'string',
			defaultValue: 'SpLinkIcon'
		},
		icon: {
			description: 'Icons from icomoon.io',
			type: 'select',
			options: icons
		},
		link: {
			description: 'Set <router-link> "to" attribute value',
			type: 'string'
		},
		href: {
			description: 'Set <a> "href" attribute value',
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
	components: { SpLinkIcon },
	setup() {
		return { args }
	},
	template: '<SpLinkIcon v-bind="args"></SpLinkIcon>'
})

export const Download = Template.bind({})
Download.args = {
	href: 'https://github.com',
	icon: 'Download',
	text: 'Download'
}

export const OpenAtNewTab = Template.bind({})
OpenAtNewTab.args = {
	href: 'https://docs.starport.network',
	target: '_blank',
	icon: 'Docs',
	text: 'Starport Docs'
}
