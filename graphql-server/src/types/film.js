import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';


const FILM_TYPE_NAME = 'FilmType';

export const Film = new GraphQLObjectType({
  name: FILM_TYPE_NAME,
  fields: {
     id: { type: GraphQLID },
     title: { type: GraphQLString },
     director: { type: GraphQLString },
     openingCrawl: { type: GraphQLString },
     releaseDate: { type: GraphQLString },
   },
 });
