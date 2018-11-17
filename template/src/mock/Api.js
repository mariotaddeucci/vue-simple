import Instituion from './Institution'
var routes = [];

routes.push({route:'/institutions',method:'GET',data: Instituion});
Instituion.forEach(inst => routes.push({route:'/institutions/' + inst.id,method:'GET',data: inst}));

routes.push({route:'/login',method:'POST',data: {'token':'token123'}});

routes.push({route:'/company',method:'POST',data: {'created':'ok'}});

export default routes;