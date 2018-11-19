import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/views/Welcome'
import SignUp from '@/components/views/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
