"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidations = void 0;
const zod_1 = require("zod");
const createBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Book title is required." }),
        genre: zod_1.z.string({ required_error: "Book genre is required." }),
        publishedYear: zod_1.z.number({
            required_error: "Book published year is required.",
        }),
        totalCopies: zod_1.z.number({ required_error: "Book total copies is required." }),
        availableCopies: zod_1.z.number({
            required_error: "Book available copies is required.",
        }),
    }),
});
const updateBookValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publishedYear: zod_1.z.number().optional(),
        totalCopies: zod_1.z.number().optional(),
        availableCopies: zod_1.z.number().optional(),
    }),
});
exports.BookValidations = {
    createBookValidationSchema,
    updateBookValidationSchema,
};
