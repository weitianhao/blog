import Vue from 'vue'
import App from './App'
import './fonts/iconfont.css'
import './css/style.css'
import ElementUI from 'element-ui'
import router from './router'
import Mint from 'mint-ui'
Vue.use(Mint)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
