import React from 'react';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">

            <a className="nav-link"
            onClick={props.switchRouteChild.bind(this, 'viewContacts')}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"
            onClick={props.switchRouteChild.bind(this, 'addContact')}
            >Add
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import PropTypes from 'prop-types'


Navbar.propTypes = {
    switchRouteChild:PropTypes.func.isRequired
}

export default Navbar