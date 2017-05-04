// @flow
import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
// changed the below line from '../Home' to './Home' in order to get app
// to compile.
import Home from './Home';
import NotFound from '../../components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
