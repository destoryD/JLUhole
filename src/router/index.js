import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Test from '@/pages/Test'
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
    }
  ]
})
