import React from "react";
import TableDetails from "./TableDetails";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { loadTable } from "../actions/table";

class TableDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTable(Number(this.props.match.params.id));
  }
  render() {
    console.log(this.props.table);
    return <div>
    <TableDetails table={this.props.table} />
    {this.props.loggedIn ? (
      <div>
          <button>Join</button>
      </div>
      ) : (
        <Link to="/login">Please log in to join table</Link>
        )}
        </div>
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
      