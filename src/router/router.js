import Login from '@/views/login/index'
import Posts from '@/views/posts/index'
import ErrorPage from '@/views/404'
import VueRouter from 'vue-router'
import Register from '@/views/register/index'

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/posts',
      component: Posts,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/page-not-found', alias: '*',
      component: ErrorPage
    },
    {
      path: '/register',
      component: Register
    }
  ],
  mode: 'history' 
})