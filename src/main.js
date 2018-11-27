// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 添加响应拦截器
let lanjie = axios.interceptors.response.use(
  response => {
    console.log(response.data)
    if (response.data.status === 2) {
      let msg = response.data.msg
      localStorage.clear()
      this.$message({
        type: 'success',
        message: msg,
        center: true,
        iconClass: ''
      })
      router.replace()({
        path: 'Login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
    return response
  }
)
axios.interceptors.request.eject(lanjie)
