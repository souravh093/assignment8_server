import { Router } from "express";
import validationRequest from "../../middlewares/validationRequest";
import { MemberValidations } from "./member.validation";
import { MemberController } from "./member.controller";

const router = Router();

// create a member route
router.post(
  "/",
  validationRequest(MemberValidations.createMemberValidationSchema),
  MemberController.createMember
);

// get all members route
router.get("/", MemberController.getMembers);

// get a member by id route
router.get("/:memberId", MemberController.getMemberById);

// update a member by id route
router.put(
  "/:memberId",
  validationRequest(MemberValidations.updateMemberValidationSchema),
  MemberController.updateMemberById
);

// delete a member by id route
router.delete("/:memberId", MemberController.deleteMemberById);

export const MemberRoutes = router;
