import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Address from '@/views/Address.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
  { path: "/address/:address", component: Address }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
