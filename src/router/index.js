import { createRouter, createWebHistory } from 'vue-router'

import NavigationAllView from '@/views/NavigationAllView.vue';
import NavigationAptView from '@/views/NavigationAptView.vue';
import NavigationOfficetelView from '@/views/NavigationOfficetelView.vue';
import NavigationVillaView from '@/views/NavigationVillaView.vue';
import NavigationDetailView from '@/views/NavigationDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: NavigationAllView
    },
    {
      path: '/navi/all',
      name: 'navi-all',
      component: NavigationAllView
    },
    {
      path: '/navi/apt',
      name: 'navi-apt',
      component: NavigationAptView
    },
    {
      path: '/navi/villa',
      name: 'navi-villa',
      component: NavigationOfficetelView
    },
    {
      path: '/navi/officetel',
      name: 'navi-officetel',
      component: NavigationVillaView
    },
    {
      path: '/navi/house/detail/:id',
      name: 'navi-detail',
      component: NavigationDetailView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
