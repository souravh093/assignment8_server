import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReturnService } from "./return.service";

// return borrow book routes
const returnBorrowedBook = catchAsync(async (req, res) => {
  const result = await ReturnService.returnBorrowedBook(req.body.borrowId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: result,
  });
});

// export all functions from the controller
export const ReturnController = {
  returnBorrowedBook,
};
