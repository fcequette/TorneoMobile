/**
 * This view is an example list of people.
 */
Ext.define('Torneo.view.main.Opciones', {
    extend: 'Ext.container.Container',
    xtype: 'opciones',
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10,

    defaults:{
      xtype:'button',
      // margin:'20 0',
      style:'background-color:transparent;border:none',
      margin:'35 0 0 '+window.innerWidth/2.7,
      overCls:'mouseOver',
      //style: 'background-color: red; font-weight: "bold"; font-size:25px;color:#FFF;border:none',
      listeners: {
        click:function(btn,e) {
            Ext.getStore(btn.str).load({params:Ext.ComponentQuery.query('#formini')[0].getValues()});
            var tab =Ext.ComponentQuery.query('#tabini')[0];
            tab.removeAll();
            tab.add({
              title: 'Opciones'
               ,style:'color:#606060'
               // iconCls: 'x-fa fa-list'
               ,items:[{
                   xtype:'opciones'
             }]});
            var  a =tab.add({
              title: btn.tabText,
              iconCls: btn.tabIcon,
              items:[{
                xtype:btn.tabType
              }]
            });
           a.show();
           tab.setActiveItem(2);
        }
      }

    }
    ,layout:'vbox'

    ,items:[{
        text:'Posiciones',
        str:'Posiciones',
        tabType:'posiciones',
        tabText:'Posiciones',
        // tabIcon:'x-fa fa-list-ol'
        //,iconCls:'x-fa fa-list'
    },{
      text:'Goleadores',
       str:'Goleadores',
       tabType:'maingoleadores',
       tabText:'Goleadores',
       // tabIcon:'x-fa fa-calendar-times'
      //,iconCls:'x-fa fa-list'


    },{
      text:'Sancionados',
       str:'Sancionados',
       tabType:'mainsancionados',
       tabText:'Sancionados',
       // tabIcon:'x-fa fa-calendar-times'
      //,iconCls:'x-fa fa-list'


    },{
      text:'En Capilla',
       str:'Capilla',
       tabType:'maincapilla',
       tabText:'En Capilla',
       // tabIcon:'x-fa fa-list'

    },{
      text:'Valla menos vencida',
       str:'Valla',
       tabType:'mainvencida',
       tabText:'Valla - vencida',
       // tabIcon:'x-fa fa-list'


    },{
      text:'Fixture',
       str:'Fixture',
       tabType:'mainfixture',
       tabText:'Fixture',
       // tabIcon:'x-fa fa-list'

    }]

});
