const { createSchema, createYoga } = require('graphql-yoga');
const http = require('http');
const { Query } = require('./resolvers/queries');
const { Mutation } = require('./resolvers/mutations');
// const prisma = new PrismaClient();


const typeDefs = /* GraphQL */ `
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

const resolvers = {
  Query,
  Mutation,
};

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

// Create an HTTP server and pass Yoga as a handler
const server = http.createServer(yoga);

server.listen(4000, () => {
  console.log('🚀 GraphQL Yoga server running at http://localhost:4000/graphql');
});
