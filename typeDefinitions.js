export const typeDefs = /* GraphQL */ `
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Author{
    id: ID!
    name: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    addAuthor(name: String!): Author!
  }
`;