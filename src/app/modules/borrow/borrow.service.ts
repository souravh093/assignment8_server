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
    }
  });

  return result;
};

// export all functions from the service
export const BorrowService = {
  borrowBookIntoDB,
};
