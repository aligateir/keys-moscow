import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('@/views/MyHome.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('@/views/MyLogin.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('@/views/MyCategories.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('@/views/MyRecord.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: () => import('@/views/MyHistory.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: () => import('@/views/MyPlanning.vue')
  },
  {
    path: '/detail/:id ',
    name: 'detail',
    meta: { layout: 'main' },
    component: () => import('@/views/MyDetail.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('@/views/MyProfile.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('@/views/MyRegister.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    meta: { layout: 'main' },
    component: () => import('@/views/MyPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
