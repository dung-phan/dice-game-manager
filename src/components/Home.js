import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
function Home(props) {
  return (
    <div className="section-home">
      <div className="row">
        <div className="frame">
          <div className="frame__left">
            <Navigation />
            <div className="heading__secondary">Dice</div>
            <div className="heading__secondary"> Game</div>
            <p>
              Have fun rolling dices with friends, go into a new world and take
              risks together.
            </p>
            <br></br>
            <button className="btn btn-main btn-animated">
              Join <i className="icon ion-md-person-add"></i>
            </button>
          </div>
          <div className="frame__right">
            <div className="frame__right--box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth
});
export default connect(mapStateToProps)(Home);
