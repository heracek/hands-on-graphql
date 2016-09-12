import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import {
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay';
import { getAllFilms, getAllplanets } from '../mockdata';

export const RootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => {
    const { PlanetType, PlanetConnection } = require('./planet');
    const { FilmType, FilmConnection } = require('./film');
    return {
      planets: {
        type: new GraphQLList(PlanetType),
        resolve() {
          return getAllplanets();
        },
      },
      planetsConnection: {
        type: PlanetConnection,
        args: connectionArgs,
        resolve(obj, args) {
          return connectionFromArray(getAllplanets(), args);
        },
      },
      films: {
        type: new GraphQLList(FilmType),
        resolve() {
          return getAllFilms();
        },
      },
      filmsConnection: {
        type: FilmConnection,
        args: connectionArgs,
        resolve(obj, args) {
          return connectionFromArray(getAllFilms(), args);
        },
      },
    };
  },
});
