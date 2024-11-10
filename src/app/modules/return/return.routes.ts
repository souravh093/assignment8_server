import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest";
import borrowReturnValidationSchema from "./return.validation";
import { ReturnController } from "./return.controller";

const router = Router();

// return borrowed book route
router.post(
  "/",
  validationRequest(borrowReturnValidationSchema),
  ReturnController.returnBorrowedBook
);

// export the router
export const ReturnRoutes = router;
