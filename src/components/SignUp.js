import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import {signup} from '../actions/signup'
class SignUp extends Component {
  state = { email: '', password: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.email, this.state.password);
    this.props.history.push('/login')
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        Sign Up 
        <Form
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(null, {signup})(SignUp);
