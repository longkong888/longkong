import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/log'
  },
  {
    path: '/log',
    component: () => import('../views/log.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
