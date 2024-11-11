"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const return_validation_1 = __importDefault(require("./return.validation"));
const return_controller_1 = require("./return.controller");
const router = (0, express_1.Router)();
// return borrowed book route
router.post("/", (0, validationRequest_1.default)(return_validation_1.default), return_controller_1.ReturnController.returnBorrowedBook);
// export the router
exports.ReturnRoutes = router;
