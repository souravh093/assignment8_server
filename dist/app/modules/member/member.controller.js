"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const member_service_1 = require("./member.service");
// create a member
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberServices.createMemberIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 201,
        message: "Member created successfully.",
        data: result,
    });
}));
// get all members
const getMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberServices.getMembersFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Members retrieved successfully.",
        data: result,
    });
}));
// get a member by id
const getMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberServices.getMemberByIdFromDB(req.params.memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Member retrieved successfully.",
        data: result,
    });
}));
// update a member by id
const updateMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberServices.updateMemberIntoDb(req.params.memberId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Member updated successfully.",
        data: result,
    });
}));
// delete a member by id
const deleteMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberServices.deleteMemberFromDB(req.params.memberId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: result,
    });
}));
// export all member controllers
exports.MemberController = {
    createMember,
    getMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById,
};
