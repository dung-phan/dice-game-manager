import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {loadTables, joinTable} from '../actions/table' 

class Lobby extends React.Component {
    componentDidMount(){
        this.props.loadTables()
    }
    onClick = (event) => {
        console.log(event.target.name)
        this.props.joinTable(event.target.name)
        //joinTable()
        // create action joinTable()
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
                                <Link to={`/table/${table.id}`}>Table: {table.name} is {table.status} </Link>
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
            
export default connect(mapStateToProps, {loadTables, joinTable})(Lobby)
            