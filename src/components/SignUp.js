import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { signup } from '../actions/signup';
class SignUp extends Component {
  state = { email: '', password: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.email, this.state.password);
    this.props.history.push('/login');
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <div className='ui middle aligned center aligned grid'>
          <div className='column' style={{ maxWidth: '450x' }}>
            <h2 className='content'>Sign up for a new account</h2>
          </div>
        </div>
        <Form
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div className='ui middle aligned center aligned grid'>
          <div className='column' style={{ maxWidth: '450x' }}>
            <div className='ui message'>
              Already have an account? <a href=''>Login now!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { signup }
)(SignUp);
