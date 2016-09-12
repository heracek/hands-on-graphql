import React, { Component } from 'react';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

import { AboutPage } from './components/Pages/AboutPage.js';
import { HomePage } from './components/Pages/HomePage.js';
import { AppWrapper } from './components/AppWrapper.js';
import { FilmsPage } from './components/Pages/FilmsPage.js';
import { FilmDetailPage } from './components/Pages/FilmDetailPage.js';
import { NotFoundPage } from './components/Pages/NotFoundPage.js';
import { PlanetDetailPage } from './components/Pages/PlanetDetailPage.js';
import { PlanetsPageRenderer } from './components/Pages/PlanetsPage.js';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:8844/graphql')
);

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRoute component={HomePage}/>
          <Route path="films">
            <IndexRoute component={FilmsPage}/>
            <Route path=":filmId" component={FilmDetailPage}/>
          </Route>
          <Route path="planets">
            <IndexRoute component={PlanetsPageRenderer}/>
            <Route path=":planetId" component={PlanetDetailPage}/>
          </Route>
          <Route path="about" component={AboutPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
