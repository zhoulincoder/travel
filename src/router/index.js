import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue') // 异步组件使用 在app.js特别大的时候才考虑
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 保证你页面切换都是顶端
    return { x: 0, y: 0 }
  }
})
