import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Address from '@/views/Address.vue'
import Block from '@/views/Block.vue'
import Blocks from '@/views/Blocks.vue'
import Send from '@/views/Send.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/address/:address', component: Address },
	{ path: '/block/:block', component: Block },
	{ path: '/blocks/:page?', component: Blocks },
	{ path: '/send/', component: Send }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
