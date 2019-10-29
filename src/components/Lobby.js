import React from 'react'
import {connect} from 'react-redux'
import {loadTables} from '../actions/table' 

class Lobby extends React.Component {
    componentWillMount(){
        this.props.loadTables()
    }
    onClick = (event) => {
        //joinTable
        //sent a put request to /table/:id

    }
    render(){
        if (!this.props.tables) return 'Loading...'        
        return (
            <div>
                Lobby
                <ul>
                    {this.props.tables.map(
                        table => (
                            <li key={table.id}>
                            Table: {table.name} is {table.status}
                            <button onClick={this.onClick}>Join</button>
                            </li>)
                    )}
                </ul> 
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    tables: state.tables
})
            
export default connect(mapStateToProps, {loadTables})(Lobby)
            