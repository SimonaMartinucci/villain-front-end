import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdvancedResearch from '../views/AdvancedResearch.vue'
import VillainDetail from '@/views/VillainDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/AdvancedResearch/:skill?',
      name: 'AdvancedResearch',
      component: AdvancedResearch,
    },
    {
      path: '/VillainDetail/:slug',
      name: 'VillainDetail',
      component: VillainDetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
