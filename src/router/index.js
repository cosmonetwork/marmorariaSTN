import Vue from 'vue'
import Router from 'vue-router'
import ERPToolbar from '@/components/ERPToolbar'
import NovoOrcamento from '@/components/orcamento/novoOrcamento'
import Login from '@/components/login'
// import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: ERPToolbar,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/novoorcamento',
      name: 'novoOrcamento',
      component: NovoOrcamento
    }
  ]
})

export default router
