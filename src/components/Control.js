import React, { Component } from 'react';
import { bidPlayer, challengePlayer, gameStart } from '../actions/startgame';
import { connect } from 'react-redux';
class Control extends Component {
  state = {
    bidNumber: '',
    bidDiceType: ''
  };

  handleChange = event => {
    this.setState({ bidNumber: event.target.value });
  };
  handleOtherChange = event => {
    this.setState({ bidDiceType: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const { bidNumber, bidDiceType } = this.state;
    const tableId = this.props.table.id;
    this.props.bidPlayer(tableId, bidNumber, bidDiceType);
  };
  handleChallenge = () => {
    let finalWinner;
    console.log('check the current state', this.state);
    const { bidNumber, bidDiceType } = this.state;
    const { roll1, roll2, turnId, player1Id, player2Id, tableId } = this.props;
    const arrayDice = roll1.concat(roll2).split('');

    if (
      arrayDice.includes(bidDiceType) &&
      arrayDice.filter(numb => numb === bidNumber).length <= bidNumber
    ) {
      finalWinner = turnId;
      this.props.challengePlayer(tableId, finalWinner);
    } else {
      if (turnId !== player1Id) {
        finalWinner = player2Id;
        this.props.challengePlayer(tableId, finalWinner);
      }
    }
  };
  render() {
    const {
      userId,
      table: { player1Id, player2Id, diceRoll1, diceRoll2 }
    } = this.props;

    const diceDisplay1 = diceRoll1 ? ('' + diceRoll1).split('') : diceRoll1;
    const diceDisplay2 = diceRoll2 ? ('' + diceRoll2).split('') : diceRoll2;
    return (
      <div>
        {player1Id || player2Id ? (
          <h3 style={{ padding: '1rem' }}>
            {userId == player1Id ? 'Player 1' : 'Player 2'}
          </h3>
        ) : null}
        {diceDisplay1 || diceDisplay2 ? (
          <div className="section-result">
            <div className="row">
              {userId === player1Id
                ? diceDisplay1.map(el => (
                    <div className="col-1-of-5">
                      <img
                        src={require('../img/dice' + el + '.svg')}
                        style={{ width: '70%' }}
                        alt="dice"
                      />
                    </div>
                  ))
                : diceDisplay2.map(el => (
                    <div className="col-1-of-5">
                      <img
                        src={require('../img/dice' + el + '.svg')}
                        style={{ width: '80%' }}
                        alt="dice"
                      />
                    </div>
                  ))}
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-1-of-2">
            <div className="section-bid">
              <form
                style={{ backgroundColor: 'transparent', padding: '0 1rem' }}
                onSubmit={this.handleSubmit}
              >
                <div className="text-update" style={{ padding: '1rem' }}>
                  Select your bid:
                </div>
                <label>
                  <h4>Times:</h4>
                  <select
                    style={{
                      fontSize: '1.5rem'
                    }}
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="ui selection dropdown"
                  >
                    <option value=""> {'-- Select --'}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
                <label>
                  <h4>Number on the dice:</h4>
                  <select
                    style={{
                      fontSize: '1.5rem'
                    }}
                    value={this.state.value}
                    onChange={this.handleOtherChange}
                    className="ui selection dropdown"
                  >
                    <option value=""> {'-- Select --'}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </label>
                <div>
                  <input
                    className="btn btn-game"
                    type="submit"
                    value="Submit"
                    onClick={this.bidPlayer}
                    style={{ margin: '2rem', width: '90%' }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="section-bid">
              <button
                className="btn btn-game"
                onClick={() => this.props.gameStart(this.props.table.id)}
                style={{ margin: '2rem' }}
              >
                <h4>Start game</h4>
              </button>
              <button
                className="btn btn-game"
                onClick={this.handleChallenge}
                style={{ margin: '2rem' }}
              >
                <h4>Challenge</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.userId,
  table: state.table
});
export default connect(mapStateToProps, {
  bidPlayer,
  challengePlayer,
  gameStart
})(Control);
