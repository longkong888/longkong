import '../src/assets/css/gonggongyangshi.css'
import 'normalize.css'
import '../src/assets/icon/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
