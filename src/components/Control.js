import React, { Component } from 'react';
import { bidPlayer, challengePlayer } from '../actions/startgame';

import { connect } from 'react-redux';
class Control extends Component {
  handleBid = () => {
    console.log('check handle bid');
  };
  handleChallenge = () => {
    console.log('check handle challenge');
  };
  render() {
    return (
      <div>
        {' '}
        <h3>Dice results</h3>
        <button className='ui basic button' onClick={this.handleBid}>
          Bid
        </button>
        <br />
        <br />
        <button className='ui basic button' onClick={this.handleChallenge}>
          Challenge
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { bidPlayer, challengePlayer }
)(Control);
