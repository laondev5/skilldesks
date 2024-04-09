import { NextApiRequest, NextApiResponse } from "next";
import { v2 } from "cloudinary-react";

// Replace with your Cloudinary credentials
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function handler(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "No image file uploaded" });
  }

  const file = req.body.file; // Access the uploaded file

  try {
    const uploadResult = await v2.uploader.upload(file.path); // Upload to Cloudinary
    return res
      .status(200)
      .json({ message: "Image uploaded successfully", data: uploadResult });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading image" });
  }
}

export default handler;
