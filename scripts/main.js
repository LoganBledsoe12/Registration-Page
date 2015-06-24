var React = require('react');
var LogInForm = require ('./components/userComponent.js')
var Backbone = require('backparse')({
    appId: 'UVbkySszM5xnKSjg3OuH0IVP5QB3FtkXoJTe51W8',
    apiKey: 'UTUazmWvDNPWuWNTnsAcPUVapwLYBVZIEn8kUCYm',
    apiVersion: 1
});

console.log('application running');

var App = Backbone.Router.extend({
    routes: {
        '': 'login',
        'signup': 'signup',
        'register': 'register'
       
    },
    login: function() {
    	React.render(
	<LogInForm />,
	document.getElementById('container')

);
      
    },
    signup: function(){

    },
    register: function(){

    }
});
var myRouter = new App();
Backbone.history.start();


