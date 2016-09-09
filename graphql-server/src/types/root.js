import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { getAllFilms, getAllplanets } from '../mockdata';
import { Planet } from './planet';
import { Film } from './film';

const RootType = new GraphQLObjectType({
  name: 'Root',
  fields: {
    planets: {
      type: new GraphQLList(Planet),
      resolve(obj) {
        return getAllplanets();
      },
    },
    films: {
      type: new GraphQLList(Film),
      resolve(obj) {
        return getAllFilms();
      },
    },
  },
});

export default RootType;
