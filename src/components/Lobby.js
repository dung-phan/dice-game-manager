import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
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
      <div className="section-home">
        <div className="row">
          <div className="frame">
            <div className="frame__left">
              <Navigation />
              <div>
                <ul>
                  {this.props.tables.map(table => (
                    <div className="card">
                      <li key={table.id}>
                        <Link className="link" to={`/table/${table.id}`}>
                          <div className="heading-sub">{table.name}</div>
                          <h5>Status: {table.status}</h5>
                          <button className="btn btn-card">Join</button>
                        </Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <div className="frame__right">
              <div className="frame__right--box"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tables: state.tables
});

export default connect(mapStateToProps, { loadTables, joinTable })(Lobby);
{
  /* 
          
        </div>
      </div> */
}
