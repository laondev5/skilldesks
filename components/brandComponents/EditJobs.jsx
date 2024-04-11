"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Industries, JobType, Countries } from "@/lib/parameters";
import { createJobs } from "@/app/action/createJobs";
import { useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";
import { updateJob } from "@/app/action/updateJob";
const EditJobs = ({ jobData }) => {
  //console.log(jobData);
  const [isLoading, setIsLoading] = useState(false);
  const itemId = jobData?.id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();
  const userData = session?.user;
  const userId = userData?.id;
  console.log();

  const uploadData = async (itemId, data) => {
    console.log(itemId, data);
    try {
      const res = await updateJob(itemId, data);
      if (res) {
        toast.success("Job UPDATED successfully");
      }
    } catch (error) {
      toast.error("Failed to UPDATE job");
    }
  };

  const onSubmit = async (data) => {
    //console.log(data);
    setIsLoading(true);
    // get image
    const rawImage = data?.file[0];
    const numString = data?.pay;
    const payInt = parseInt(numString);
    //console.log(rawImage);

    //upload image
    const formData = new FormData();
    formData.append("file", rawImage);
    formData.append("upload_preset", "skilldesk"); // Replace with your Cloudinary preset
    // upload image
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/laon/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Failed to upload image to cloud");
      }
      const imageData = await response.json();
      //console.log("Image uploaded:", imageData);
      const image = imageData?.secure_url;
      //console.log(image);
      const brandData = { ...data, file: image, pay: payInt };
      //console.log(brandData);
      uploadData(itemId, brandData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="w-[100%]">
      <Toaster position="bottom-right" expand={false} richColors />
      {isLoading && (
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-gray-500/5">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex justify-center items-center w-[10rem] h-[10rem]  rounded-md ">
              <InfinitySpin
                height="100"
                width="100"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        </div>
      )}
      <h1 className="text-3xl text-center text-blue-950 font-bold py-8">
        Update job position
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]"
      >
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Job Title
          </Label>
          <Input
            {...register("title")}
            // value={jobData.title}
            type="text"
            name="title"
            id="title"
            placeholder="Brand name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Brand name
          </Label>
          <Input
            {...register("brandName")}
            //value={jobData.brandName}
            type="text"
            name="brandName"
            id="name"
            placeholder="Brand name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Select Industry
          </Label>

          <select
            //value={jobData.industry}
            {...register("industry", { required: true })}
          >
            <option value="value1">select an option</option>
            {Industries.map((ind, i) => (
              <option
                // onChange={(e) => handleChange(e)}
                value={ind}
                key={i}
              >
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Job Type
          </Label>

          <select
            //value={jobData.jobType}
            {...register("jobType", { required: true })}
          >
            <option value="value1">select an option</option>
            {JobType.map((ind, i) => (
              <option
                // onChange={(e) => handleChange(e)}
                value={ind}
                key={i}
              >
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Pay
          </Label>
          <Input
            {...register("pay")}
            //value={jobData.pay}
            type="number"
            name="pay"
            id="name"
            placeholder="Pay"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* countries */}

        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Country
          </Label>

          <select
            //value={jobData.country}
            {...register("country", { required: true })}
          >
            <option value="value1">select an option</option>
            {Countries.map((ind, i) => (
              <option
                // onChange={(e) => handleChange(e)}
                value={ind}
                key={i}
              >
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            City
          </Label>
          <Input
            {...register("city")}
            //value={jobData.city}
            type="text"
            name="city"
            id="city"
            placeholder="city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" my-2">
          <Label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </Label>
          <Textarea
            {...register("description")}
            //value={jobData.Description}
            placeholder="description"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Upload cover image
          </Label>
          <div className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
            <input
              // value={jobData.coverImage}
              type="file"
              className="py-3 px-4"
              {...register("file")}
            />
          </div>
        </div>
        <div className="my-2">
          <Button variant="main" size="lg">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditJobs;
