/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TorneoMovil.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TorneoMovil.view.main.MainController',
        'TorneoMovil.view.main.MainModel',
        'TorneoMovil.view.main.List',
        'Torneo.view.main.Opciones',
        'Torneo.view.main.Posiciones',
        'Torneo.view.main.Goleadores',
        'Torneo.view.main.Sancionados',
        'Torneo.view.main.EnCapilla',
        'Torneo.view.main.Valla',
        'Torneo.view.main.Fixture'



    ],

    controller: 'main',
    viewModel: 'main',

    // ui: 'navigation',

    // tabBarHeaderPosition: 1,
    // titleRotation: 0,
    // tabRotation: 0,
    //
    // header: {
    //     layout: {
    //         align: 'stretchmax'
    //     },
    //     title: {
    //         bind: {
    //             text: '{name}'
    //         },
    //         flex: 0
    //     },
    //     iconCls: 'fa-th-list'
    // },
    //
    // tabBar: {
    //     flex: 1,
    //     layout: {
    //         align: 'stretch',
    //         overflowHandler: 'none'
    //     }
    // },
    //
    // responsiveConfig: {
    //     tall: {
    //         headerPosition: 'top'
    //     },
    //     wide: {
    //         headerPosition: 'left'
    //     }
    // },
    //
    // defaults: {
    //     bodyPadding: 20,
    //     tabConfig: {
    //         plugins: 'responsive',
    //         responsiveConfig: {
    //             wide: {
    //                 iconAlign: 'left',
    //                 textAlign: 'left'
    //             },
    //             tall: {
    //                 iconAlign: 'top',
    //                 textAlign: 'center',
    //                 width: 120
    //             }
    //         }
    //     }
    // },

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
                      title: 'Opciones'
                       // iconCls: 'x-fa fa-list'
                       //style:'background-color:transparent',
                       ,items:[{
                           xtype:'opciones'
                     }]});
                    Ext.ComponentQuery.query('#tabini')[0].hide();
                    Ext.ComponentQuery.query('#formini')[0].show();
               }
         },{
               xtype:'label'
               ,itemId:'labelHeader'
               ,style:'color:#FFF;font-size:15px'
                 ,html: '<div><div style=padding-left:30px;color:#FFF;font-size:50px;display:inline-block></div><a style="font-weight:bold;color:#FFF;font-size:20px">TODA LA GRINGA</a></div>'
                 ,padding: 1
            }]
        },{
            xtype:'tabpanel',
            width:'100%',
            height:'100%',
            itemId:'tabini',
            //style:'background-color:green',
            style:'background:url("http://todalagringa.com.ar/home-header.jpg");background-size:100%;',
           // style:'background:url("http://todalagringa.com.ar/Torneo/gcl_Wallpapers.jpg");background-size:100%;',
            hidden:true,
            tabBar: {
              style:'background-color: #f5f5f5;'
            }
            ,defaults: {
                tab: {
                    iconAlign: 'center',
                    width:window.innerWidth/2
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
                    // iconCls: 'x-fa fa-list',
                    //,items:[{
                     xtype:'opciones'

                   // }]
                }]

        },{
          xtype:'form',
          itemId:'formini',
          width:'100%',
          height:'100%',
          cls:'formPrincipal',
         // modal: true,
          bodyPadding: 10,
          style: {
            background: 'url("http://todalagringa.com.ar/home-header.jpg")!important;background-size:100%;'
          }

          ,defaults:{
            style:'background:transparent',
            // background: 'url("http://todalagringa.com.ar/home-header.jpg")!important;background-size:100%;'
            margin:'100 '+ window.innerWidth/2.7,
          }
          ,items:[{
            xtype:'combobox'
              ,label:'Torneo'
              ,itemId:'selectTorneo'
              ,margin:'50 '+ window.innerWidth/2.7
              ,name:'torneo_id'
              ,store:'Torneos'
              ,fieldLabel:'Torneo'
              ,displayField:'torneo_descri'
              ,valueField:'torneo_id'
              ,allowBlank:false
              //,autoSelect: true
               ,namecmb:'Categorias'
              ,listeners:{
                change: function(cmb,e){
                  Ext.getStore(cmb.namecmb).removeAll();
                  Ext.getStore(cmb.namecmb).load({params:{param:cmb.getValue()}});
                }
              }
          },{
            xtype:'combobox'
            ,label:'Categoria'
            ,itemId:'selectCategoria'
             ,store: 'Categorias'
             ,fieldLabel:'Categoria'
             ,allowBlank:false

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
            xtype:'combobox'
            ,label:'Zona'
            ,fieldLabel:'Zona'
            ,allowBlank:false
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
            style: 'background-color: transparent;border:none;',
            overCls:'mouseOver',
             //margin:'100 '+ window.innerWidth/2.2,
             margin:'0 0 0 '+window.innerWidth/2.3,
            // height:100,
            //style: 'background-color:#5fa2dd;height:50px;color:#FFF;font-size:20px',
            listeners:{
              click:function(fp,e){
                console.log('mio');
                if(Ext.ComponentQuery.query('#formini')[0].isValid()){
                Ext.ComponentQuery.query('#labelHeader')[0].setHtml(Ext.ComponentQuery.query('#selectTorneo')[0].lastMutatedValue+'<a style="font-weight:bold;font-size:1  5px"> >  </a>'+Ext.ComponentQuery.query('#selectCategoria')[0].lastMutatedValue+'<a style="font-weight:bold"> > </a>'+Ext.ComponentQuery.query('#selectZona')[0].lastMutatedValue);
                Ext.ComponentQuery.query('#tabini')[0].show();
                Ext.ComponentQuery.query('#formini')[0].hide();
                Ext.ComponentQuery.query('#tabini')[0].setActiveItem(0);
              }
              }
            }
         }]
     }]
});
