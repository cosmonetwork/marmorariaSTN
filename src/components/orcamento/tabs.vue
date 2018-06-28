<template>
  <div>
    <v-tabs icons-and-text dark centered color="blue darken-3">
      <v-tabs-slider color="red"></v-tabs-slider>
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
            <template v-for="(item, index) of data">
              <v-list-tile
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
                  <v-btn>
                    APROVAR
                    <v-icon>done</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < data.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-tab-item>

<!--CONTEÚDO DA TAB APROVADOS-->
      <v-tab-item>
        <v-card flat>
          tab2
        </v-card>
      </v-tab-item>

<!--CONTEÚDO DA TAB EM CORTE-->
      <v-tab-item>
        <v-card flat>
          tab3
        </v-card>
      </v-tab-item>

<!--CONTEÚDO DA TAB À ENTREGAR-->
      <v-tab-item>
        <v-card flat>
          tab4
        </v-card>
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
      selected: [2, 4],
      items: [
        { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
        { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
        { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
        { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
      ]
    }
  },
  firebase: {
    data: clienteRef.child('vendas')
  },
  methods: {
    toggle (key) {
      console.log('key', key)
    }
  },
  created () {
    // console.log('dados', this.data)
  }
}
</script>
