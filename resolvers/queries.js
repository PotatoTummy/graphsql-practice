import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const Query = {
  books: async () => await prisma.book.findMany(),
  book: async (_, { id }) => await prisma.book.findUnique({
    where: {
      id: parseInt(id),
    },
  }),
  authors: async () => await prisma.author.findMany(),
  author: async (_, { id }) => await prisma.author.findUnique({
    where: {
      id: parseInt(id),
    },
  }),
};
