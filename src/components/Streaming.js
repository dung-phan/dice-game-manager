import React from 'react';
import {baseUrl} from '../constants'

export default class Streaming extends React.Component {
  source = new EventSource(`${baseUrl}/table/:id`)
  componentDidMount(){
    
  }
  render(){
    return (
      <div>
        <h4>CURRENT BID:</h4>
        <h5>Times:</h5>
        <h5>Number of the dice:</h5>
        <h3>Player 1 is...</h3>
        <h3>Player 2 is...</h3>
      </div>
    );
  }
}
