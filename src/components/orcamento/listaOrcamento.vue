<template>
    <div>
        <div>
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button">
                <router-link to="/home"><md-icon>arrow_back</md-icon></router-link>
            </md-button>

            <h2 class="md-title" style="flex: 1">{{ titulo }}</h2>
        <md-button class="">
          +
        </md-button>
      </md-toolbar>
        </div>
          <md-list v-for="dados of orcamentos" :key="dados['.key']" class="md-triple-line">
              <md-list-item>
                <div v-if="nota != true" class="md-list-item-text">
                <span><strong>NOME: </strong> {{ dados.cliente }} - <strong>CONTATO: </strong> {{ dados.contato }} - <strong>DATA: </strong>{{ dados.dia }}/{{ dados.mes }}/{{ dados.ano }}</span>
                <span>{{ dados.endereco }}</span>
                <p>{{ dados.status }}</p>
                <b-button class="mb-2 mr-sm-2 mb-sm-0" @click="nota = true" variant="outline-success">Visualizar</b-button>
                </div>
                <div v-if="nota">
                  <div v-if="nota" class="container">
                    <div>
                      <h3 align="center">Marmoraria Sant'ana</h3>
                      <h6 align="center">D.SARGES RAMOS-ME | CNPJ: 18.368.552/0001-12 | INSC. EST.: 03.046511-7</h6>
                      <H6 align="center">AV. CORA DE CARVALHO, Nº 3178, SANTA RITA</H6>
                      <h6 align="center">FONE: (96)9 9125-7996 | (96)9 8107-4925 | (96)9 8140-7996</h6>
                      <br>
                      <h5 align="center">ORÇAMENTO</h5>
                    </div>
                    <div>
                      <table class="table-sm">
                        <tr>
                          <th scope="row">Cliente:</th>
                          <th>{{ dados.cliente }}</th>
                        </tr>
                        <tr>
                          <th scope="row">Endereço:</th>
                          <th>{{ dados.endereco }}</th>
                        </tr>
                        <tr>
                          <th scope="row">Contato:</th>
                          <th>{{ dados.contato }}</th>
                          <th>Data:</th>
                          <th>{{ dados.dia }}/{{ dados.mes }}/{{dados.ano}}</th>
                        </tr>
                      </table>
                              <table class="table table-sm table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Peça</th>
                                    <th scope="col">Comprimento x Largura</th>
                                    <th scope="col">Granito</th>
                                    <th scope="col">Preço</th>
                                  </tr>
                                </thead>
                                <tbody v-for="itemNota in dados.itens" :key="itemNota.key">
                                  <tr>
                                    <td>{{ itemNota.qtd }} - {{ itemNota.nomePeca }}</td>
                                    <td>{{ itemNota.comprimento }} x {{ itemNota.largura }}</td>
                                    <td>{{ itemNota.granito }}</td>
                                    <td>{{ itemNota.precoPeca | currency}}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table v-for="dadosNota in dados.itens" :key="dadosNota.key" class="table-sm">
                                <tr>
                                  <th scope="row">Total:</th>
                                  <th>{{ dadosNota.precoTotal | currency }}</th>
                                </tr>
                                <tr>
                                  <th scope="row">Com Desconto:</th>
                                  <th>{{ dadosNota.precoTotalComDesconto }} ({{ dadosNota.Desconto }}%)</th>
                                </tr>
                              </table>
                              <hr>
                    </div>
                    <div>
                      <br>
                      <br>
                      <br>
                      <h4 align="center">______________________________________</h4>
                      <h6 align="center">{{ dados.nome }}</h6>
                      <br>
                      <br>
                      <h4 align="center">______________________________________</h4>
                      <h6 align="center">Atendente</h6>
                    </div>
                  </div>
                    <b-button class="mb-2 mr-sm-2 mb-sm-0" @click="nota = false" variant="outline-success">OK</b-button>
                </div>
              </md-list-item>
            </md-list>
    </div>
</template>

<script>
import { clienteRef } from '../../firefiles/firebase'

export default {
  name: 'listadeorcamentos',
  data () {
    return {
      titulo: 'Lista de Orçamentos',
      statusNovo: 'Produção',
      nota: false,
      botao: '',
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
    removeItem (key, index) {
      clienteRef.child('vendas').child(key).child('itens/' + index).remove()
    },
    alterarStatus (key) {
      var st = this.statusNovo
      var novostatus = st.toUpperCase()
      clienteRef.child('vendas').child(key).update({status: novostatus})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
