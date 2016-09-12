import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import { ItemsTable } from '../ItemsTable/ItemsTable.js';

export class PlanetsTable extends Component {
  static propTypes = {
    planets: PropTypes.array.isRequired,
  };

  render() {
    const { planets } = this.props;
    const safePlanets = planets || [];
    const enhancedPlanets = safePlanets.map(planet => ({
      ...planet,
      films: (planet.films || []).map(({ title }) => title).join(', '),
    }))

    return (
      <ItemsTable
        items={enhancedPlanets}
        headers={['ID', 'Name', 'Films']}
        columnKeys={['rawId', 'name', 'films']}
        getLinkToItem={
          ({ id }) => `/planets/${id}`
        }
      />
    );
  }
}

export const PlanetsTableContainer = Relay.createContainer(PlanetsTable, {
  fragments: {
    planets: () => Relay.QL`
      fragment on Planet @relay(plural: true) {
        id
        rawId
        name
        films {
          title
        }
      }
    `
  },
});
