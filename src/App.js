import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import GameScreen from "./components/GameScreen";
import Account from "./components/Account";
import "./scss/main.scss";
function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Account" exact component={Account} />
      <Route path="/lobby" exact component={Lobby} />
      <Route path="/table/:id/game" exact component={GameScreen} />
    </div>
  );
}

const MapStateToProps = state => {
  console.log("Check the state in App", state);
  return {
    loggedIn: state.auth !== ""
  };
};
export default connect(MapStateToProps)(App);
