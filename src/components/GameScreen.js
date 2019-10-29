import React from 'react';
import Streaming from './Streaming';
import Control from './Control';
export default function GameScreen() {
  return (
    <div className='ui segment'>
      <div className='ui two column very relaxed grid'>
        <div className='column'>
          <Streaming />
        </div>
        <div className='column'>
          <Control />
        </div>
      </div>
      <div className='ui vertical divider'>
        <button className='ui basic button'>Start game</button>
      </div>
    </div>
  );
}
