import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        <span className="nav-span">
          <i className="ion ion-md-home"></i>
        </span>
      </Link>
      <Link className="nav-link" to="/account">
        <span className="nav-span">
          <i className="ion ion-md-create"></i>
        </span>
      </Link>
      <Link className="nav-link" to="/lobby">
        <span className="nav-span">
          <i className="ion ion-md-log-in"></i>
        </span>
      </Link>
    </div>
  );
}
