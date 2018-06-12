Ext.define('TorneoMovil.store.Capilla', {
	 extend: 'Ext.data.Store'
	,storeId: 'Capilla'
	//,model:'Torneo.model.Amonestado'
	,proxy: {
		 	type: 'ajax'
		 	,url: '/api/encapilla'
			//,url: 'https://api.myjson.com/bins/tnlgr'
			,method: 'GET'
	 		,reader: {
	 			type: 'json',
			 	rootProperty: 'encapilla'
		 }
	 }
});
