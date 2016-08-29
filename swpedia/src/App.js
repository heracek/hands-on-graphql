import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { About } from './components/About.js';
import { AppIndex } from './components/AppIndex.js';
import { AppWrapper } from './components/AppWrapper.js';
import { NoMatch } from './components/NoMatch.js';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRoute component={AppIndex}/>
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
