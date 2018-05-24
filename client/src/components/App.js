import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './Header';
import Hotels from '../containers/Hotels';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div id="body">
            <Route exact path="/" component={Hotels} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
