// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    purple: '#8459b6',
    pink: '#b259b6'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
