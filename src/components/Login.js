import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { login } from '../actions/login';
class Login extends Component {
  state = { email: '', password: '' };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Does this work');
    this.props.login(this.state.email, this.state.password);
    console.log('check state in handlesubmit', this.state);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('check state in handlechange', this.state);
  };
  render() {
    return (
      <div>
        {console.log('check values', this.state)}
        <Form
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);