import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Mine from '../components/Mine'
import Shop from '../components/Shop'
import Shopping from '../components/Shopping'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/mine', component: Mine },
    { path: '/shop', component: Shop },
    { path: '/shopping', component: Shopping }
  ]
})
