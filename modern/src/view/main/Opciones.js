/**
 * This view is an example list of people.
 */
Ext.define('TorneoMovil.view.main.Opciones', {
    extend: 'Ext.container.Container',
    xtype: 'opciones',
    width:'100%',
    height:'100%',
   // modal: true,
    bodyPadding: 10,

    defaults:{
      xtype:'button',
      margin:'20 0',
      style: 'background-color: transparent; font-weight: "bold"; font-size:25px;color:#FFF;border:none',
      listeners: {
        tap:function(btn,e) {
            Ext.getStore(btn.str).load({params:Ext.ComponentQuery.query('#formini')[0].getValues()});
            var tab =Ext.ComponentQuery.query('#tabini')[0];
            tab.removeAll();
            tab.add({
              title: 'Opciones',
               iconCls: 'x-fa fa-list'
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
    ,items:[{
        text:'Posiciones',
        str:'Posiciones',
        tabType:'posiciones',
        tabText:'Posiciones',
        tabIcon:'x-fa fa-list-ol'
        //,iconCls:'x-fa fa-list'
    },{
      text:'Sancionados',
       str:'Sancionados',
       tabType:'mainsancionados',
       tabText:'Sancionados',
       tabIcon:'x-fa fa-calendar-times'
      //,iconCls:'x-fa fa-list'


    },{
      text:'En Capilla',
       str:'Capilla',
       tabType:'maincapilla',
       tabText:'En Capilla',
       tabIcon:'x-fa fa-list'

    },{
      text:'Valla menos vencida',
       str:'Valla',
       tabType:'mainvencida',
       tabText:'Valla - vencida',
       tabIcon:'x-fa fa-list'


    },{
      text:'Fixture',
       str:'Fixture',
       tabType:'mainfixture',
       tabText:'Fixture',
       tabIcon:'x-fa fa-list'

    }]

});
