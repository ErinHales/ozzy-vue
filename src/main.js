// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import store from './store/index'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import * as VueGoogleMaps from 'vue2-google-maps'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    purple: '#8459b6',
    pink: '#b259b6',
    accent: '#FA8B60',
    peach: '#FAC8BF',
    brightblue: '#94FFFC',
    darkstormblue: '#466675',
    lightstormblue: '#6A8D9D',
    gray: '#CCCCCC',
    black: '#000000',
    white: '#FFFFFF',

    // pinkLemonade: '#EAD5E1',
    pinkLemonade: '#FED3C0',
    mintGreen: '#AEE0C5',
    babyBlue: '#CBEAEB',
    // orange: '#FFB100',
    // orange: '#ffb347',
    orange: 'FFBB5B',
    deepBlue: '#6799A3'
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    // // If you want to set the version, you can do so:
    // v: '3.26',
  }

  // // If you intend to programmatically custom event listener code
  // // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // // you might need to turn this on.
  // autobindAllEvents: false,

  // // If you want to manually install components, e.g.
  // // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // // Vue.component('GmapMarker', GmapMarker)
  // // then disable the following:
  // installComponents: true,
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
