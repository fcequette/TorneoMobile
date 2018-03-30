/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('TorneoMovil.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.MessageBox',

        'TorneoMovil.view.main.MainController',
        'TorneoMovil.view.main.MainModel',
        'TorneoMovil.view.main.Opciones',
        'TorneoMovil.view.main.Sancionados',
        'TorneoMovil.view.main.EnCapilla',
        'TorneoMovil.view.main.Posiciones',
        'TorneoMovil.view.main.Valla',
        'TorneoMovil.view.main.Fixture'
        // 'Ext.grid.feature.Grouping'

    ],

    controller: 'main',
    viewModel: 'main',
cls:'formPrincipal',
    fullscreen: true,
    items: [
    {
         docked: 'top',
         xtype: 'toolbar',
         style:'background-color:#2b5e0d',
         items: [{

           xtype:'button'
           ,iconCls: 'x-fa fa-home'
           ,handler: function (fp,e) {
                console.log('allalala');
                var tab =Ext.ComponentQuery.query('#tabini')[0];
                tab.removeAll();
                tab.add({
                  title: 'Opciones',
                   iconCls: 'x-fa fa-list'
                   ,items:[{
                       xtype:'opciones'
                 }]});
                Ext.ComponentQuery.query('#tabini')[0].hide();
                Ext.ComponentQuery.query('#formini')[0].show();
           }
     },{
           xtype:'label'
           ,itemId:'labelHeader'
           ,style:'color:#FFF'
           ,html: '<div><div style=padding-left:30px;color:#FFF;font-size:50px;display:inline-block></div><a style="font-weight:bold;color:#FFF">TODA LA GRINGA</a></div>'
           ,padding: 10
      }]
     },{
       xtype:'tabpanel',
       width:'100%',
       height:'100%',
       itemId:'tabini',
       //style:'background-color:green',
       style:'background:url("http://dario-casa.sytes.net/home-header.jpg");background-size:100%;',
      // style:'background:url("http://dario-casa.sytes.net/Torneo/gcl_Wallpapers.jpg");background-size:100%;',
       hidden:true,
       tabBar: {
         style:'background-color: #f5f5f5;'
       }
       ,defaults: {
           tab: {
               iconAlign: 'center',
               width:'50%'
               ,padding:1
               ,style:'color:#606060'
               ,listeners:{

                 activate:function(value,a){
                   console.log('holababy',value._title);
                  if(Ext.ComponentQuery.query('#tabini')[0]){
                    if(value._title =='Opciones'){
                      Ext.ComponentQuery.query('#tabini')[0].setActiveItem(0);
                    }else{
                      Ext.ComponentQuery.query('#tabini')[0].setActiveItem(1);
                    }
                  }
                 }
               }
           },
            styleHtmlContent: true
       },
       items: [
           {
               title: 'Opciones',
               iconCls: 'x-fa fa-list',
               //,items:[{
                 xtype:'opciones'

              // }]
           }]

     },{
       xtype:'formpanel',
       itemId:'formini',
       width:'100%',
       height:'100%',
       cls:'formPrincipal',
      // modal: true,
       bodyPadding: 10
       // style: {
       //   background: 'url("http://dario-casa.sytes.net/home-header.jpg")!important;background-size:100%;'
       // }

       ,defaults:{
         style:'background:transparent',
         margin:'50 0'
       }
       ,items:[{
         xtype:'selectfield'
           ,label:'Torneo'
           ,itemId:'selectTorneo'
           ,name:'torneo_id'
           ,store:'Torneos'
           ,displayField:'torneo_descri'
           ,valueField:'torneo_id'
           //,autoSelect: true
            ,namecmb:'Categorias'
           ,listeners:{
             change: function(cmb,e){
               Ext.getStore(cmb.namecmb).removeAll();
               Ext.getStore(cmb.namecmb).load({params:{param:cmb.getValue()}});
             }
           }
       },{
         xtype:'selectfield'
         ,label:'Categoria'
         ,itemId:'selectCategoria'
          ,store: 'Categorias'
          ,displayField:'categoria_descri'
          ,name:'categoria_id'
          ,valueField:'categoria_id'
          ,namecmb:'Zonas'
          ,listeners:{
            change: function(cmb,e){
              Ext.getStore(cmb.namecmb).removeAll();
              Ext.getStore(cmb.namecmb).load({params:{param:cmb.getValue()}});
            }
          }
       },{
         xtype:'selectfield'
         ,label:'Zona'
         ,store: 'Zonas'
         ,itemId:'selectZona'
         ,namecmb:'Fechas'
         ,displayField:'zona_descri'
         ,valueField:'zona_id'
         ,name:'zona_id'
         ,listeners:{
           change: function(cmb,e){
             //Ext.getStore(cmb.namecmb).removeAll();
             //Ext.getStore(cmb.namecmb).load({params:{param:cmb.getValue()}});
           }
         }
       }
       ,{
         xtype: 'button',
         text: 'SIGUIENTE',
         style: 'background-color: transparent; font-weight: "bold"; font-size:25px;color:#FFF;border:none',
         //style: 'background-color:#5fa2dd;height:50px;color:#FFF;font-size:20px',
         listeners:{
           tap:function(fp,e){
             console.log('mio');
             Ext.ComponentQuery.query('#labelHeader')[0].setHtml(fp.up().down('#selectTorneo')._value.data.torneo_descri+'<a style="font-weight:bold">></a>'+fp.up().down('#selectCategoria')._value.data.categoria_descri+'<a style="font-weight:bold">></a>'+fp.up().down('#selectZona')._value.data.zona_descri);
             Ext.ComponentQuery.query('#tabini')[0].show();
             Ext.ComponentQuery.query('#formini')[0].hide();
             Ext.ComponentQuery.query('#tabini')[0].setActiveItem(0);
           }
         }
      }]
  }
]
,listeners:{
  initialize:function(bn,e){
      console.log('entro');
       Ext.Viewport.add({
              xtype: 'formpanel',
              itemId:'portada',
              width:'100%',
              height:'100%',
              bodyPadding: 10,
              style:'background-color:red!important',
              defaults:{

                margin:'50 0'
              }
              , items: [
              {
                html:'<img width=120px;height:100px; src="http://dario-casa.sytes.net/Torneo/logo.png" alt="GRUPO BINARIO">'
                ,padding:'0 0 0 0'
                ,margin:'200 0 200 110'
                ,style: 'background-color:transparent'
                ,height:120
              }]
      });
      Ext.defer(function() {
        console.log('hola');
         Ext.Viewport.remove(Ext.ComponentQuery.query('#portada')[0],true);
       }, 1500) ;

    }
  }

});
