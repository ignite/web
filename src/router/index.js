import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Address from '@/views/Address.vue'
import Block from '@/views/Block.vue'
import Send from '@/views/Send.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/address/:address', component: Address },
	{ path: '/blocks/:block', component: Block },
	{ path: '/send/', component: Send }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
