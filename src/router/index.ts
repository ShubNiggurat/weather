import { createRouter, createWebHistory } from 'vue-router'
import CurrentWeatherView from '@/views/CurrentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'current',
      component: CurrentWeatherView
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: () => import('@/views/ForecastView.vue')
    },
    {
      path: '/future',
      name: 'future',
      component: () => import('@/views/FutureView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/HistoryView.vue')
    },
    {
      path: '/marine',
      name: 'marine',
      component: () => import('@/views/MarineView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/ip',
      name: 'ip',
      component: () => import('@/views/IpView.vue')
    },
    {
      path: '/timezone',
      name: 'timezone',
      component: () => import('@/views/TimezoneView.vue')
    },
    {
      path: '/astronomy',
      name: 'astronomy',
      component: () => import('@/views/AstronomyView.vue')
    }
  ]
})

export default router
