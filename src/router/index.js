import Vue from 'vue'
import Router from 'vue-router'
import ERPToolbar from '@/components/ERPToolbar'
import NovoOrcamento from '@/components/orcamento/novoOrcamento'
import Login from '@/components/login'
import ListaOrcamento from '@/components/orcamento/ListaOrcamento'
import Tabs from '@/components/orcamento/tabs'
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
      children: [
        {
          path: '/controle',
          component: Tabs
        },
        {
          path: '/novoorcamento',
          name: 'novoOrcamento',
          component: NovoOrcamento
        }
      ],
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
      path: '/listadeorcamentos',
      name: 'ListaDeOrcamentos',
      component: ListaOrcamento
    }
  ]
})

export default router
