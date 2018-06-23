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
              <md-list-item md-expand>
                <div class="md-list-item-text">
                <span><strong>NOME: </strong> {{ dados.cliente }} - <strong>CONTATO: </strong> {{ dados.contato }} - <strong>DATA: </strong>{{ dados.dia }}/{{ dados.mes }}/{{ dados.ano }}</span>
                <span>{{ dados.endereco }}</span>
                <p>{{ dados.status }}</p>
                </div>
                  <md-list slot="md-expand">
                    <table class="table table-sm table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Qtd</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Comprimento</th>
                          <th scope="col">Largura</th>
                          <th scope="col">Granito</th>
                          <th scope="col">Preço</th>
                        </tr>
                      </thead>
                      <tbody v-for="itemNota in dados.itens" :key="itemNota.key">
                        <tr>
                          <th scope="row">{{ itemNota.qtd }}</th>
                          <td>{{ itemNota.nomePeca }}</td>
                          <td>{{ itemNota.comprimento }}</td>
                          <td>{{ itemNota.largura }}</td>
                          <td>{{ itemNota.granito }}</td>
                          <td>{{ itemNota.precoPeca | currency}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </md-list>
                <md-button @click="remove(dados['.key'])">
                    Remover
                </md-button>
                <md-button @click="alterarStatus(dados['.key'])">
                    Alterar Andamento
                </md-button>
             </md-list-item>
           </md-list>
           <div>
        <div>
        </div>
      </div>
    </div>
</template>

<script>
import { clienteRef } from '../../firefiles/firebase'

export default {
  name: 'listadeorcamentos',
  data () {
    return {
      titulo: 'Lista de Orçamentos',
      dataFire: {}
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
    },
    visualizar (key) {
      this.datas = clienteRef.child('vendas').child(key)
      console.log(this.dataFire.cliente)
    },
    alterarStatus (key) {
    }
  }
}
</script>

<style>
</style>
