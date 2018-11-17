import Home from './router/Home.vue';
import P404 from './router/404.vue';
import P403 from './router/403.vue';
import Institutions from './router/Institutions.vue';
import Institution from './router/components/Institution.vue';

var menu_tree = [
{path:'/', name:'home', component:Home},
{path: '/institutions/:id', name:'institution', component: Institution, props: true  },
{path: '/institutions', name:'institutions', component: Institutions},
{path: '/403', name:'403', component: P403 },
{path: '/404', name:'404', component: P404 },
{path: '*', redirect: {name:'404'}},
]

export default{
	getRoutes(){
		return menu_tree;
	}
}