import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Koyla from '@/components/Koyla'
import Latay from '@/components/Latay'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router, VueAxios, axios)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/koyla',
      name: 'Koyla',
      component: Koyla
    },
    {
      path: '/latay',
      name: 'Latay',
      component: Latay
    }
  ]
})
