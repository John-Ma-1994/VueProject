import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'

// 注册全局组件router-view router-link
// 挂在Vue.prototype.$router||$route
// 未来所有的组件中的this对象,就具备该属性,所有的this其实就是Vue的子类对象

Vue.use(Router)

export default new Router({
  routes: [
    {
      //首先进行重定向的操作
      path:'/',
      redirect:{ name:'home' },
    },
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
    },
    //新闻列表
    {
      path:'news.list',
      name:'/news/list',
      component:NewsList
    },
    //新闻详情
    {
      name:'news.detail',
      path:'/news/detail',
      component:NewsDetail
    },
    //图文列表
    {
      name:'photo.list',
      path:'/photo/list/:categoryId',
      component:PhotoList
    },
    //图文详情
    {
      name:'photo.detail',
      path:'/photo/detail',
      component:PhotoDetail
    }
  ]
})
