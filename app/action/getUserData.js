"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getUserData = async (id) => {
  //console.log(id);
  const userData = await prisma.User.findUnique({
    where: { id },
  });
  //console.log(userData);
  return userData;
};
