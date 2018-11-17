<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" v-model="login_param.username" label="Login"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="login_param.password" label="Password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    login_param:{},
    drawer: null
  }),
  methods:{
    login(){
      this.$http.post('login', this.login_param).then((resp)=> this.$setCookie('token', resp.data.token));
    }
  },
  props: {
    source: String
  }
}
</script>
