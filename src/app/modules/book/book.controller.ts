import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

// create a book
const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully.",
    data: result,
  });
});

// get all books
const getBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getBooksFromDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully.",
    data: result,
  });
});

// get a book by id
const getBookById = catchAsync(async (req, res) => {
  const result = await BookServices.getBookByIdFromDB(req.params.bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully.",
    data: result,
  });
});

// update a book by id
const updateBookById = catchAsync(async (req, res) => {
  const result = await BookServices.updateBookByIdInDB(
    req.params.bookId,
    req.body
  );

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully.",
    data: result,
  });
});

// delete a book by id
const deleteBookById = catchAsync(async (req, res) => {
  const result = await BookServices.deleteBookByIdFromDB(req.params.bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: result,
  });
});


// export all the controllers
export const BookController = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
