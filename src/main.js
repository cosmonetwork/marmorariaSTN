// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import Firebase from 'firebase'
// import Firebaseui from 'firebaseui'
import VueFire from 'vuefire'
import './firefiles/firebase'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.use(VueFire)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBI76JR_7g_yRHBR5CqARvIb8djWtSWn9o',
  authDomain: 'marmorariastn.firebaseapp.com',
  databaseURL: 'https://marmorariastn.firebaseio.com',
  projectId: 'marmorariastn',
  storageBucket: 'marmorariastn.appspot.com',
  messagingSenderId: '986072239912'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  create () {
    Firebase.initializeApp(config)
    Firebase.auth().onAuthStateChanges((user) => {
      if (user) {
        this.$router.push('/home')
      } else {
        this.$router.push('/login')
      }
    })
  },
  components: { App },
  template: '<App/>'
})
