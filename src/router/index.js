import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'

// 注册全局组件router-view router-link
// 挂在Vue.prototype.$router||$route
// 未来所有的组件中的this对象,就具备该属性,所有的this其实就是Vue的子类对象

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    }
  ]
})
