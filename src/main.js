// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'	//手动变红
import '../node_modules/element-ui/lib/theme-chalk/index.css'	//手动变红
import axios from 'axios'
//import VueAxios from 'vue-axios'
import store from './store' //引入 Vuex 状态管理


Vue.config.productionTip = false
Vue.prototype.$axios = axios 
//将axios挂载在Vue实例原型上

// 设置axios请求的token
//axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
//axios.defaults.headers.post["Content-type"] = "application/json"

/* eslint-disable no-new */
Vue.use(ElementUI)	//手动变红
Vue.use(axios);
//Vue.use(VueAxios);

new Vue({
  render: h => h(App),
  router, //使用路由配置
  store //使用 Vuex 进行状态管理
}).$mount('#app')
