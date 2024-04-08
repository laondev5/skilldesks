"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteJob = async (id) => {
  console.log(id);
  try {
    const job = await prisma.Jobs.delete({
      where: {
        id,
      },
    });
    return job;
  } catch (error) {
    console.log(error);
  }
};
