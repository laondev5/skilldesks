"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getJobs = async (userId) => {
  //console.log(userId);
  try {
    const jobs = await prisma.Jobs.findMany({
      where: {
        userId: userId,
      },
    });
    //console.log(jobs);
    return jobs;
  } catch (error) {
    console.log(error);
  }
};
