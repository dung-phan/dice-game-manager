import React, { Component } from 'react';
import { bidPlayer, challengePlayer } from '../actions/startgame';

import { connect } from 'react-redux';
class Control extends Component {
  state = {
    bidNumber: '',
    bidDiceType: ''
  };

  handleChange = event => {
    this.setState({ bidNumber: event.target.value });
    console.log('check state', this.state);
  };
  handleOtherChange = event => {
    this.setState({ bidDiceType: event.target.value });
    console.log('check state', this.state);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log('check handle bid');
    console.log('check state in handle submit', this.state);
    this.props.bidPlayer(this.state.bidNumber, this.state.bidDiceType);
  };
  handleChallenge = () => {
    console.log('check handle challenge');
  };
  render() {
    return (
      <div>
        {' '}
        <h2>DICE RESULTS</h2>
        {console.log('check dice result')}
        <form onSubmit={this.handleSubmit}>
          <h3>Select your bid:</h3>
          <br />
          <label>
            Times:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </label>
          <label>
            <br />
            Number on the dice:
            <select value={this.state.value} onChange={this.handleOtherChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </select>
          </label>
          <br />
          <input type='submit' value='Submit' onClick={this.bidPlayer} />
        </form>
        <br />
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
