import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router, // sellega hakkas asi tööle
  render: h => h(App)
})
