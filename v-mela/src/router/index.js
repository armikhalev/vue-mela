import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Koyla from '@/components/Koyla'
import Latay from '@/components/Latay'

Vue.use(Router)

export default new Router({
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
