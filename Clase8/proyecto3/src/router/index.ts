import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejercicio from '../views/Ejercicio.vue'
import Ejercicio6 from '../views/Ejercicio6.vue'
import Ejercicio7 from '../views/Ejercicio7.vue'
import Ejercicio8 from '../views/Ejercicio8.vue'
import Ejercicio9 from '../views/Ejercicio9.vue'
import Ejercicio9 from '../views/Ejercicio10.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ejercicio',
      name: 'ejercicio',
      component: Ejercicio,
    },
    {
      path: '/ejercicio6',
      name: 'ejercicio6',
      component: Ejercicio6,
    },
    {
      path: '/ejercicio7',
      name: 'ejercicio7',
      component: Ejercicio7,
    },
    {
      path: '/ejercicio8',
      name: 'ejercicio8',
      component: Ejercicio8,
    },
    {
      path: '/ejercicio9',
      name: 'ejercicio9',
      component: Ejercicio9,
    },
    {
      path: '/ejercicio10',
      name: 'ejercicio10',
      component: Ejercicio10,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
