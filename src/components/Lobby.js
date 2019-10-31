import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadTables, joinTable, tablesFetched } from '../actions/table';
import {baseUrl} from '../constants'

class Lobby extends React.Component {
  source = new EventSource(`${baseUrl}/lobby`)
  componentDidMount() {
    console.log('Lobby did mount')
    console.log('source',this.source)
    this.source.onmessage = event => {
      console.log('got an event', event)
      const tables = JSON.parse(event.data)
      console.log('find tables', tables)
      this.props.tablesFetched(tables)
    }
  }
  onClick = event => {
    console.log(event.target.name);
    this.props.joinTable(event.target.name);
    //joinTable()
    // create action joinTable()
    //sent a put request to /table/:id
  };
  render() {
    if (!this.props.tables) return 'Loading...';
    return (
      <div className='ui divided items'>
        <div className='item'>
          <ul className='ui middle aligned divided animated list'>
            {this.props.tables.map(table => (
              <li className='item' key={table.id}>
                <Link to={`/table/${table.id}`}>
                  {' '}
                  <h2>
                    Table {table.name} is {table.status}{' '}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tables: state.tables
});

export default connect(
  mapStateToProps,
  { loadTables, joinTable, tablesFetched }
)(Lobby);
