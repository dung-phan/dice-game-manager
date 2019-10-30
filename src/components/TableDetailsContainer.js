import React from 'react';
import TableDetails from './TableDetails';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadTable } from '../actions/table';
import {baseUrl} from '../constants'

class TableDetailsContainer extends React.Component {
  source = new EventSource(`${baseUrl}/table/${this.props.match.params.id}`)
  componentDidMount() {
    console.log(this.source)
    this.source.onmessage = event => {
      console.log("Got a message!", event)
      // const messages = JSON.parse(event.data)
      // this.setState({messages})
  }
  }
  handleClick = () => {
    console.log('check handle click');
  };
  render() {
    console.log(this.props.table);
    return (
      <div>
        <TableDetails table={this.props.table} />
        {this.props.loggedIn ? (
          <div>
            <button onClick={this.handleClick} className='ui basic button'>
              Join
            </button>
          </div>
        ) : (
          <Link to='/login'>Please log in to join table</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  table: state.table,
  loggedIn: state.auth !== null
});

export default connect(
  mapStateToProps,
  { loadTable }
)(TableDetailsContainer);
