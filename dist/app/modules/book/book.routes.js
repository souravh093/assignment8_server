"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
// create a book route
router.post("/", (0, validationRequest_1.default)(book_validation_1.BookValidations.createBookValidationSchema), book_controller_1.BookController.createBook);
// get all books route
router.get("/", book_controller_1.BookController.getBooks);
// get a book by id route
router.get("/:bookId", book_controller_1.BookController.getBookById);
// update a book by id route
router.put("/:bookId", (0, validationRequest_1.default)(book_validation_1.BookValidations.updateBookValidationSchema), book_controller_1.BookController.updateBookById);
// delete a book by id route
router.delete("/:bookId", book_controller_1.BookController.deleteBookById);
// export the router
exports.BookRoutes = router;
