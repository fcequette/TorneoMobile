
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
          { text: '', dataIndex: 'pos', width:window.innerWidth*0.15,sortable: false},
           { text: 'Id  ', dataIndex: 'equipo_id', width: window.innerWidth*0.15,hidden:true},
           { text: 'Equipo  ', dataIndex: 'equipo_nombre', width:window.innerWidth*0.45,sortable: false },
           { text: 'Ptos',  dataIndex: 'ptos', width:window.innerWidth*0.2,sortable: false  },
           { text: 'P.J', dataIndex: 'pj',width:80,sortable: false ,hidden:true },
           { text: 'P.G', dataIndex: 'pg', width:80,sortable: false,hidden:true },
           { text: 'P.E', dataIndex: 'pe', width: 80,sortable: false,hidden:true  },
           { text: 'P.P', dataIndex: 'pp', width: 80 ,sortable: false,hidden:true },
           { text: 'G.a.F', dataIndex: 'gf', width: 70 ,sortable: false,hidden:true},
           { text: 'Dif ', dataIndex: 'dif', width: window.innerWidth*0.2,sortable: false }
        ]
      }]
});
