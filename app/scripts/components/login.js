import React from 'react';
import store from '../store';

const Login = React.createClass({
  loginFunction: function(){
    store.session.login({
      username: this.refs.username.value,
      password: this.refs.password.value
    });
  },
  signupFunction: function(){
    store.session.signup({
      username: this.refs.username.value,
      password: this.refs.password.value
    });
  },
  render: function(){
    return (
      <div className="login-container">
        <h1>Login or Sign up</h1>
        <input type="text" placeholder="username" ref="username" />
        <input type="password" placeholder="password" ref="password" />
        <input onClick={this.loginFunction} type="submit" value="Log in" />
        <input onClick={this.signupFunction} type="submit" value="Sign up" />
      </div>
    );
  }
});

export default Login;
