import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ResumeView from '@/views/ResumeView.vue'
import PortView from '../views/PortView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about me default',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/about-me',
      name: 'about me',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/my-resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/my-portfolio',
      name: 'portfolio',
      component: () => import('../views/PortView.vue')
    }
  ]
})

export default router
