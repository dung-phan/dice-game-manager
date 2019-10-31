import React from 'react';
import { connect } from 'react-redux';


class Streaming extends React.Component {



  render(){
    const{
      name, 
      status, 
      bidNumber, bidDiceType,
      turn, player1, player2, winner
    } = this.props.table
    if (!player1 || !player2) return 'missing player'


    return (
      <div>
        <h3>
          Table: {name} is {status}
        </h3>
        <h4>
          CURRENT BID:
          <br></br>
          {`At least ${bidNumber} of Dice ${bidDiceType} in there!`}
        </h4>
        <h5>Times: {bidNumber}</h5>
        <h5>Dice of type: {bidDiceType}</h5>
        <h3>Player 1 is {player1.email} </h3>
        <h3>Player 2 is {player2.email}</h3>

        {
          turn===null ? 'wating to start' : (<div>
          <h3>Now Is {turn.email}'s Turn!!!</h3>
          <h3>Make a bid or challenge {player1.id === turn.id ? player2.email : player1.email}</h3>
          </div>)
        }

        {

          status==='done' && !!winner ? <h3>Winner is {winner.email} !</h3> : null
        }

      </div>
    );
  }
}
const mapStateToProps = state => ({
  table: state.table
});
export default connect(mapStateToProps)(Streaming);
