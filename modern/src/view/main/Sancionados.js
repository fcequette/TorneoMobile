
/**
 * This view is an example list of people.
 */
Ext.define('TorneoMovil.view.main.Sancionados', {
    extend: 'Ext.container.Container',
    xtype: 'mainsancionados',
    title:'Sancionados',
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10

    ,items:[{
        xtype:'grid'
        ,store: 'Sancionados'
        ,width:'100%'
        ,height:'100%'
        ,title:'Sancionados'
        ,emptyText:'<p style="color:red;font-size:15px;margin-top:140px;margin-left:10px;">No hay expulsados cargados</p>'
           // ,layout:'fit '
         //  ,titleBar: { hidden: true }
          ,columns:[{
            text: 'Id de jugador'
            ,name: 'Id de jugador'
            ,dataIndex : 'text'
            ,width:30
            ,hidden:true
            ,sortable:false

          },{
            text: 'Jugador'
            ,name: 'jugador_nombre'
            ,dataIndex: 'jugador_nombre'
            ,width:window.innerWidth*0.5
            ,sortable:false

          },{
            text: 'Equipo'
            ,name: 'equipo_nombre'
            ,dataIndex: 'equipo_nombre'
            ,width:window.innerWidth*0.35
            ,sortable:false

          },{
            text: 'Sancion'
            ,name: 'Nombre jugador'
            ,dataIndex: 'sancion'
            ,width:window.innerWidth*0.15
            ,sortable:false

          }]
        //,iconCls:'x-fa fa-list'
    }]
    // }

});

// Ext.define('TorneoMovil.view.main.Sancionados', {
//     extend: 'Ext.grid.Grid',
//     fullscreen: true,
//     xtype: 'mainsancionados'
//     ,store: 'Sancionados'
//        // ,emptyText:'<p style="color:red;font-size:15px;margin-top:140px;margin-left:10px;">No hay expulsados cargados</p>'
//        //  ,fullscrean:true
//        //  ,titleBar: { hidden: true }
//         ,columns:[{
//           text: 'Id de jugador'
//           ,name: 'Id de jugador'
//           ,dataIndex : 'text'
//           ,width:30
//           ,hidden:true
//           ,sortable:false
//
//         },{
//           text: 'Jugador'
//           ,name: 'jugador_nombre'
//           ,dataIndex: 'jugador_nombre'
//           ,width:150
//           ,sortable:false
//
//         },{
//           text: 'Equipo'
//           ,name: 'equipo_nombre'
//           ,dataIndex: 'equipo_nombre'
//           ,width:150
//           ,sortable:false
//
//         },{
//           text: 'Vuelve'
//           ,name: 'sancionados_vuelve'
//           ,dataIndex: 'sancionados_vuelve'
//           ,width:80
//           ,sortable:false
//
//         },{
//           text: 'Sancion'
//           ,name: 'Nombre jugador'
//           ,dataIndex: 'sancion'
//           ,width:80
//           ,sortable:false
//
//         }]
//   });
