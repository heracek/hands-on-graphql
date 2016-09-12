import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField
} from 'graphql-relay';

import { mapPlanetIdsToObjects } from '../mockdata';
const FILM_TYPE_NAME = 'FilmType';

const Film = new GraphQLObjectType({
  name: FILM_TYPE_NAME,
  fields: () => {
    const { Planet } = require('./planet');

    return {
      id: globalIdField(),
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
    };
  },
 });

 const { connectionType: FilmConnection } = connectionDefinitions({
   name: FILM_TYPE_NAME,
   nodeType: Film,
 });

 export { FILM_TYPE_NAME, Film, FilmConnection };
