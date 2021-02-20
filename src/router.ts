import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeVue from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeVue,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
