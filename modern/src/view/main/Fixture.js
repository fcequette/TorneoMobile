
/**
 * This view is an example list of people.
 */
Ext.define('TorneoMovil.view.main.Fixture', {
    extend: 'Ext.container.Container',
    xtype: 'mainfixture',
    title:'Fixture',
    // requires: [
    //
    // ],
    width:'100%',
    height:'100%'
   // bodyPadding: 10

    ,items:[{
      xtype:'grid'
      ,itemId:'fixtureGrid'
      ,width:'100%'
      ,height:'100%'
      ,title: 'Fixture'
      ,style:'background-color: transparent;'
      ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay datos</p>'
      ,store: 'Fixture'
      ,features: [{ftype:'grouping'}]
      ,columns: [
         { text: 'Fecha ', dataIndex: 'fecha', width:60 ,sortable:false  },
         { text: 'Equipo 1  ', dataIndex: 'equipo1', width: 100,sortable:false },
         { text: 'VS',  value: 'VS',dataIndex: 'vs', width: 50,sortable:false },
         { text: 'Equipo 2  ', dataIndex: 'equipo2', width: 100,sortable:false  },
         { text: 'Cancha',dataIndex: 'cancha',width: 85,sortable:false },
         {text: 'Turno  ',width: 100  ,dataIndex:'turno_descri',sortable:false }]
        //,iconCls:'x-fa fa-list'
    }]
    // }

});
