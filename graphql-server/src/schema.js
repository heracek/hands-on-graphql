import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import { RootType } from './types/root';
import { nodeField } from './node-definition';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      node: nodeField,
      root: {
        type: RootType,
        resolve: () => ({}),
      },
    },
  }),
});

export default schema;
