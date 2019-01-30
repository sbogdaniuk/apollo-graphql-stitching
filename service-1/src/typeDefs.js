import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    authorId: ID!
  }

  type Query {
    books: [Book]
  }
`
