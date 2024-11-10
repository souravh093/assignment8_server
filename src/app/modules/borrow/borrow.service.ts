import { BorrowRecord } from "@prisma/client";
import prisma from "../../../db/db.config";
import AppError from "../../errors/AppError";

// borrow book into the database
const borrowBookIntoDB = async (payload: BorrowRecord) => {
  const isBookExist = await prisma.book.findUnique({
    where: {
      bookId: payload.bookId,
    },
  });

  const isMemberExist = await prisma.member.findUnique({
    where: {
      memberId: payload.memberId,
    },
  });

  if (!isBookExist && !isMemberExist) {
    throw new AppError(404, "Book or Member not found");
  }

  const result = await prisma.borrowRecord.create({
    data: payload,
    select: {
      borrowId: true,
      bookId: true,
      memberId: true,
      borrowDate: true,
    },
  });

  return result;
};

const borrowOverdueBook = async () => {
  // find which books are have return date don't allow null value in return date
  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: {
        not: null,
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  // filter out the books which are overdue
  const overdueBooks = result.filter((book) => {
    const borrowDate = new Date(book.borrowDate);
    if (!book.returnDate) {
      throw new AppError(400, "Return date is required");
    }
    const returnDate = new Date(book.returnDate);
    const diffTime = Math.abs(returnDate.getTime() - borrowDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 14;
  });

  return overdueBooks;
};

// export all functions from the service
export const BorrowService = {
  borrowBookIntoDB,
  borrowOverdueBook,
};
