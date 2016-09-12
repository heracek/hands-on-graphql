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
import { Film } from './film';

export const RootType = new GraphQLObjectType({
  name: 'Root',
  fields: () => {
    const { PlanetConnection } = require('./planet');
    const { FilmConnection } = require('./film');
    return {
      planets: {
        type: PlanetConnection,
        args: connectionArgs,
        resolve(obj, args) {
          return connectionFromArray(getAllplanets(), args);
        },
      },
      films: {
        type: FilmConnection,
        args: connectionArgs,
        resolve(obj, args) {
          return connectionFromArray(getAllFilms(), args);
        },
      },
    }
  },
});
