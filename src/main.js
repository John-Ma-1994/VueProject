// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 配置MintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'

// 引入自定义css
import './assets/css/global.css'

import './assets/ttf/iconfont.css'

import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'

Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)

import NavBar from '@/components/Common/NavBar'
Vue.component(NavBar.name,NavBar)
// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)

//定义moment全局日期过滤器
import Moment from 'moment'

Vue.filter('convertTime',function (data,formatStr) {
  return Moment(data).format(formatStr);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
