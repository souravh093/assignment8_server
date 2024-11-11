"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const borrow_validation_1 = require("./borrow.validation");
const borrow_controller_1 = require("./borrow.controller");
const router = (0, express_1.Router)();
router.post("/", (0, validationRequest_1.default)(borrow_validation_1.BorrowValidations.createBorrowValidationSchema), borrow_controller_1.BorrowController.borrowBook);
router.get("/overdue", borrow_controller_1.BorrowController.borrowOverdueBook);
exports.BorrowBookRoutes = router;
