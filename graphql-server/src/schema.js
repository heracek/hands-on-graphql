import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import RootType from './types/root';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      root: {
        type: RootType,
        resolve: () => ({}),
      },
    },
  }),
});

export default schema;
