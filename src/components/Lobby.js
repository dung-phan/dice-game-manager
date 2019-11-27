import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { tablesFetched, joinTable, updateTable } from "../actions/table"
import { baseUrl } from "../constants"

class Lobby extends React.Component {
	source = new EventSource(`${baseUrl}/lobby`, {
		authorizationHeader: `Bearer ${this.props.auth}`
	})
	componentDidMount() {
		this.source.onmessage = event => {
			const action = JSON.parse(event.data)
			console.log("action from stream", action)
			if (action.type === "TABELS_FETCHED") {
				const tables = JSON.parse(action.payload)
				this.props.tablesFetched(tables)
			} else if (action.type === "TABEL_FETCHED") {
				const table = JSON.parse(action.payload)
				this.props.updateTable(table)
			}
		}
	}
	onClick = event => {
		console.log(event.target.name)
		this.props.joinTable(event.target.name)
	}
	render() {
		if (!this.props.tables) return "Loading..."
		return (
			<div className="ui divided items">
				<div className="item">
					<ul className="ui middle aligned divided animated list">
						{this.props.tables.map(table => (
							<li className="item" key={table.id}>
								<Link to={`/table/${table.id}`}>
									{" "}
									<h2>
										Table {table.name} is {table.status}{" "}
									</h2>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	tables: state.tables,
	auth: state.auth
})

export default connect(mapStateToProps, {
	tablesFetched,
	joinTable,
	updateTable
})(Lobby)
