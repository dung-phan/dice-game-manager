import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadTables, joinTable } from '../actions/table';

class Lobby extends React.Component {
  componentDidMount() {
    this.props.loadTables();
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
              <li class='item' key={table.id}>
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
  { loadTables, joinTable }
)(Lobby);
