
/**
 * This view is an example list of people.
 */
Ext.define('TorneoMovil.view.main.Posiciones', {
    extend: 'Ext.container.Container',
    xtype: 'posiciones',
    title:'Posiciones',
    // requires: [
    //
    // ],
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10

    ,items:[{
        xtype:'grid',
        width:'100%',
        height:'100%'
        ,title: 'Posiciones'
        ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay datos</p>'
        ,store: 'Posiciones'
        ,columns: [
          { text: '', dataIndex: 'pos', width:40,sortable: false},
           { text: 'Id  ', dataIndex: 'equipo_id', width: 40 ,hidden:true},
           { text: 'Equipo  ', dataIndex: 'equipo_nombre', width:200 ,sortable: false },
           { text: 'Ptos',  dataIndex: 'ptos', width:70,sortable: false  },
           { text: 'P.J', dataIndex: 'pj',width:80,sortable: false  },
           { text: 'P.G', dataIndex: 'pg', width:80,sortable: false },
           { text: 'P.E', dataIndex: 'pe', width: 80,sortable: false  },
           { text: 'P.P', dataIndex: 'pp', width: 80 ,sortable: false },
           { text: 'G.a.F', dataIndex: 'gf', width: 70 ,sortable: false},
           { text: 'Dif ', dataIndex: 'dif', width: 70,sortable: false }
        ]
      }]
});
