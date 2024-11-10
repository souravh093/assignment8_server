import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest";
import { BookValidations } from "./book.validation";
import { BookController } from "./book.controller";

const router = Router();

// create a book route
router.post(
  "/",
  validationRequest(BookValidations.createBookValidationSchema),
  BookController.createBook
);

// get all books route
router.get("/", BookController.getBooks);

// get a book by id route
router.get("/:bookId", BookController.getBookById);

// update a book by id route
router.put(
  "/:bookId",
  validationRequest(BookValidations.updateBookValidationSchema),
  BookController.updateBookById
);

// delete a book by id route
router.delete("/:bookId", BookController.deleteBookById);


// export the router
export const BookRoutes = router;
