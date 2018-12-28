import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import foodlist from './views/food-list.vue'

Vue.use(Router)

// 4. 어떤 주소에 어떤 컴포넌트를 렌더링할지 결정
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'foodlist',
      component: foodlist
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
