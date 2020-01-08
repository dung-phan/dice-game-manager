import React from "react";
import { connect } from "react-redux";
import { baseUrl } from "../constants";
import Streaming from "./Streaming";
import Control from "./Control";
import Navigation from "./Navigation";
import { gameStart } from "../actions/startgame";
import { updateTable } from "../actions/table";

class GameScreen extends React.Component {
  source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`);
  componentDidMount() {
    this.source.onmessage = event => {
      const table = JSON.parse(event.data);
      this.props.updateTable(table);
    };
  }
  render() {
    return (
      <div className="section-home">
        <div className="row">
          <div className="frame-board">
            <div className="frame-board__left--1">
              <Control
                roll1={this.props.table.diceRoll1}
                roll2={this.props.table.diceRoll2}
                turnId={this.props.table.turnId}
                player1Id={this.props.table.player1Id}
                player2Id={this.props.table.player2Id}
                tableId={this.props.table.id}
              />
            </div>
            <div className="frame-board__right--2">
              <div className="frame-board__right--box2">
                <div className="frame-board__right--sub-box1">
                  <h3>Stats</h3>
                </div>
                <div className="frame-board__right--sub-box2">
                  <Streaming />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  table: state.table
});
export default connect(mapStateToProps, { gameStart, updateTable })(GameScreen);
