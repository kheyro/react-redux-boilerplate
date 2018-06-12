import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';


import Header from './containers/Header';
import Home from './containers/Home';

import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
};

App.defaultProps = {
  location: '/',
};

export default App;
