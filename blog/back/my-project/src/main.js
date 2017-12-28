import Vue from 'vue'
import App from './App'
import './fonts/iconfont.css'
import './css/style.css'
import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../node_modules/element-ui/lib/index'
import router from './router'
import Mint from 'mint-ui'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
