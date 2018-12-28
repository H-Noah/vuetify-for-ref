import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' // axios 모듈을 임포트하고

const BASE_URL = 'http://localhost:3000/api' // 기본으로 요청을 보낼 URL을 설정합니다.
// const BASE_URL = '/api' // 개발중에는 8080 포트에서 3000 포트로 요청하지만, 실제 서비스는 3000번 포트에서 이루어질겁니다.

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: BASE_URL
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
