"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const updateUser = async (id, data) => {
  const { brandName, file, industry, description, url, complete } = data;
  try {
    //console.log(brandName, file, industry, description, url);
    const user = await prisma.User.update({
      where: { id },
      data: {
        brandName: brandName,
        url: url,
        description: description,
        image: file,
        industry: industry,
        status: "complete",
      },
    });
    //console.log(user);
    return user;
  } catch (error) {
    const message = `Error updating user`;
    return message;
  }
};
