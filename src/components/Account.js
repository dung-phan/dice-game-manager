import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/signup';
import { login } from '../actions/login';

class Account extends Component {
  state = { className: 'container', name: '', email: '', password: '' };
  handleSignIn = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSignInAgain = () => {
    this.setState({ className: 'container' });
  };
  handleSubmitSignIn = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.props.history.push('/lobby');
  };
  handleSubmitSignUp = event => {
    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password);
    this.setState({
      name: '',
      email: '',
      password: '',
      className: 'container'
    });
  };

  handleSignUp = event => {
    this.setState({
      className: 'container right-panel-active',
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="body-page">
        <div className={this.state.className}>
          <div className="formcontainer sign-up-container">
            <form onSubmit={this.handleSubmitSignUp}>
              <h1 style={{ color: 'rgb(38, 34, 78)' }}>Sign up</h1>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
                onChange={this.handleSignUp}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleSignUp}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleSignUp}
                value={this.state.password}
              />
              <button className="btn btn-card" style={{ margin: '2rem' }}>
                <h4 style={{ color: 'rgb(38, 34, 78)' }}>Sign Up</h4>
              </button>
            </form>

            <Link className="link" to="/">
              <h5 className="link-text"> &#8592; Back to home</h5>
            </Link>
          </div>
          <div className="formcontainer sign-in-container">
            <form onSubmit={this.handleSubmitSignIn}>
              <h1 style={{ color: 'rgb(38, 34, 78)' }}>Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleSignIn}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleSignIn}
                value={this.state.password}
              />
              <button className="btn btn-card" style={{ margin: '2rem' }}>
                <h4 style={{ color: 'rgb(38, 34, 78)' }}>Sign In</h4>
              </button>
            </form>
            <Link className="link" to="/">
              <h5 className="link-text"> &#8592; Back to home</h5>
            </Link>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome back!</h1>
                <h4>To keep playing, please login with your personal info</h4>
                <button
                  className="btn btn-game"
                  onClick={this.handleSignInAgain}
                  style={{ margin: '2rem' }}
                >
                  <h4>Sign In</h4>
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <h4>Enter your details and start playing</h4>
                <button
                  className="btn btn-game"
                  onClick={this.handleSignUp}
                  style={{ margin: '2rem' }}
                >
                  <h4>Sign Up</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { signup, login })(Account);
