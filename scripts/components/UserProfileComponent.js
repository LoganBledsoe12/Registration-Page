var React = require('react');
var validator = require ('validator')
var UserModel = require('../models/UserModel');
var Backbone = require('backparse')({
    appId: 'UVbkySszM5xnKSjg3OuH0IVP5QB3FtkXoJTe51W8',
    apiKey: 'UTUazmWvDNPWuWNTnsAcPUVapwLYBVZIEn8kUCYm',
    apiVersion: 1
});
var BlogPostModel = Backbone.Model.extend({
    		defaults: {
        	title: '',
        	body: ''
    		},
    		parseClassName: 'blogpost',
    		idAttribute: 'objectId' 
		});


module.exports = React.createClass({
	getInitialState:function(){
		return{blogpost:[]};
	},
	componentDidMount: function(){
		this.LoadBlogPost();
	},
	render: function() {
		var divStyle={
		color:'red'
	} 
		return (
    <form onSubmit={this.LogInSubmitted}>
		<input className="title" ref="title" type="text" placeholder="Post Title" />
		<input className="body" ref="body" type="text"/>
		<button className="btnsubmit" ref="btnsubmit" type="submit">Submit</button>
		{this.state.blogpost.map(function(m, index){
		return(
		<div>
		<div>Title:{m.title}</div>
		<div>Body:{m.body}</div>
		</div>)
	})}
	</form>
	)},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var errormessage = ''
		var T= this.refs.title.getDOMNode().value
		var B= this.refs.body.getDOMNode().value
		var BP = new BlogPostModel();
		BP.set('title',T);
		BP.set('body', B);
		var self = this;
		BP.save().then(function(){
			self.LoadBlogPost();

		});

	},
	LoadBlogPost: function(){
		var BlogPostCollection = Backbone.Collection.extend({
    	model: BlogPostModel,
    	parseClassName: 'blogpost',
	});
		var BPC = new BlogPostCollection;
		var self = this;
		BPC.fetch().then (function(e){
			self.setState({blogpost:e.results})
		});
	}	
});  


