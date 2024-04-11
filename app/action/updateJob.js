"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateJob = async (id, data) => {
  const {
    title,
    brandName,
    industry,
    jobType,
    pay,
    country,
    city,
    description,
    file,
  } = data;
  // const {
  //   title,
  //   brandName,
  //   industry,
  //   jobType,
  //   pay,
  //   country,
  //   city,
  //   description,
  //   file,
  // } = jobData;
  try {
    //console.log(brandName, file, industry, description, url);
    const user = await prisma.Jobs.update({
      where: { id },
      data: {
        brandName: brandName,
        title: title,
        Description: description,
        jobType: jobType,
        pay: pay,
        country: country,
        city: city,
        coverImage: file,
        industry: industry,
      },
    });
    //console.log(user);
    return user;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
