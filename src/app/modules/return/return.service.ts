import prisma from "../../../db/db.config";
import AppError from "../../errors/AppError";

// return borrowed book into the database
const returnBorrowedBook = async (borrowId: string) => {
  const isBorrowRecordExist = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
    },
  });

  if (!isBorrowRecordExist) {
    throw new AppError(404, "Borrow record not found");
  }


  await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  return "Book returned successfully.";
};


export const ReturnService = {
  returnBorrowedBook,
};