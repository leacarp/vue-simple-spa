import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
  ],
});

export default router;
