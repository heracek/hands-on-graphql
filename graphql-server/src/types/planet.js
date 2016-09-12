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

const PlanetType = new GraphQLObjectType({
  name: 'Planet',
  fields: () => {
    const { FilmType } = require('./film');

    return {
      id: globalIdField(),
      rawId: {
        type: GraphQLInt,
        resolve: ({ id }) => id,
      },
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
        type: new GraphQLList(FilmType),
        resolve(obj) {
          return mapFilmIdsToObjects(obj.films);
        },
      },
    };
  },
  interfaces: [nodeInterface],
});


 const { connectionType: PlanetConnection } = connectionDefinitions({
   nodeType: PlanetType,
 });


export {
  PlanetType,
  PlanetConnection,
};
