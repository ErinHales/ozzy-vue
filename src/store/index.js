import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import * as types from './mutation-types'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   },
//   strict: debug,
//   plugins: []
// })

export default new Vuex.Store({
  modules: {
    user
  }
})
