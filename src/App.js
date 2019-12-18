import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Lobby from './components/Lobby';
import GameScreen from './components/GameScreen';
import TableDetailsContainer from './components/TableDetailsContainer';
import './scss/main.scss';
function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/lobby" exact component={Lobby} />
      <Route path="/table/:id/game" exact component={GameScreen} />

      <Route path="/table/:id" exact component={TableDetailsContainer} />
    </div>
  );
}

const MapStateToProps = state => {
  console.log('Check the state in App', state);
  return {
    loggedIn: state.auth !== ''
  };
};
export default connect(MapStateToProps)(App);
