
/**
 * This view is an example list of people.
 */
 Ext.define('Torneo.view.main.Goleadores', {
     extend: 'Ext.container.Container',
     xtype: 'maingoleadores',

     config: {
         //title: 'Goleadores',
         //cls: 'x-contacts',
         variableHeights: true,
         height:window.innerHeight-50,
         store: 'Goleadores'
         ,scrollable:true
         ,items:[{
           xtype:'grid'
           ,itemId:'goleadoresGrid'
           ,width:'100%'
           ,height:'100%'
           ,title: 'Goleadores'
           ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay datos</p>'
           ,store: 'Goleadores'
           //,features: [{ftype:'grouping'}]
           ,columns: [
              { text: 'Jugador  ', dataIndex: 'jugador_apellido', width: window.innerWidth*0.4,sortable:false,align:'center' },
              { text: ' Goles  ', dataIndex: 'goles_cantidad',width: window.innerWidth*0.2,align:'center'},
              { text: 'Equipo   ', dataIndex: 'equipo_nombre', width: window.innerWidth*0.4,sortable:false,align:'center'  }]
         }]
     }
 });

// Ext.define('TorneoMovil.view.main.Fixture', {
//     extend: 'Ext.container.Container',
//     xtype: 'mainfixture',
//     title:'Fixture',
//     width:'100%',
//     height:'100%'
//
//     ,items:[{
//       xtype:'grid'
//       ,itemId:'fixtureGrid'
//       ,width:'100%'
//       ,height:'100%'
//       ,title: 'Fixture'
//       ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay datos</p>'
//       ,store: 'Fixture'
//       ,features: [{ftype:'grouping'}]
//       ,columns: [
//          { text: 'Equipo 1  ', dataIndex: 'equipo1', width: 110,sortable:false },
//          { text: '   ', dataIndex: 'fixture_goles_eq1',width: 50,align:'center'},
//          { text: 'Equipo 2  ', dataIndex: 'equipo2', width: 110,sortable:false  },
//          { text: '   ', dataIndex: 'fixture_goles_eq2',width: 50,align:'center'},
//          { text: 'Cancha',dataIndex: 'cancha',width: 85,sortable:false },
//          {text: 'Turno  ',width: 100  ,dataIndex:'turno_descri',sortable:false }]
//     }]
//
// });