import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'


const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	}
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
