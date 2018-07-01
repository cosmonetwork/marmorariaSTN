<template>
  <div>
    <v-tabs icons-and-text dark centered color="blue darken-3">
      <v-tabs-slider color="green"></v-tabs-slider>
<!--tab de orçamentos feitos mas não aprovados-->
      <v-tab ripple>
        Pendentes
        <v-icon>warning</v-icon>
      </v-tab>
<!--tab de aprovados-->
      <v-tab ripple>
        Aprovados
        <v-icon>done</v-icon>
      </v-tab>
<!-- tab em corte -->
      <v-tab ripple>
        EM CORTE
        <v-icon>straighten</v-icon>
      </v-tab>
<!-- Tab à entregar -->
      <v-tab ripple>
        À ENTREGAR
        <v-icon>done_all</v-icon>
      </v-tab>
<!-- CONTEÚDO DA TAB PENDENTES-->
      <v-tab-item>
        <v-card flat>
          <v-list two-line>
            <template v-for="(item, index) of dataPendente">
              <v-list-tile
                v-if="item.status === 'AGUARDANDO APROVAÇÃO'"
                :key="item['.key']"
                avatar
                @click="abrirDialog(item['.key'])"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.cliente }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.contato }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.endereco }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.dia }}/{{ item.mes }}/{{ item.ano }}</v-list-tile-action-text>
                  <!--<v-icon
                    v-if="selected.indexOf(index) < 0"
                    color="blue lighten-1"
                  >star_border</v-icon>
                  <v-icon
                    v-else
                    color="yellow darken-2"
                  >star</v-icon>-->
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < dataPendente.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-tab-item>

<!--CONTEÚDO DA TAB APROVADOS-->
      <v-tab-item>
        <v-list two-line>
          <v-card flat>
            <template v-for="(item, index) of dataPendente">
                <v-list-tile
                  scrollable
                  transition="dialog-bottom-transition"
                  v-if="item.status === 'APROVADO'"
                  :key="item.key"
                  avatar
                  @click="toggle(item['.key'], index)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.cliente }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.contato }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.endereco }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.dia }}/{{ item.mes }}/{{ item.ano }}</v-list-tile-action-text>
                    <!--<v-icon
                      v-if="selected.indexOf(index) < 0"
                      color="blue lighten-1"
                    >star_border</v-icon>
                    <v-icon
                      v-else
                      color="yellow darken-2"
                    >star</v-icon>-->
                    <v-btn @click="aprovar(item['.key'])">
                      APROVAR
                      <v-icon>done</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < dataPendente.length" :key="index"></v-divider>
              </template>
          </v-card>
        </v-list>
      </v-tab-item>

<!--CONTEÚDO DA TAB EM CORTE-->
      <v-tab-item>
        <v-list two-line>
          <v-card flat>
            <template v-for="(item, index) of dataPendente">
                <v-list-tile
                  transition="dialog-bottom-transition"
                  v-if="item.status === 'EM CORTE'"
                  :key="item.key"
                  avatar
                  @click="toggle(item['.key'], index)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.cliente }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.contato }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.endereco }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.dia }}/{{ item.mes }}/{{ item.ano }}</v-list-tile-action-text>
                    <!--<v-icon
                      v-if="selected.indexOf(index) < 0"
                      color="blue lighten-1"
                    >star_border</v-icon>
                    <v-icon
                      v-else
                      color="yellow darken-2"
                    >star</v-icon>-->
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < dataPendente.length" :key="index"></v-divider>
              </template>
          </v-card>
        </v-list>
      </v-tab-item>

<!--CONTEÚDO DA TAB À ENTREGAR-->
      <v-tab-item>
        <v-list two-line>
          <v-card flat>
            <template v-for="(item, index) of dataPendente">
                <v-list-tile
                  v-if="item.status === 'A ENTREGAR'"
                  :key="item.key"
                  avatar
                  @click="toggle(index)"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.cliente }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.contato }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.endereco }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.dia }}/{{ item.mes }}/{{ item.ano }}</v-list-tile-action-text>
                    <!--<v-icon
                      v-if="selected.indexOf(index) < 0"
                      color="blue lighten-1"
                    >star_border</v-icon>
                    <v-icon
                      v-else
                      color="yellow darken-2"
                    >star</v-icon>-->
                    <v-btn @click="aprovar(item['.key'])">
                      APROVAR
                      <v-icon>done</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < dataPendente.length" :key="index"></v-divider>
              </template>
          </v-card>
          <template>
            <!-- DIÁLOGO PEÇAS -->
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
              scrollable
            >
              <v-card tile>
                <v-toolbar card dark color="primary">
                  <v-btn icon dark @click.native="dialog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Resumo</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark flat @click="aprovar()">Aprovar</v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                  <v-tooltip v-if="false" right>
                    <v-btn slot="activator">Aprovar</v-btn>
                    Tool Tip
                  </v-tooltip>
                  <!--CONTEÚDO AQUI-->
                  <v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Notifications</v-list-tile-title>
                        <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                        <ul v-for="dataRecebida in dataRecebidaParaODialog" :key="dataRecebida['.key']">
                          <li>{{ dataRecebida }}</li>
                        </ul>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card-text>

                <div style="flex: 1 1 auto;"></div>
              </v-card>
            </v-dialog>
          </template>
        </v-list>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import {clienteRef} from '@/firefiles/firebase'
export default {
  name: 'tabs',
  data () {
    return {
      dialog: false,
      statusIcon: null,
      dataRecebidaParaODialog: {}
    }
  },
  firebase: {
    dataPendente: clienteRef.child('vendas')
  },
  methods: {
    toggle (key) {
      console.log('key', key)
    },
    abrirDialog (key) {
      this.dialog = true
      this.dataRecebidaParaODialog = this.dataPendente.child(key)
    },
    aprovar (key) {
      clienteRef.child('vendas').child(key).update({status: 'APROVADO'})
      console.log('chave', key)
    },
    cortar (key) {
      clienteRef.child('vendas').child(key).update({status: 'EM CORTE'})
      console.log('chave', key)
    },
    entregar (key) {
      clienteRef.child('vendas').child(key).update({status: 'A ENTREGAR'})
      console.log('chave', key)
    }
  },
  created () {
    // console.log('dados', this.data)
  }
}
</script>
