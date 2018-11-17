<template>
  <v-form >
    <v-text-field v-model="institution.company"  label="Compania" required></v-text-field>
    <v-text-field v-model="institution.cnpj"  label="CNPJ" required></v-text-field>
    <v-text-field v-model="institution.city"  label="Cidade" required></v-text-field>
    <v-text-field v-model="institution.level"  label="Level" required></v-text-field>
    <v-text-field v-model="institution.code"  label="Código" required></v-text-field>
    <v-btn @click="save()">Salvar</v-btn>
    <v-btn @click="id=2">Salvar</v-btn>
  </v-form>
</template>
<script>
  export default{
    data(){
      return{
        institution:{}
      }
    },
    watch:{
      id(id){
        this.get();
      }
    },
    props: {
      id:{
        default:0
      }
    },
    created(){
      this.get();
    },
    methods:{
      get(){
        if(this.id){
          this.$http.get(`institutions/${this.id}`).then(resp=> this.institution = resp.data);
        }
      },
      save(){
        if(this.id){
          this.$http.put(`institutions/${this.id}`, this.institution).then(resp=>{
            console.log(resp.data);
          });
        }else{
          this.$http.post('institutions', this.institution).then(resp=>{
            console.log(resp.data);
          });
        }
      }
    }
  }
</script>