import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';


const PLANET_TYPE_NAME = 'PlanetType';

export const Planet = new GraphQLObjectType({
  name: PLANET_TYPE_NAME,
  fields: {
     id: { type: GraphQLID },
     name: { type: GraphQLString },
     population: { type: GraphQLInt },
     climate: { type: GraphQLString },
     diameter: { type: GraphQLInt },
     surface_water: { type: GraphQLInt },
   },
 });
