Ext.define('TorneoMovil.store.Zonas', {
	 extend: 'Ext.data.Store'
	,storeId: 'Zonas'
	//,model:'Torneo.model.Zona'
	,proxy: {
		 type: 'ajax'
		,url: '/api/zona'
		,method: 'GET'
	 	,reader: {
	 		type: 'json',
			 rootProperty: 'zonas'
		 }
	 }
});
