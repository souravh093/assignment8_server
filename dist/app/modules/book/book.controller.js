"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const book_service_1 = require("./book.service");
// create a book
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.createBookIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 201,
        message: "Book created successfully.",
        data: result,
    });
}));
// get all books
const getBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.getBooksFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Books retrieved successfully.",
        data: result,
    });
}));
// get a book by id
const getBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.getBookByIdFromDB(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully.",
        data: result,
    });
}));
// update a book by id
const updateBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.updateBookByIdInDB(req.params.bookId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book updated successfully.",
        data: result,
    });
}));
// delete a book by id
const deleteBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.deleteBookByIdFromDB(req.params.bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: result,
    });
}));
// export all the controllers
exports.BookController = {
    createBook,
    getBooks,
    getBookById,
    updateBookById,
    deleteBookById,
};
