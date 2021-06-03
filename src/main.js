import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './form'
import {router} from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
