/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
 var development = false;
Ext.application({
    name: 'TorneoMovil',

    extend: 'TorneoMovil.Application',

    requires: [
        'TorneoMovil.view.main.Main',
       // 'TorneoMovil.view.main.FormPanelIni'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'TorneoMovil.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to TorneoMovil.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
//Ext.Ajax.cors = true;
// //Ext.Ajax.useDefaultXhrHeader = false;
// Ext.Ajax._defaultHeaders = {
//   'Access-Control-Allow-Origin': "*"
// };
Ext.Ajax._defaultHeaders = {
	 'Content-Type': 'application/json'
};
// Ext.Ajax.setDefaultHeaders('Access-Control-Request-Headers', "*/*");
Ext.Ajax.on('beforerequest', function(connection, options) {
	if ( development ) {
		var url = options.url.split('?');
		//options.url = '///android_asset/www' + url[0] + '.json?' + url[1];
		options.url = '.' + url[0] + '.json?' + url[1];
	} else {
		options.url = 'http://todalagringa.com.ar' + options.url;
	}
});

Ext.MessageBox.OKCANCEL = [
	{text: 'Cancelar', itemId: 'cancel'},
	{text: 'OK',     itemId: 'ok',  ui : 'action'}
];
Ext.MessageBox.YESNO = [
	{text: 'No',  itemId: 'no'},
	{text: 'Si', itemId: 'yes', ui: 'action'}
];
