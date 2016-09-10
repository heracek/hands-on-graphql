import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import { mapFilmIdsToObjects } from '../mockdata'
import { Film } from './film'

const PLANET_TYPE_NAME = 'PlanetType';

export const Planet = new GraphQLObjectType({
  name: PLANET_TYPE_NAME,
  fields: () => ({
    id: { type: GraphQLID },
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
  }),
});
