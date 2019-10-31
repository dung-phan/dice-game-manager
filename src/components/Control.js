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
    const {bidNumber,bidDiceType} = this.state
    const tableId = this.props.table.id
    this.props.bidPlayer(tableId,bidNumber, bidDiceType);
  };
  handleChallenge = () => {
    let finalWinner;
    console.log('check the current state', this.state);
    const { bidNumber, bidDiceType } = this.state;
    const { roll1, roll2, turnId, player1Id, player2Id } = this.props;
    const arrayDice = roll1.concat(roll2).split('');
    console.log('check array dice', arrayDice); //print out array of number in string type
    if (
      arrayDice.includes(bidDiceType) &&
      arrayDice.filter(numb => numb === bidNumber).length <= bidNumber
    ) {
      finalWinner = turnId;
      this.props.challengePlayer(finalWinner);
    } else {
      if (turnId !== player1Id) {
        finalWinner = player2Id;
        this.props.challengePlayer(finalWinner);
      }
    }
  };
  render() {
    const {userId, table: {player1Id, player2Id, diceRoll1, diceRoll2}} = this.props
    return (
      <div>


        {!player1Id || !player2Id ? 'Loading'
        : (<h2>{userId === player1Id ? 'Player 1' : 'Player 2'}</h2>)}
        <h2>DICE RESULTS : {userId === player1Id ? diceRoll1 : diceRoll2}</h2>
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
const mapStateToProps = (state) => ({
  userId: state.userId,
  table: state.table
})
export default connect(
  mapStateToProps,
  { bidPlayer, challengePlayer }
)(Control);
