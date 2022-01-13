import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import Data from '../views/Data.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Portfolio, },
  { path: '/portfolio', component: Portfolio },
  { path: '/data', component: Data },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
