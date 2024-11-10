import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest";
import { BorrowValidations } from "./borrow.validation";
import { BorrowController } from "./borrow.controller";

const router = Router();

router.post(
  "/",
  validationRequest(BorrowValidations.createBorrowValidationSchema),
  BorrowController.borrowBook
);

router.get("/overdue", BorrowController.borrowOverdueBook);

export const BorrowBookRoutes = router;
