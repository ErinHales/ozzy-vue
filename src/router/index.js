import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../views/Welcome/Welcome.main'
import SignUp from '../views/Welcome/Welcome.SignUp'
import Login from '../views/Welcome/Welcome.Login'
import Setup from '../views/Setup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: '/signup',
          component: SignUp
        }
      ]
    },
    // {
    //   path: '/signup',
    //   name: 'SignUp',
    //   component: SignUp
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    }
  ]
})
