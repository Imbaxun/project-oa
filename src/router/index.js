import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/base/login.vue'
import Index from '../components/base/index.vue'
import Main from '../components/base/main.vue'
import Sendprocess from '../components/page/sendprocess.vue'
import Llh from '../components/page/llh/llh.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [{
        path: '',
        component: Main
      }, {
        path: '/sendprocess',
        component: Sendprocess
      }, {
        path: '/llh',
        component: Llh
      }]
    }
  ]
})
