import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { tokenRestore } from '@/services/token-storage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/LoginView.vue')
  },
  {
    path: '/more',
    name: 'OtherView',
    component: () => import(/* webpackChunkName: "OtherView" */ '@/views/OtherView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = tokenRestore();
  if (to.name !== 'Login' && !token) next({ name: 'Login' });
  else next();
})

export default router
