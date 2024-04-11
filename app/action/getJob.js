"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getJob = async (id) => {
  //console.log(id);
  try {
    const job = await prisma.Jobs.findUnique({
      where: {
        id: id,
      },
    });
    //console.log(jobs);
    return job;
  } catch (error) {
    console.log(error);
  }
};
