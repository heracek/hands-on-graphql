import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField
} from 'graphql-relay';

import { mapFilmIdsToObjects } from '../mockdata';
import { nodeInterface } from '../node-definition';

const PLANET_TYPE_NAME = 'PlanetType';

const Planet = new GraphQLObjectType({
  name: PLANET_TYPE_NAME,
  fields: () => {
    const { Film } = require('./film');

    return {
      id: globalIdField(),
      name: { type: GraphQLString },
      population: { type: GraphQLInt },
      climate: { type: GraphQLString },
      diameter: { type: GraphQLInt },
      surfaceWater: {
        type: GraphQLInt,
        resolve(obj) {
          return obj.surface_water;
        },
      },
      films: {
        type: new GraphQLList(Film),
        resolve(obj) {
          return mapFilmIdsToObjects(obj.films);
        },
      },
    };
  },
  interfaces: [nodeInterface],
});

const { connectionType: PlanetConnection } = connectionDefinitions({
  name: PLANET_TYPE_NAME,
  nodeType: Planet,
});

export { PLANET_TYPE_NAME, Planet, PlanetConnection };
