import React from 'react';
import { connect } from 'react-redux'
import {baseUrl} from '../constants'

class Streaming extends React.Component {
  
  source = new EventSource(`${baseUrl}/table/${this.props.table.id}`)
  componentDidMount(){
    
  }
  render(){
    const{
      name, 
      status, 
      bidNumber, bidDiceType,
      diceRoll1, diceRoll2,
      turnId, player1Id, player2Id, winnerId
    } = this.props.table
    return (
      <div>
        <h4>
          CURRENT BID: 
          <br></br>
          {`At least ${bidNumber} of Dice ${bidDiceType}`} 
        </h4>
        <h5>Times:</h5>
        <h5>Number of the dice:</h5>
        <h3>Player 1 is </h3>
        <h3>Player 2 is...</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  table: state.table
})
export default connect(mapStateToProps)(Streaming)