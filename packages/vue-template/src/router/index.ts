import { createRouter, createWebHistory } from "vue-router";

import DataView from "../views/DataView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: PortfolioView },
  { path: "/data", component: DataView },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
