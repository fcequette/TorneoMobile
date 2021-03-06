
/**
 * This view is an example list of people.
 */
Ext.define('Torneo.view.main.EnCapilla', {
    extend: 'Ext.container.Container',
    xtype: 'maincapilla',
    title:'En Capilla',
    // requires: [
    //
    // ],
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10
,scrollable:true
    ,items:[{
        xtype:'grid'
      ,store: 'Capilla'
      ,title: 'En capilla'
     ,width:'100%'
      ,height:'100%'
      ,emptyText: '<p style="color:red;font-size:15px;margin-top:110px;margin-left:10px;">No hay  jugadores  en capillla para la categoria</p>'

     ,height:600
      ,columns:[{
        text: 'Jugador Id'
        ,name: 'jugador_id'
        ,dataIndex : 'jugador_id'
        //,flex: 1
        ,width:150
        ,hidden:true
      },{
        text: 'Jugador'
        ,name: 'text'
        ,dataIndex : 'text'
        ,sortable:false

        //,flex: 1
        ,align:'center'
        ,width:window.innerWidth*0.4
      },{
        text: 'Equipo'
        ,name: 'equipo'
        ,dataIndex : 'equipo'
        //,flex: 1
        ,align:'center'
        ,sortable:false
        ,width:window.innerWidth*0.4
      },{
        text: ' Amarillas'
        ,name: 'cantamarillas'
        ,dataIndex : 'cantamarillas'
        //,flex: 1
        ,align:'center'
        ,width:window.innerWidth*0.2
      }]
    }]
});
