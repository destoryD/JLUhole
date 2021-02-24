import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import ViewPost from '@/pages/ViewPost'
import Post from '@/pages/Post'
import Login from '@/pages/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Index1',
      component: Index
    },
    {
      path: '/view/:uid',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
