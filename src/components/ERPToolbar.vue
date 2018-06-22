<template>
  <div>
  <!--<div class="ERPToolbar complete-example">
      <md-whiteframe md-elevation="2" md-theme="sidebar">
        <md-toolbar md-theme="sidebar" class="md-dense">

          <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title">{{ titulo }}</h2>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </md-toolbar>
      </md-whiteframe>

      <md-sidenav class="md-fixed" md-theme="sidebar" ref="sidenav">
        <md-toolbar class="md-primary md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-avatar-list">
              <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/11" alt="People">
              </md-avatar>
            </md-list-item>

            <md-list-item>
              <div class="md-list-text-container">
                <span>Lorran Ramos</span>
                <span>ptklorran@gmail.com</span>
              </div>

              <md-button class="md-icon-button md-list-action">
                <md-icon>arrow_drop_down</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-toolbar>

        <md-list>
          <md-subheader>ORÇAMENTO</md-subheader>
          <md-list-item @click="$refs.sidenav.toggle()">
            <router-link to="/novoorcamento"> <md-icon>insert_drive_file</md-icon> <span @click="$refs.sidenav.toggle()">Novo Orçamento</span></router-link>
          </md-list-item>
          <md-divider />

          <md-subheader>CLIENTES</md-subheader>
          <md-list-item @click="$refs.sidenav.toggle()">
            <md-icon>people</md-icon> <span>Cadastrar Cliente</span>
          </md-list-item>

          <md-divider />
          <md-subheader>CAIXA</md-subheader>
        </md-list>
      </md-sidenav>
      <router-view />
  </div>-->
  <div class="ERPToolbar">
    <md-app>
      <md-app-toolbar class="md-elevation-1 md-dense md-primary">
        <md-button class="md-icon-button" @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{ titulo }}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" md-permanent="clipped">
        <md-list>
          <md-list-item to="/novoorcamento">
            <md-icon>insert_drive_file</md-icon>
            <span class="md-list-item-text">Novo Orçamento</span>
          </md-list-item>

          <md-divider />
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ERPToolbar',
  data () {
    return {
      menuVisible: false,
      titulo: 'Marmoraria Santa Ana'
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

  .md-app {
    min-height: 600px;
  }

  .md-drawer {
    height: 600px;
    position: inherit;
    width: 250px;
    max-width: calc(100vw - 125px);
  }
  .md-toolbar.md-theme-default.md-primary {
    background-color: #448aff;
  }

</style>
