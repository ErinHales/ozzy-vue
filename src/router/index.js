import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/views/Welcome.vue'
import SignUp from '../components/views/SignUp.vue'
import Login from '../components/views/Login.vue'
import Setup from '../components/views/Setup'

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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    }
  ]
})
