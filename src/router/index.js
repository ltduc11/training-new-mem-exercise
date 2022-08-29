import VueRouter from 'vue-router';
import Vue from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import SingleLayout from '@/layouts/SingleLayout.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: { layout: MainLayout },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/LoginPage.vue'),
    meta: { layout: SingleLayout },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
