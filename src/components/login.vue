<template>
  <div class="login">
    <div class="md-layout md-gutter md-alignment-center-center">
      <md-card md-with-hover>
          <md-card-content>
            <md-field>
              <md-icon>face</md-icon>
              <label>Email</label>
              <md-input v-model="email"></md-input>
            </md-field>
            <md-field>
              <md-icon>lock</md-icon>
              <label>Senha</label>
              <md-input type="password" v-model="senha"></md-input>
            </md-field>
          </md-card-content>

          <md-card-actions>
            <md-button @click="login()">
              Entrar
            </md-button>
          </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
  }
}
</script>

<style>
  .md-card {
    width: 320px;
    margin: 4px;
    top: 150px;
    display: inline-block;
    border-radius: 5px;
    padding: 10px;
  }
</style>
