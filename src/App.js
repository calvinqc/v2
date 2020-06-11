import React, { Component } from 'react';
import RouterComponent from './router/RouterComponent';
class App extends Component {
  render() {
    const { user } = this.props || {};
    return (
      <div>
        <RouterComponent user={user} />
      </div>
    );
  }
}

export default App;
