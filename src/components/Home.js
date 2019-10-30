import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
       {!props.loggedIn ? (
        <div>
          <Link to='/signup'>Are you new? Sign up here! </Link>
          <br />
          <Link to='/login'>Log in</Link>
        </div>
      ) : ('You are logged in')}
      <br />
      <Link to='/lobby'>To the game lobby</Link>
    </div>
  );
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth
});
export default connect(mapStateToProps)(Home);
