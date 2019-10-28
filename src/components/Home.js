import React from 'react';
import { connect } from 'react-redux'
import SignUp from './SignUp';
import Login from './Login'
function Home(props) {
  return (
    props.loggedIn ? 'You are logged in' : 
    <div>
    <SignUp/>
    <Login />
    </div>
    )
  }
  const mapStateToProps = (state) => ({
    loggedIn: !!state.auth 
  })
  export default connect(mapStateToProps)(Home)
  
  