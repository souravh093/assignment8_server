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
exports.MemberServices = void 0;
const db_config_1 = __importDefault(require("../../../db/db.config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
// crate member into database
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.member.create({
        data: payload,
    });
    return result;
});
// get all members from database
const getMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.member.findMany();
    return result;
});
// get a member by id from database
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    return result;
});
// update a member by id in database
const updateMemberIntoDb = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistMember = yield db_config_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!isExistMember) {
        throw new AppError_1.default(404, "Member not found.");
    }
    const result = yield db_config_1.default.member.update({
        where: {
            memberId,
        },
        data: payload,
    });
    return result;
});
// delete a member by id from database
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistMember = yield db_config_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!isExistMember) {
        throw new AppError_1.default(404, "Member not found.");
    }
    yield db_config_1.default.member.delete({
        where: {
            memberId,
        },
    });
    return "Member successfully deleted.";
});
// export the functions to services
exports.MemberServices = {
    createMemberIntoDB,
    getMembersFromDB,
    getMemberByIdFromDB,
    updateMemberIntoDb,
    deleteMemberFromDB,
};
