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

const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: () => {
    const { PlanetType } = require('./planet');

    return {
      id: globalIdField(),
      title: { type: GraphQLString },
      director: { type: GraphQLString },
      openingCrawl: { type: GraphQLString },
      releaseDate: { type: GraphQLString },
      planets: {
        type: new GraphQLList(PlanetType),
        resolve(obj) {
          return mapPlanetIdsToObjects(obj.planets);
        },
      },
    };
  },
 });

 const { connectionType: FilmConnection } = connectionDefinitions({
   nodeType: FilmType,
 });

 export {
   FilmType,
   FilmConnection,
 };
