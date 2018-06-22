<template>
    <div class="NovoOrcamento">
      <md-toolbar class=" md-dense md-primary">
        <md-button class="md-icon-button">
          <router-link to="/home"><md-icon>arrow_back</md-icon></router-link>
        </md-button>

        <h2 class="md-title" style="flex: 1">{{ titulo }}</h2>
        <span>Data: {{ dia }}/{{ mes }}/{{ ano }}</span>
        <md-button v-show="dadoPeca" @click="gerarNota()" class="">
          Gerar Nota de Orçamento
        </md-button>
      </md-toolbar>
    <div class="container">
      <transition>
        <div class="container" v-if="dadocliente">
          <br />
            <div v-if="dadocliente">
              <H6 align="center">DADOS DO CLIENTE</H6>
              <md-divider />
              <md-field md-clearable>
                <label class="labels">NOME</label>
                <md-input v-model="nome" />
              </md-field>
              <md-field md-clearable>
                <label class="labels">ENDEREÇO</label>
                <md-input v-model="endereco"></md-input>
              </md-field>
              <md-field md-clearable>
                <label class="labels">CONTATO</label>
                <md-input v-model="contato"></md-input>
              </md-field>
              <b-button @click="addCliente()" variant="outline-success">OK</b-button>
            </div>
            <div v-if="dadoPeca">
              <label>Cliente: {{ nome }}</label>
            </div>
        </div>
      </transition>
      <br />
      <transition>
        <div v-if="dadoPeca">
            <div>
              <H6 align="center">DADOS DA PEÇA</H6>
              <md-divider />
                <div>
                  <!--<md-list class="bglist">
                    <md-list-item v-for="principal in pecaPrincipal" :key="principal.idlocal" class="bglist">
                        <span> id: {{ principal.idlocal }} | Descrição: {{ principal.nome }} </span>
                        <md-list-expand class="bglist">
                        <md-list v-for="adicional in pecaAdicional" :key="adicional.idlocal" class="bglist">
                            <md-list-item class="bglist md-inset">Id: {{adicional.idlocal}} Descrição:{{adicional.nome}} | Comprimento: {{ adicional.comprimento }} | Largura: {{ adicional.largura }} | Preço: {{ adicional.preco }}</md-list-item>
                        </md-list>
                        </md-list-expand>
                    </md-list-item>
                    <md-divider />
                  </md-list> -->
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
                    <tbody v-for="item in items" :key="item.index">
                      <tr>
                        <th scope="row">{{ item.qtd }}</th>
                        <td>{{ item.nomePeca }}</td>
                        <td>{{ item.comprimento }}</td>
                        <td>{{ item.largura }}</td>
                        <td>{{ item.granito }}</td>
                        <td>{{ item.precoPeca | currency}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="dadoPeca">
                  <br />
                  <b-form inline>
                    <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                      <b-input type="number" class="mb-2 mr-sm-2 mb-sm-0" v-model="qtd" id="inlineFormInputName2" placeholder="Quantidade" />
                      <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="nomePeca"   placeholder="Descrição" />
                      <b-input type="number" v-model="comprimento" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Comprimento" />
                      <b-input type="number" v-model="largura" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Largura" />
                      <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="granito" placeholder="Granito" />
                      <b-input type="number" v-model="precoGranito" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Preço Granito" />
                      <b-button v-b-modal="'pecaAdicional'" @click="addPeca()" variant="outline-success">+</b-button>
                    </b-input-group>
                    <br />
                    <br />
                    <b-button v-b-modal="'pecaAdicional'" @click="addFuro()" variant="outline-success">Adicionar Furo</b-button>
                      <!--<b-modal id="pecaAdicional" title="Peças Adicionais (Saia, Rodapé, etc...)">
                        <div>
                          <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-input type="number" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Qtd." />
                            <b-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="Desc." />
                            <b-input type="number" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Comp." />
                            <b-input type="number" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Larg." />
                            <b-button variant="outline-success">+</b-button>
                          </b-input-group>
                        </div>
                      </b-modal> -->
                  </b-form>
                </div>
            </div>
        </div>
      </transition>
             <!-- <ul>
          <li v-for="personName of clientes.nome" v-bind:key="personName['.key']"> {{ personName }} </li>
        </ul> -->
      </div>
      <div v-if="nota" class="container notaOrcamento">
        <div>
          <h3>Marmoraria Sant'ana</h3>
        </div>
        <md-divider />
        <div>
          <table class="table table-sm">
            <tr>
              <th>Cliente:</th>
              <th>{{ nome }}</th>
            </tr>
            <tr>
              <th>Endereço:</th>
              <th>{{ endereco }}</th>
            </tr>
            <tr>
              <th>Contato:</th>
              <th>{{ contato }}</th>
            </tr>
          </table>
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
                    <tbody v-for="itemNota in items" :key="itemNota.index">
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
        </div>
      </div>
    </div>
</template>

<script>
import { clienteRef } from '../../firefiles/firebase'

export default {
  props: {
    database: {}
  },
  name: 'NovoOrcamento',
  data () {
    return {
      titulo: 'ORÇAMENTO',
      dia: '',
      mes: '',
      ano: '',
      nota: false,
      dadocliente: true,
      dadoPeca: false,
      nome: '',
      endereco: '',
      contato: '',
      qtd: '',
      nomePeca: '',
      comprimento: '',
      largura: '',
      granito: '',
      precoGranito: '',
      precoPeca: '',
      items: [],
      precoTotal: 0
    }
  },
  filters: {
    currency: (value) => {
      return 'R$' + parseFloat(value).toFixed(2)
    }
  },
  firebase: {
  },
  methods: {
    // Método responsável por calcular o valor da peça, inserir no array de itens e tambem adicionar o valor ao preço total
    addPeca () {
      var multiplicacao
      if (this.largura <= 0.10) {
        multiplicacao = this.comprimento * ((this.precoGranito / 100) * 10)
      } else {
        multiplicacao = this.comprimento * this.largura * this.precoGranito
      }
      var qtd = this.qtd * multiplicacao
      this.precoPeca = qtd + ((qtd / 100) * 30)
      this.addItem()
    },
    gerarNota () {
      this.dadocliente = false
      this.dadoPeca = false
      this.nota = true
      clienteRef.push({
        cliente: this.nome,
        endereco: this.endereco,
        contato: this.contato,
        dia: this.dia,
        mes: this.mes,
        ano: this.ano,
        itens: this.items,
        precoTotal: this.precoTotal
      })
    },
    addFuro () {
      this.items.push({
        qtd: 1,
        nomePeca: 'Furo',
        precoPeca: 65
      })
      this.precoTotal = this.precoTotal + 65
    },
    addItem () {
      var Peca = this.nomePeca
      var dadoPc = Peca.toUpperCase()
      console.log(dadoPc)
      this.items.push({
        qtd: this.qtd,
        nomePeca: dadoPc,
        comprimento: this.comprimento,
        largura: this.largura,
        granito: this.granito,
        precoGranito: this.precoGranito,
        precoPeca: this.precoPeca
      })
      this.precoTotal = this.precoTotal + this.precoPeca
      this.nomePeca = ''
      this.comprimento = ''
      this.largura = ''
      this.precoPeca = ''
      console.log(this.precoTotal)
    },
    addCliente () {
      this.dadocliente = false
      this.dadoPeca = true
    },
    geraData () {
      var now = new Date()
      this.dia = now.getDate()
      this.mes = now.getMonth() + 1
      this.ano = now.getFullYear()
    },
    enviaTudoParaOFirebase () {
    }
  },
  created () {
    this.geraData()
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

.bglist {
  background-color: whitesmoke;
}
.labels {
  color: black;
  text-decoration-color: white;
}
.dadosClientewf {
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: black;
}
.inputs {
  height: 10px;
  width: 10px;
  border-radius: 5px;
}
.dadosCliente {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  width: 100%;
}
.footer {
    position: fixed;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 70px;
    width: 100%;
    border-radius: 40px;
}
 .largura {
   width: 20px;
 }
  .container {
    padding: 10px;
    font-family: 'Josefin Slab', serif;
  }
  .bloco {
    display: inline-flex;
    direction: inherit;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }
  .inpout {
    padding-left: 10px;
    padding-right: 10px;
    color: white;
  }
  .notaOrcamento {
    justify-content: center;
    font-family: 'Josefin Slab', serif;
  }
</style>
