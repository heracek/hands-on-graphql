import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { mapPlanetIdsToObjects } from '../mockdata';
import { Planet } from './planet';
const FILM_TYPE_NAME = 'FilmType';

export const Film = new GraphQLObjectType({
  name: FILM_TYPE_NAME,
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    director: { type: GraphQLString },
    openingCrawl: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    planets: {
      type: new GraphQLList(Planet),
      resolve(obj) {
        return mapPlanetIdsToObjects(obj.planets);
      },
    },
  }),
 });
