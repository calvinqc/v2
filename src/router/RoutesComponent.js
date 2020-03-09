import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Page
import HomePage from '../pages/HomePage';

class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}
export default RoutesComponent;
