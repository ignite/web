import { SpBlocksTable } from '@starport/vue'
import store from '../store'

export default {
	title: 'Example/SpBlocksTable',
	component: SpBlocksTable,
	argTypes: {
		blocks: {
			type: 'array'
		}
	}
}

const Template = (args) => ({
	components: { SpBlocksTable },
	setup() {
		return { args }
	},
	template: `<SpBlocksTable v-bind="args" />`
})

export const BlocksProp = Template.bind({})
BlocksProp.args = {
	blocks: store.state.common.blocks.blocks
}
