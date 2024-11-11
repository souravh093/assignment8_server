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
exports.BorrowController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const borrow_service_1 = require("./borrow.service");
// borrow book into the database
const borrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowService.borrowBookIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book borrowed successfully.",
        data: result,
    });
}));
// borrow overdue book
const borrowOverdueBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowService.borrowOverdueBook();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: result.length > 0 ? "Overdue borrow list fetched." : "No overdue books.",
        data: result,
    });
}));
// export all functions from the controller
exports.BorrowController = {
    borrowBook,
    borrowOverdueBook,
};
