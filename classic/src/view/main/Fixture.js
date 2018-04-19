
/**
 * This view is an example list of people.
 */
 Ext.define('Torneo.view.main.Fixture', {

    extend: 'Ext.container.Container',
    xtype: 'mainfixture',
    title:'Fixture',
    width:'100%',
    height:'100%'

    ,items:[{
      xtype:'grid'
      ,itemId:'fixtureGrid'
      ,width:'100%'
      ,height:'100%'
      ,title: 'Fixture'
      ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay datos</p>'
      ,store: 'Fixture'
      ,features: [{ftype:'grouping'}]
      ,columns: [
         { text: 'Equipo 1  ', dataIndex: 'equipo1', width:window.innerWidth*0.25,sortable:false },
         { text: '   ', dataIndex: 'fixture_goles_eq1',width:window.innerWidth*0.1,align:'center'},
         { text: 'Equipo 2  ', dataIndex: 'equipo2' ,width:window.innerWidth*0.25,sortable:false  },
         { text: '   ', dataIndex: 'fixture_goles_eq2' ,width:window.innerWidth*0.1,align:'center'},
         { text: 'Cancha',dataIndex: 'cancha',width:window.innerWidth*0.15,sortable:false },
         {text: 'Turno  ',width:window.innerWidth*0.15  ,dataIndex:'turno_descri',sortable:false }]
    }]

});
