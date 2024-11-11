"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidations = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Member name is required." }),
        email: zod_1.z.string({ required_error: "Member email is required." }),
        phone: zod_1.z.string({ required_error: "Member phone is required." }),
        membershipDate: zod_1.z.string({
            required_error: "Member membership date is required.",
        }),
    }),
});
const updateMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        membershipDate: zod_1.z.string().optional(),
    }),
});
exports.MemberValidations = {
    createMemberValidationSchema,
    updateMemberValidationSchema,
};
