import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <div className="row">
        Welcome Home!
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default connect(null, null)(Home);
