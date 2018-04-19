
/**
 * This view is an example list of people.
 */
Ext.define('Torneo.view.main.Valla', {
    extend: 'Ext.container.Container',
    xtype: 'mainvencida',
    title:'Valla - vencida',
    // requires: [
    //
    // ],
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10
    //,scrollable:true
    ,items:[{
        xtype:'grid'
      ,store: 'Valla'
     ,width:'100%'
      ,height:'100%'
      ,title:'Valla menos vencida'
      ,emptyText:'<p style="color:red;font-size:15px;margin-top:140px;margin-left:10px;">No hay datos cargados</p>'
           // ,layout:'fit '
         //  ,titleBar: { hidden: true }
         ,columns:[{
           text: 'Posicion'
           ,name: 'pos'
           ,dataIndex : 'pos'
           ,flex: 1
           ,hidden:true
         },{
           text: 'Equipo'
           ,name: 'equipo_nombre'
           ,dataIndex : 'equipo_nombre'
           ,width: window.innerWidth*0.4
           ,align:'center'
         },{
           text: 'Posicion general'
           ,name: 'pos-gral'
           ,dataIndex : 'pos-gral'
           ,flex: 1
           ,hidden:true
         },{
           text: 'Prom'
           ,name: 'prom_gol_rec'
           ,dataIndex : 'prom_gol_rec'
           ,width: window.innerWidth*0.2
           ,align:'center'
         },{
           text: 'Puntos'
           ,name: 'ptos'
           ,dataIndex : 'ptos'
           ,flex: 1
           ,hidden:true

         },{
           text: 'Partidos jugados'
           ,name: 'pj'
           ,dataIndex : 'pj'
           ,width: window.innerWidth*0.2
           ,align:'center'



         },{
           text: 'P.Ganados'
           ,name: 'pg'
           ,dataIndex : 'pg'
           ,flex: 1
           ,hidden:true

         },{
           text: 'P.Empatados'
           ,name: 'pe'
           ,dataIndex : 'pe'
           ,flex: 1
           ,hidden:true

         }
         ,{
           text: 'P.Perdidos'
           ,name: 'pp'
           ,dataIndex : 'pp'
           ,flex: 1
           ,hidden:true

         },{
           text: 'GF'
           ,name: 'gf'
           ,dataIndex : 'gf'
           ,flex: 1
           ,hidden:true
         },{
           text: 'GC'
           ,name: 'gc'
           ,dataIndex : 'gc'
           ,flex: 1
           ,width: window.innerWidth*0.2
           ,align:'center'

         },{
           text: 'Diferencia'
           ,name: 'dif'
           ,dataIndex : 'dif'
           ,flex: 1
           ,hidden:true
     	}]
        //,iconCls:'x-fa fa-list'
    }]
    // }

});
