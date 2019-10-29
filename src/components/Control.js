import React, { Component } from 'react';

export class Control extends Component {
  render() {
    return (
      <div>
        {' '}
        <h1>Control table</h1>
        <h3>Dice of host</h3>
        <button>Bid</button>
        <button>Challenge</button>
        <h3>Dice of guest</h3>
      </div>
    );
  }
}

export default Control;
