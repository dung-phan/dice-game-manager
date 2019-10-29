import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    props.loggedIn ? 'You are logged in' : 
    <div>
    <Link to='/signup'>SIGN UP HERE</Link>
    <br />
    <Link to='/login'>LOG IN HERE</Link>
    <br />
    <Link to='/lobby'>TO THE LOBBY</Link>
    </div>
    )
  }
  const mapStateToProps = (state) => ({
    loggedIn: !!state.auth 
  })
  export default connect(mapStateToProps)(Home)
  
  