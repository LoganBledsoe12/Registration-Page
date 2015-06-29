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
        	body: '',
        	category: ''
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
		<input className="title" ref="title" type="text" placeholder="Search" />
		<select className="category" ref="category">
			<option value="Baseball">Baseball</option>
			<option value="Football">Football</option>
			<option value="Food">Food</option>
			<option value="Fitness">Fitness</option>
		</select>
		<button className="btnsubmit" ref="btnsubmit" type="submit">Search</button>
		{this.state.blogpost.map(function(m, index){
		return(
		<div>
		<div>category-{m.get('category')}</div>
		<div>Title-{m.get('title')}</div>
		<div>Body-{m.get('body')}</div>
		</div>)
	})}
	</form>
	)},
	LogInSubmitted: function(e) {
		e.preventDefault();
		var errormessage = ''
		var T= this.refs.title.getDOMNode().value
		var C= this.refs.category.getDOMNode().value
		this.LoadBlogPost(C,T);



	},
	LoadBlogPost: function(category, title){
		var BlogPostCollection = Backbone.Collection.extend({
    	model: BlogPostModel,
    	parseClassName: 'blogpost',
	});
		var BPC = new BlogPostCollection;
		var self = this;
		BPC.fetch().then (function(e){
			var collection = new Backbone.Collection(e.results)
			self.setState({blogpost:collection.where({category:category, title:title})})
		});
	}	
});  
