import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const routes = []

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router
