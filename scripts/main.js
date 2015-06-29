var React = require('react');
var UserForm = require ('./components/userComponent.js')
var LogIn = require ('./components/LogInComponent.js')
var BlogPost = require ('./components/BlogPostListComponent.js')
var UserProfile = require ('./components/UserProfileComponent.js')
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
        'profile': 'profile',
        'search': 'search'
       
    },
    login: function() {
    	React.render(
	<LogIn />,
	document.getElementById('container')

);
      
    },
    signup: function(){
    	React.render(
	<UserForm />,
	document.getElementById('container'))
    },
    profile: function(){
    	React.render(
	<UserProfile />,
	document.getElementById('container'))

    },
    search: function(){
    	React.render(
    		<BlogPost/>,
    		document.getElementById('container'))
    }
});
var myRouter = new App();
Backbone.history.start();
window.myRouter = myRouter


