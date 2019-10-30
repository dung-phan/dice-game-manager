import React from 'react';
import Streaming from './Streaming';
import Control from './Control';
import { connect } from 'react-redux';
import { gameStart } from '../actions/startgame';
class GameScreen extends React.Component {
  render() {
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
  { gameStart }
)(GameScreen);
