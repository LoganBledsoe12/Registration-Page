var React = require('react');
var validator = require ('validator')
var UserModel = require('../models/UserModel');


module.exports = React.createClass({
	getInitialState:function(){
		return{message: ''};
	},
	render: function() {
		var divStyle={
		color:'red'
	} 
		return (
    <form onSubmit={this.LogInSubmitted}>
		<input className="emailtext" ref="emailText" type="text" placeholder="Email" />
		<input className="passwordtext" ref="passwordText" type="password" placeholder="Password" />
		<button className="btnsubmit" ref="btnsubmit" type="submit">Submit</button>
		<button  onClick={this.GoToSignUp} className="signup" ref="signup" type="button">Sign Up</button>
		<div style={divStyle} ref="error">{this.state.message}</div>
	</form>
	)},

	GoToSignUp:function(){
		myRouter.navigate('/signup',{trigger:true});
	},


	LogInSubmitted: function(e) {
		e.preventDefault();
		var errormessage = ''
		var emailText= this.refs.emailText.getDOMNode().value
		var passwordText= this.refs.passwordText.getDOMNode().value

		if (emailText.length == 0){
			errormessage = 'Please enter an email address'
		}
		if (passwordText.length == 0){
			errormessage = 'Please enter a password'
		}
		if (!validator.isEmail(emailText)){
			errormessage = 'email looks wrong'
		}
		
		Parse.initialize("UVbkySszM5xnKSjg3OuH0IVP5QB3FtkXoJTe51W8", "5H641ynBXCG5VkMQ8Y6rTzIuyTkjtTTtVGDmXWtp");

		this.setState({message: errormessage})
		var user = new UserModel();
		var self = this;
		user.login({
	    username: emailText,
	    password: passwordText
		}, 		
		{
	    success: function(userModel) {
	        console.log('user was logged in');
	        myRouter.navigate('/profile',{trigger:true});
	    },
	    error: function(userModel, response) {
	        console.log('user was not logged in', response.responseJSON);
	        self.setState({message: response.message})
	    }
		})
	}	
});  


