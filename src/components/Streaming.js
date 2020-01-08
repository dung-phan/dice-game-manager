import React from "react";
import { connect } from "react-redux";

class Streaming extends React.Component {
  render() {
    console.log("what is in table", this.props.table);
    const {
      name,
      status,
      bidNumber,
      bidDiceType,
      turn,
      player1,
      player2,
      winner
    } = this.props.table;

    return player1 || player2 ? (
      <div>
        <div className="text-update">
          Table {name} is {status}
        </div>
        <div className="frame-board__right--update1">
          <div className="row">
            <div className="col-1-of-2">
              <h4 style={{ textAlign: "center" }}>Times </h4>
              <h3>{bidNumber}</h3>
            </div>

            <div className="col-1-of-2">
              <h4 style={{ textAlign: "center" }}>Number</h4>
              <h3>{bidDiceType}</h3>
            </div>
          </div>
        </div>
        {player1 ? (
          <h4>Player 1 is {player1.name}</h4>
        ) : (
          <h4>Waiting for Player 1</h4>
        )}
        {player2 ? (
          <h4>Player 2 is {player2.name}</h4>
        ) : (
          <h4>Waiting for Player 2</h4>
        )}
        {turn === null ? null : (
          <div>
            <h4>It is {turn.name}'s turn now to make a bid or challenge!!!</h4>
          </div>
        )}
        {status === "done" ? <h3>Winner is {winner.email} !</h3> : null}
      </div>
    ) : (
      "Loading"
    );
  }
}
const mapStateToProps = state => ({
  table: state.table
});
export default connect(mapStateToProps)(Streaming);
