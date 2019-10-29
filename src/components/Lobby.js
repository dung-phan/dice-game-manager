import React from 'react'
import {connect} from 'react-redux'
import {loadTables} from '../actions/table' 

class Lobby extends React.Component {
    componentWillMount(){
        this.props.loadTables()
    }
    render(){        
        return (
            <div>
                Lobby 
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    tables: state.tables
})

export default connect(mapStateToProps, {loadTables})(Lobby)
