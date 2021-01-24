import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Test from '@/pages/Test'
import ViewPost from '@/pages/ViewPost'
import Post from '@/pages/Post'
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
      name: 'Test',
      component: Test
    },
    {
      path: '/view',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
