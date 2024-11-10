import { Book } from "@prisma/client";
import prisma from "../../../db/db.config";
import AppError from "../../errors/AppError";

// create a book into the database
const createBookIntoDB = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

// get all books from the database
const getBooksFromDB = async () => {
  const result = await prisma.book.findMany();

  return result;
};

// get a book by id from the database
const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  return result;
};

// update a book by id in the database
const updateBookByIdInDB = async (bookId: string, payload: Book) => {
  const isBookExist = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!isBookExist) {
    throw new AppError(404, "Book not found.");
  }

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });

  return result;
};

// delete a book by id from the database
const deleteBookByIdFromDB = async (bookId: string) => {
  const isBookExist = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!isBookExist) {
    throw new AppError(404, "Book not found.");
  }

  await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return "Book deleted successfully.";
};

// export all the functions
export const BookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getBookByIdFromDB,
  updateBookByIdInDB,
  deleteBookByIdFromDB,
};
