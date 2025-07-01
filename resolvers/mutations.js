import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const Mutation = {
  addBook: async (_, { title, author }) => {
    const newBook = await prisma.book.create({
      data: {
        title,
        author,
      },
    });
    return newBook;
  },
  addAuthor: async (_, { name }) => {
    const newAuthor = await prisma.author.create({
      data: {
        name,
      },
    });
    return newAuthor;
  },
};
