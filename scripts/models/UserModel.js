
var Backbone = require('backparse')({
    appId: 'UVbkySszM5xnKSjg3OuH0IVP5QB3FtkXoJTe51W8',
    apiKey: 'UTUazmWvDNPWuWNTnsAcPUVapwLYBVZIEn8kUCYm',
    apiVersion: 1
});

module.exports = Backbone.Model.extend({
	defaults:  {
		user: '',
		password: null,
		email:''
	},
	parseClassName:'_User',
	idAttribute: 'objectId',
	isUser: true
});	

	