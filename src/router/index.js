import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import diager from '../views/details.vue'
const routes = [
  {
    path: '/',
    component: Home,
    name: 'miancontent',
    children: [
     
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'mian',
        name: 'mian',
        component: () => import(/* webpackChunkName: "about" */ '../views/mian.vue')
      },
      {
        path: 'rent',
        name: 'rent',
        component: () => import(/* webpackChunkName: "about" */ '../views/rent.vue')
      },
      {
        path: 'diager',
        name: 'diager',
        component: diager
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
      },
      {
        path: 'management',
        name: 'management',
        component: () => import(/* webpackChunkName: "about" */ '../views/management/back-stage.vue')
      },
      {
        path: 'apply',
        name: 'apply',
        component: () => import(/* webpackChunkName: "about" */ '../views/apply.vue')
      },
    ]
  },
  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
