<template >
  <v-app id="app" v-if="is_login">
    <v-navigation-drawer fixed app  :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app fixed  :clipped-left="$vuetify.breakpoint.lgAndUp" >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Escritório de Carreiras</span> 
      </v-toolbar-title>
      <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down" ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile> <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify" > </v-avatar>
      </v-btn>
    </v-toolbar>
<!---
    <v-speed-dial fixed bottom right open-on-hover  v-model="fab">
      <v-btn fab slot="activator" hover color="pink" v-model="fab" dark>
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn fab dark slot="activator" color="green" >
        <v-icon>help_outline</v-icon>
      </v-btn>
      <span>Cadastrar Notícia</span>
    </v-tooltip>
    <v-tooltip left>
      <v-btn fab slot="activator" small color="cyan">
        <v-icon>help_outline</v-icon>
      </v-btn>
      <span>Cadastrar Questões</span>
    </v-tooltip>
  </v-speed-dial>

-->
<v-content>
  <v-container>
    <router-view></router-view>
  </v-container>
</v-content>

</v-app>
<v-app id="app" v-else>
  <login-page></login-page>
</v-app>
</template>
<script>
  import LoginPage from './router/Login.vue';
  export default {
    components: {
      'login-page':LoginPage
    },
    computed:{
      is_login(){
        return Boolean(this.$cookies.token);
      }
    },
    data(){
      return {
        fab:null
      }
    }
  }
</script>