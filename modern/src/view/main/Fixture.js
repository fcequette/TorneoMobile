
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
             '<div class="headshot" style="background-image:url(resources/images/headshots/{equipo1});"></div>',
             '{equipo1}<tpl if="fixture_estado == \'1\'"> <strong> VS </strong> </tpl>  <tpl if="fixture_estado == \'0\'"><a style="color:red;font-style:bold">({fixture_goles_eq1})</a></tpl>  {equipo2} <tpl if="fixture_estado == \'0\'"> <a style="color:red;font-style:bold">({fixture_goles_eq2})</a></tpl></br>',
             '<tpl if="fixture_estado == \'1\'"><strong>Cancha: </strong> {cancha},  <strong>Turno:</strong> {turno_descri}</tpl>'
         ].join('')
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
