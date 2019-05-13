import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../views/Welcome/SignUp'
import Login from '../views/Welcome/Login'
import Setup from '../views/Setup'
import Loader from '../components/app/loader'
import Home from '../views/Home/Home.main'
import Feed from '../views/Home/Feed/Feed.main'
import ChildCare from '../views/Home/ChildCare/ChildCare.main'
import Post from '../views/Home/Post/Post.main'
import MessageConvo from '../views/Home/Message/Message.main'
import Messages from '../views/Home/Messages/Messages.main'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        { path: '/feed', component: Feed },
        { path: '/findchildcare', component: ChildCare },
        { path: '/post', component: Post },
        { path: '/message', component: MessageConvo },
        { path: '/messages', component: Messages }
      ]
    }
  ]
})
