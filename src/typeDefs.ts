import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum PlaceType {
    OFFICE
    APARTMENT
  }
  
  type Address {
    id: ID!
    street: String!
    city: String!
    country: String!
    longitude: Float!
    latitude: Float!
  }
  
  type Facility {
    id: ID!
    name: String!
  }
  
  type Image {
    id: ID!
    url: String!
    thumbnailUrl: String!
  }
  
  type Place {
    id: ID!
    name: String!
    description: String!
    facilities: [Facility!]!
    type: PlaceType!
    images: [Image!]!
    address: Address!
  }
  
  type Query {
    facilities: [Facility!]!
    places(first: Int, after: String, search: String, facilites: [ID!], type: PlaceType): [Place!]!
    place(id: String!): Place!
  }
`;
