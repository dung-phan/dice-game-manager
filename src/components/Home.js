import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="section-home">
      <div className="row">
        <div className="frame">
          <div className="frame__left">
            <div className="heading__secondary">Dice</div>
            <div className="heading__secondary"> Game</div>
            <h4 style={{ margin: '2rem 0' }}>
              Have fun rolling dices with friends, go into a new world and take
              risks together.
            </h4>
            <Link
              className="btn btn-game"
              style={{ width: '45%', textDecoration: 'none' }}
              to="/account"
            >
              <h4>
                Join <i className="icon ion-md-person-add"></i>
              </h4>
            </Link>
          </div>
          <div className="frame__right">
            <div className="frame__right--box"></div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth
});
export default connect(mapStateToProps)(Home);
