
/**
 * This view is an example list of people.
 */
 Ext.define('TorneoMovil.view.main.Fixture', {
     extend: 'Ext.List',
     xtype: 'mainfixture',

     config: {
         title: 'FIXTURE',
         //cls: 'x-contacts',
         variableHeights: true,
         height:window.innerHeight,
         store: 'Fixture',
         grouped: true,
         itemTpl: [

             '<div style="display:inline-block;vertical-align: middle;width:30%;height:40px;text-align: center;line-height: 20px;padding-right: 10px;">{equipo1}</div><div style="width:30%;text-align:center;display:inline-block;height:45px;vertical-align: middle;"> <tpl if="fixture_estado == \'1\'"> <strong style="font-size:15px;font-weight:bold;">Cancha: </strong>{cancha}  </br> <strong style="font-size:15px;font-weight:bold;">Turno:</strong> {turno_descri} </tpl><tpl if="fixture_estado == \'0\'"><a style="font-weight: bold">{fixture_goles_eq1}</a></tpl><tpl if="fixture_estado == \'0\'"> <a style="font-weight: bold;">- {fixture_goles_eq2}</a></tpl></div><div style="padding-left:10px;display:inline-block;width:30%;height:40px;text-align: center;line-height: 20px;vertical-align: middle;">{equipo2}</div> </br>',

         ].join('')
     }
     ,listeners:{
      renderedchange:function( ee, item, rendered, eOpts ){
         Ext.Viewport.remove(Ext.Viewport._items.items[1],true)
       }
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
