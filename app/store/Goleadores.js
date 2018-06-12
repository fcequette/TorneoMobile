Ext.define('TorneoMovil.store.Goleadores', {
    extend: 'Ext.data.Store',

    alias: 'store.goleadores',
    storeId:'Goleadores',
    // fields: [
    //     'name', 'email', 'phone'
    // ],
//autoLoad:true,

    proxy: {
      type: 'ajax'
      ,url: '/api/goleadoresporcategoria'
      ,method: 'GET'
        ,reader: {
            type: 'json',
            rootProperty: 'goleadores'
        }
    }
});
