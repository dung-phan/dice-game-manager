import React from 'react';
import { connect } from 'react-redux';
import { loadTables, joinTable } from '../actions/table';
import Navigation from './Navigation';
import { baseUrl } from '../constants';

class Lobby extends React.Component {
  componentDidMount() {
    this.props.loadTables();
  }

  handleClick = id => {
    console.log('check handle click');
    console.log('what is id', id);

    this.props.joinTable(id);

    this.props.history.push(`/table/${id}/game`);
  };
  render() {
    if (!this.props.tables) return 'Loading...';
    return (
      <div className="section-home">
        <div className="row">
          <div className="frame">
            <div className="frame__left">
              <div>
                <ul>
                  {this.props.tables.map(table => (
                    <div className="card" key={table.id}>
                      <li>
                        <div className="heading-sub">{table.name}</div>
                        <h5>Status: {table.status}</h5>
                        <button
                          className="btn btn-card"
                          onClick={() => this.handleClick(table.id)}
                          style={{ left: '12rem' }}
                        >
                          Join
                        </button>
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
        <Navigation />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tables: state.tables
});

export default connect(mapStateToProps, { loadTables, joinTable })(Lobby);
