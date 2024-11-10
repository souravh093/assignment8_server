import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

// create a member
const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMemberIntoDB(req.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully.",
    data: result,
  });
});

// get all members
const getMembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getMembersFromDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Members retrieved successfully.",
    data: result,
  });
});

// get a member by id
const getMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.getMemberByIdFromDB(req.params.memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully.",
    data: result,
  });
});

// update a member by id
const updateMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMemberIntoDb(
    req.params.memberId,
    req.body
  );

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully.",
    data: result,
  });
});

// delete a member by id
const deleteMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMemberFromDB(req.params.memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: result,
  });
});

// export all member controllers
export const MemberController = {
  createMember,
  getMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
