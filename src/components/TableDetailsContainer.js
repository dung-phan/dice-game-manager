import React from "react"
import TableDetails from "./TableDetails"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updateTable, joinTable } from "../actions/table"
import { baseUrl } from "../constants"

class TableDetailsContainer extends React.Component {
	source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`)
	componentDidMount() {
		console.log(this.source)
		this.source.onmessage = event => {
			console.log("Got a message!", event)
			const action = JSON.parse(event.data)
			if (action.type === "TABLE_FETCHED") {
				const table = JSON.parse(action.payload)
				this.props.updateTable(table)
				console.log(table)
			}
			// const messages = JSON.parse(event.data)
			// this.setState({messages})
		}
	}
	handleClick = event => {
		this.props.joinTable(this.props.match.params.id)
		this.source.onmessage = event => {
			const action = JSON.parse(event.data)
			if (action.type === "TABLE_JOINED") {
				const table = JSON.parse(action.payload)
				this.props.updateTable(table)
				this.props.history.push(`/table/${this.props.match.params.id}/game`)
			}
		}
		// this.props.history.push(`/table/${this.props.match.params.id}/game`)
		//this.props.joinTable
	}
	render() {
		return (
			<div>
				<TableDetails table={this.props.table} />
				{this.props.loggedIn ? (
					<div>
						<button onClick={this.handleClick} className="ui basic button">
							Join
						</button>
					</div>
				) : (
					<Link to="/login">Please log in to join table</Link>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	table: state.table,
	loggedIn: state.auth !== null
})

export default connect(mapStateToProps, { updateTable, joinTable })(
	TableDetailsContainer
)
