import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/react"; // For SSR
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req, res) {
  const session = await unstable_getServerSession(req, res); // For SSR
  // OR
  //const { data: session } = useSession(); // For CSR

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session.user?.id; // Extract user ID
  console.log(userId);

  if (!userId) {
    return res.status(400).json({ message: "Missing user ID" });
  }

  const { brandName, url, description, image, industry } = req.body; // Example data to update
  console.log(brandName, url, description, image);

  try {
    await prisma.User.update({
      where: { id: userId },
      data: {
        ...(brandName ? { brandName } : {}),
        ...(url ? { url } : {}),
        ...(description ? { description } : {}),
        ...(industry ? { industry } : {}),
        ...(image ? { image } : {}),
      },
    });

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating user" });
  }
}

export default handler;
