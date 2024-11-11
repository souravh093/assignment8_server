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
exports.BookServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
// create a book into the database
const createBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.book.create({
        data: payload,
    });
    return result;
});
// get all books from the database
const getBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.book.findMany();
    return result;
});
// get a book by id from the database
const getBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    return result;
});
// update a book by id in the database
const updateBookByIdInDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBookExist = yield db_config_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!isBookExist) {
        throw new AppError_1.default(404, "Book not found.");
    }
    const result = yield db_config_1.default.book.update({
        where: {
            bookId,
        },
        data: payload,
    });
    return result;
});
// delete a book by id from the database
const deleteBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const isBookExist = yield db_config_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!isBookExist) {
        throw new AppError_1.default(404, "Book not found.");
    }
    yield db_config_1.default.book.delete({
        where: {
            bookId,
        },
    });
    return "Book deleted successfully.";
});
// export all the functions
exports.BookServices = {
    createBookIntoDB,
    getBooksFromDB,
    getBookByIdFromDB,
    updateBookByIdInDB,
    deleteBookByIdFromDB,
};
