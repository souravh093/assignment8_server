"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = require("express");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const member_validation_1 = require("./member.validation");
const member_controller_1 = require("./member.controller");
const router = (0, express_1.Router)();
// create a member route
router.post("/", (0, validationRequest_1.default)(member_validation_1.MemberValidations.createMemberValidationSchema), member_controller_1.MemberController.createMember);
// get all members route
router.get("/", member_controller_1.MemberController.getMembers);
// get a member by id route
router.get("/:memberId", member_controller_1.MemberController.getMemberById);
// update a member by id route
router.put("/:memberId", (0, validationRequest_1.default)(member_validation_1.MemberValidations.updateMemberValidationSchema), member_controller_1.MemberController.updateMemberById);
// delete a member by id route
router.delete("/:memberId", member_controller_1.MemberController.deleteMemberById);
exports.MemberRoutes = router;
