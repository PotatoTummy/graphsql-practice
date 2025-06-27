const { createSchema, createYoga } = require('graphql-yoga');
const http = require('http');

const books = [
  { id: '1', title: '1984', author: 'George Orwell' },
  { id: '2', title: 'Brave New World', author: 'Aldous Huxley' }
];

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
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  },
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
