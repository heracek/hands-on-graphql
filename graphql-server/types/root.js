import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const RootType = new GraphQLObjectType({
  name: 'Root',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'world',
    },
  },
});

export default RootType;
