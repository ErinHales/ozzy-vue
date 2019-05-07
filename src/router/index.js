import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../views/Welcome/SignUp'
import Login from '../views/Welcome/Login'
import Setup from '../views/Setup'
import Loader from '../components/app/loader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loader',
      component: Loader
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
