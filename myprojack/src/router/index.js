import Vue from 'vue'
import Router from 'vue-router'
// 引入登录页
import Login from '../components/login.vue'
// 引入css
import '../assets/css/login.css'
// 引入homepage
import HomePage from '../components/homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    }
  ]
})
