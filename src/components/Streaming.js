import React from 'react';
import { connect } from 'react-redux';
import { baseUrl } from '../constants';

class Streaming extends React.Component {
  // source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`)
  // componentDidMount(){
  //   console.log('component Streaming did mount')
  //   this.source.onmessage = event => {
  //     console.log('got a event',event)

  //     const table = JSON.parse(event.data)

  //     this.props.updateTable(table)
  //     console.log(table)
  //   }
  // }

  render(){
    const{
      name, 
      status, 
      bidNumber, bidDiceType,
      diceRoll1, diceRoll2,
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
        

      </div>
    );
  }
}
const mapStateToProps = state => ({
  table: state.table
});
export default connect(mapStateToProps)(Streaming);
