import React from 'react';
import {connect} from 'react-redux'
import {baseUrl} from '../constants'
import Streaming from './Streaming';
import Control from './Control';
import { gameStart } from '../actions/startgame';

import {updateTable} from '../actions/table'

class GameScreen extends React.Component {
  source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`)
  componentDidMount(){
    console.log('component GameScreen did mount')
    this.source.onmessage = event => {
      console.log('got a event',event)

      const table = JSON.parse(event.data)

      this.props.updateTable(table)
      console.log(table)
    }
  }
  render(){

    return (
      <div>
        <div className='ui two column very relaxed grid'>
          <div className='column'>
            <Streaming />
          </div>
          <div className='column'>
            <Control />
          </div>
        </div>
        <div className='ui vertical divider'>


          <button className='ui basic button' onClick={this.props.gameStart}>
            Start game
          </button>
        </div>
      </div>
    );
  }
}



export default connect(
  null,
  { gameStart, updateTable }
)(GameScreen);

