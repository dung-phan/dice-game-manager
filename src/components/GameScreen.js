import React from "react"
import { connect } from "react-redux"
import { baseUrl } from "../constants"
import Streaming from "./Streaming"
import Control from "./Control"
import { gameStart } from "../actions/startgame"

import { updateTable } from "../actions/table"

class GameScreen extends React.Component {
	source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`)
	componentDidMount() {
		console.log("component GameScreen did mount")
		this.source.onmessage = event => {
			console.log("got a event", event)
			const action = JSON.parse(event.data)
			if (action.type === "TABLE_FETCHED" || action.type === "TABLE_JOINED") {
				const table = JSON.parse(action.payload)
				this.props.updateTable(table)
			}
		}
	}
	render() {
		return (
			<div>
				<div className="ui two column very relaxed grid">
					<div className="column">
						<Streaming />
					</div>
					<div className="column">
						<Control
							roll1={this.props.table.diceRoll1}
							roll2={this.props.table.diceRoll2}
							turnId={this.props.table.turnId}
							player1Id={this.props.table.player1Id}
							player2Id={this.props.table.player2Id}
							tableId={this.props.table.id}
						/>
					</div>
				</div>
				<div className="ui vertical divider">
					<button
						className="ui basic button"
						onClick={() => this.props.gameStart(this.props.match.params.id)}
					>
						Start game
					</button>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	table: state.table
})
export default connect(mapStateToProps, { gameStart, updateTable })(GameScreen)
