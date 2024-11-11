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
exports.BorrowService = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
// borrow book into the database
const borrowBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBookExist = yield db_config_1.default.book.findUnique({
        where: {
            bookId: payload.bookId,
        },
    });
    const isMemberExist = yield db_config_1.default.member.findUnique({
        where: {
            memberId: payload.memberId,
        },
    });
    if (!isBookExist && !isMemberExist) {
        throw new AppError_1.default(404, "Book or Member not found");
    }
    const result = yield db_config_1.default.borrowRecord.create({
        data: payload,
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
        },
    });
    return result;
});
const borrowOverdueBook = () => __awaiter(void 0, void 0, void 0, function* () {
    // find which books are have return date don't allow null value in return date
    const result = yield db_config_1.default.borrowRecord.findMany({
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
    const finalOverdueBooks = result
        .filter((book) => {
        const borrowDate = new Date(book.borrowDate);
        if (!book.returnDate) {
            throw new AppError_1.default(400, "Return date is required");
        }
        const returnDate = new Date(book.returnDate);
        const diffTime = Math.abs(returnDate.getTime() - borrowDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 14;
    })
        .map((book) => {
        const borrowDate = new Date(book.borrowDate);
        if (!book.returnDate) {
            throw new AppError_1.default(400, "Return date is required");
        }
        const returnDate = new Date(book.returnDate);
        const diffTime = Math.abs(returnDate.getTime() - borrowDate.getTime());
        const overdueDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: book.borrowId,
            bookTitle: book.book.title,
            borrowerName: book.member.name,
            overdueDays: overdueDays,
        };
    });
    return finalOverdueBooks;
});
// export all functions from the service
exports.BorrowService = {
    borrowBookIntoDB,
    borrowOverdueBook,
};
