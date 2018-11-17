<template>
	<v-data-table :headers="headers" :items="institutions"  class="elevation-1">
		<template slot="items" slot-scope="props">
			<td>{{ props.item.company }}</td>
			<td>{{ props.item.cnpj }}</td>
			<td>{{ props.item.level }}</td>
			<td>{{ props.item.code }}</td>
			<td class="justify-center layout px-0">
				<v-icon small class="mr-2">edit</v-icon>
				<v-icon small @click="remove(props.item)">delete</v-icon>
			</td>
		</template>
	</v-data-table>
</template>
<script>
	export default{
		data(){
			return{
				headers:[
				{ text: 'Compania', value: 'company', sortable: true},
				{ text: 'CNPJ', value: 'cnpj', sortable: true },
				{ text: 'Nivel', value: 'level', sortable: true  },
				{ text: 'Código (g)', value: 'code' },
				{ text: 'Ações', sortable:false}
				],
				institutions:[]
			}
		},
		created(){	
			this.$http.get('institutions').then(resp => this.institutions = resp.data);
		},
		methods:{
			remove(item){
				this.$http.delete(`institutions/${item.id}`).then(resp =>{
					var indx =  this.institutions.indexOf(item)
					this.institutions.splice(indx, 1);
				});
			},
			edit(item){
				this.$router.push({name:'licitacoes', params:{id:item.id}})
			}
		}
	}
</script>