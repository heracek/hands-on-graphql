import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
} from 'graphql-relay';

import {
  mapIdsToObjectsPromise,
  swapiURLtoId,
  getAllFilmsPromise,
} from '../data';
import { nodeInterface } from '../node-definition';
import { tryNumberResolver } from './helpers.js';

const PlanetType = new GraphQLObjectType({
  name: 'Planet',
  fields: () => {
    const { FilmConnection, FilmType } = require('./film');

    return {
      id: globalIdField(
        PlanetType.name,
        ({ url }) => swapiURLtoId(url)
      ),
      rawId: {
        type: GraphQLInt,
        resolve: ({ url }) => swapiURLtoId(url)
      },
      name: { type: GraphQLString },
      climate: { type: GraphQLString },
      population: {
        type: GraphQLFloat,
        resolve: tryNumberResolver('population'),
      },
      diameter: {
        type: GraphQLFloat,
        resolve: tryNumberResolver('diameter'),
      },
      surfaceWater: {
        type: GraphQLFloat,
        resolve: tryNumberResolver('surface_water'),
      },
      films: {
        type: new GraphQLList(FilmType),
        resolve(obj) {
          return mapIdsToObjectsPromise(obj.films);
        },
      },
      filmsConnection: {
        type: FilmConnection,
        args: connectionArgs,
        async resolve(obj, args) {
          const allFilms = await getAllFilmsPromise();
          return connectionFromArray(allFilms, args);
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
