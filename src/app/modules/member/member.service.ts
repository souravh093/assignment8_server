import { Member } from "@prisma/client";
import prisma from "../../../db/db.config";
import AppError from "../../errors/AppError";

// crate member into database
const createMemberIntoDB = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

// get all members from database
const getMembersFromDB = async () => {
  const result = await prisma.member.findMany();

  return result;
};

// get a member by id from database
const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

// update a member by id in database
const updateMemberIntoDb = async (memberId: string, payload: Member) => {
  const isExistMember = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!isExistMember) {
    throw new AppError(404, "Member not found.");
  }

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });

  return result;
};

// delete a member by id from database
const deleteMemberFromDB = async (memberId: string) => {
  const isExistMember = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!isExistMember) {
    throw new AppError(404, "Member not found.");
  }

  await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return "Member successfully deleted.";
};

// export the functions to services
export const MemberServices = {
  createMemberIntoDB,
  getMembersFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDb,
  deleteMemberFromDB,
};
