import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Book title is required." }),
    genre: z.string({ required_error: "Book genre is required." }),
    publishedYear: z.number({
      required_error: "Book published year is required.",
    }),
    totalCopies: z.number({ required_error: "Book total copies is required." }),
    availableCopies: z.number({
      required_error: "Book available copies is required.",
    }),
  }),
});

const updateBookValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    genre: z.string().optional(),
    publishedYear: z.number().optional(),
    totalCopies: z.number().optional(),
    availableCopies: z.number().optional(),
  }),
});

export const BookValidations = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
