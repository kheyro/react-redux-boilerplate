import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavBarLink, NavBar } from '../styles/ui';

class Header extends Component {
  renderLinks = () => {
    return (
      <Fragment>
        <li className="nav-item">
          <NavBarLink to="/signin">
            Sign In
          </NavBarLink>
        </li>
        <li className="nav-item">
          <NavBarLink to="/signup">
            Sign Up
          </NavBarLink>
        </li>
      </Fragment>
    );
  };

  render() {
    return (
      <NavBar className="navbar navbar-expand-lg mb-4 navbar-dark">
        <NavBarLink className="navbar-brand" to="/">
          App Name
        </NavBarLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavBarLink to="/">
                Home
              </NavBarLink>
            </li>
            {this.renderLinks()}
          </ul>
        </div>
      </NavBar>
    );
  }
}

Header.propTypes = {
};

Header.defaultProps = {
};

const mapStateToProps = state => ({
});

export default connect(null, null)(Header);
