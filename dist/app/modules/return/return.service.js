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
exports.ReturnService = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
// return borrowed book into the database
const returnBorrowedBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const isBorrowRecordExist = yield db_config_1.default.borrowRecord.findUnique({
        where: {
            borrowId,
        },
    });
    if (!isBorrowRecordExist) {
        throw new AppError_1.default(404, "Borrow record not found");
    }
    yield db_config_1.default.borrowRecord.update({
        where: {
            borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return "Book returned successfully.";
});
exports.ReturnService = {
    returnBorrowedBook,
};
