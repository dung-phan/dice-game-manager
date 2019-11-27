import React from "react"

export default function TableDetails(props) {
	return (
		<div>
			<h1>
				{props.table.name}
				{props.table.status}
			</h1>
		</div>
	)
}
