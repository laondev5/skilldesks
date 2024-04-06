"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createJobs = async (userId, data) => {
  console.log(userId, data);
  try {
    const job = await prisma.Jobs.create({
      data: {
        title: data.title,
        brandName: data.brandName,
        country: data.country,
        Description: data.description,
        pay: data.pay,
        jobType: data.jobType,
        city: data.city,
        industry: data.industry,
        coverImage: data.file,
        userId: userId,
      },
    });
    console.log(job);
    return job;
  } catch (error) {
    console.log(error);
  }
};
