import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Register from '@/views/Register'
import ResetPassword from '@/views/ForgotPassword'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
    {
      name: 'ForgotPassword',
      path: 'forgot-password',
      component: ResetPassword,
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Schedule',
          path: '/schedule',
          component: () => import('@/views/dashboard/pages/schedule'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
