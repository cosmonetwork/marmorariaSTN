<template>
    <div>
        <div>
        <md-toolbar class=" md-dense md-primary">
            <md-button class="md-icon-button">
                <router-link to="/home"><md-icon>arrow_back</md-icon></router-link>
            </md-button>

            <h2 class="md-title" style="flex: 1">{{ titulo }}</h2>
        <md-button class="">
          +
        </md-button>
      </md-toolbar>
      <br>
        </div>
          <md-list v-for="dados of orcamentos" :key="dados['.key']" class="md-triple-line">
            <md-card md-with-hover>
              <md-list-item>
                <div class="md-list-item-text">
                <span>{{ dados.cliente }}</span>
                <span>Brunch this weekend?</span>
                <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
                </div>

                <md-button @click="remove(dados['.key'])" class="md-list-action">
                    Remover
                </md-button>
             </md-list-item>
            </md-card>
           </md-list>
    </div>
</template>

<script>
import { clienteRef } from '../../firefiles/firebase'

export default {
  name: 'listadeorcamentos',
  data () {
    return {
      titulo: 'Lista de Orçamentos'
    }
  },
  filters: {
    currency: (value) => {
      return 'R$' + parseFloat(value).toFixed(2)
    }
  },
  firebase: {
    orcamentos: clienteRef.child('vendas')
  },
  methods: {
    remove (key) {
      clienteRef.child('vendas').child(key).remove()
    }
  }
}
</script>

<style>
</style>
