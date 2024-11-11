"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowValidations = void 0;
const zod_1 = require("zod");
const createBorrowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string({ required_error: "Book id is required." }),
        memberId: zod_1.z.string({ required_error: "Member id is required." }),
    }),
});
exports.BorrowValidations = {
    createBorrowValidationSchema,
};
