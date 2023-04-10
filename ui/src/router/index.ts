import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { useAuthStore } from '@/stores/auth-store';

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
    path: '/user/create',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "CreateUserView" */ '@/views/CreateUserView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.name == 'Login') return next();

  const auth = useAuthStore();
  await auth.checkLogin();
  next();
})

export default router
