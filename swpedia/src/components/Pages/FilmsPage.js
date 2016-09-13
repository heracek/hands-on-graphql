import React, { Component } from 'react';
import Relay from 'react-relay';
import { PageHeader } from 'react-bootstrap';

import { FilmsTableContainer } from '../Films/FilmsTable.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class FilmsPage extends Component {
  render() {
    const { root } = this.props;
    const { filmsConnection: films } = root || {};

    return (
      <div>
        <PageHeader>Films</PageHeader>
        <FilmsTableContainer films={films}/>
      </div>
    );
  }
}

const FilmsPageContainer = Relay.createContainer(FilmsPage, {
  fragments: {
    root: () => Relay.QL`
      fragment on Root {
        filmsConnection(first:100){
          ${FilmsTableContainer.getFragment('films')}
        }
      }
    `,
  }
});

class FilmsRoute extends Relay.Route {
  static routeName = 'FilmsRoute';
  static queries = {
    root: () => Relay.QL`query { root }`,
  };
}

export const FilmsPageRenderer = createDefaultRenderer({
  Container: FilmsPageContainer,
  getQueryConfig() { return new FilmsRoute(); },
});
