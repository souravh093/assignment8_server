import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowService } from "./borrow.service";

// borrow book into the database
const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowService.borrowBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully.",
    data: result,
  });
});


// borrow overdue book
const borrowOverdueBook = catchAsync(async (req, res) => {
  const result = await BorrowService.borrowOverdueBook();

  sendResponse(res, {
    success: true,
    status: 200,
    message: result.length > 0 ? "Overdue borrow list fetched." : "No overdue books.",
    data: result,
  });
});

// export all functions from the controller
export const BorrowController = {
  borrowBook,
  borrowOverdueBook,
};
