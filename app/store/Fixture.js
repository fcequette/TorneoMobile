Ext.define('TorneoMovil.store.Fixture', {
	 extend: 'Ext.data.Store'
	,storeId: 'Fixture'
	,alias: 'store.fixture'
//,autoLoad: true
	// ,groupField: 'fecha'
	,grouper : {
			property : 'fecha',
			sortProperty : 'group_index',
	}
	//,model:'Plani.model.Fixtures'
	// ,alias: 'store.fixture'
	,fields: [
	{name: 'equipo1'}
	,{name: 'equipo2'}
	,{name: 'vs' ,defaultValue:'VS'}
	,{name: 'imagen1'}
	,{name: 'imagen2'}
	,{name: 'fecha'}

]
	,proxy: {
		 type: 'ajax'
		,url: 'http://dario-casa.sytes.net/api/fixture'
		,method: 'GET'
	 	,reader: {
	 			type: 'json',
				rootProperty: 'fixture'
		}
	}
});
