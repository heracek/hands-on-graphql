import React, { Component } from 'react';
import Relay from 'react-relay';
import { PageHeader } from 'react-bootstrap';

import { PlanetsTableContainer } from '../Planets/PlanetsTable.js';
import { createDefaultRenderer } from '../DefaultRenderer';

class PlanetsPage extends Component {
  render() {
    const { root } = this.props;
    const { planets } = root || {};

    return (
      <div>
        <PageHeader>Planets</PageHeader>
        <PlanetsTableContainer
          planets={planets}
        />
      </div>
    );
  }
}

const PlanetsPageContainer = Relay.createContainer(PlanetsPage, {
  fragments: {
    root: () => Relay.QL`
      fragment on Root {
        planets {
          ${PlanetsTableContainer.getFragment('planets')}
        }
      }
    `,
  }
});

class PlanetsRoute extends Relay.Route {
  static routeName = 'PlanetsRoute';
  static queries = {
    root: () => Relay.QL`query { root }`,
  };
}

export const PlanetsPageRenderer = createDefaultRenderer({
  Container: PlanetsPageContainer,
  getQueryConfig() { return new PlanetsRoute(); },
});
