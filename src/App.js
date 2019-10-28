import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/signup'>Sign up</Link>
        <br/>
        <Link to='/login'>Login</Link>
        <br/>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={Login} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  console.log('Check the state in App', state);
  return {
    loggedIn: state.auth !== ''
  };
};
export default connect(MapStateToProps)(App);
