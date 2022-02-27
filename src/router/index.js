import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Landing from '@/pages/Landing'
import Profile from '@/pages/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/landing', name: 'landing', component: Landing },
    { path: '/profile', name: 'profile', component: Profile }
  ]
})
