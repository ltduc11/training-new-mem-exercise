import VueRouter from 'vue-router';
import Vue from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import SingleLayout from '@/layouts/SingleLayout.vue';
import store from '@/store';
Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../pages/Employee/EmployeePage.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
  },
  {
    path: '/employee/:id',
    name: 'EmployeeDetail',
    component: () => import('../pages/Employee/EmployeeDetail.vue'),
    meta: { layout: MainLayout, requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/LoginPage.vue'),
    meta: { layout: SingleLayout, requiresAuth: false },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../pages/LogoutPage.vue'),
    meta: { layout: SingleLayout, requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//navigation guards
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('userInfo')) {
    next('/login');
  } else {
    next();
  }
});

export default router;
