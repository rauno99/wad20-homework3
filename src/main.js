import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router, // sellega hakkas asi tööle
  render: h => h(App)
})
