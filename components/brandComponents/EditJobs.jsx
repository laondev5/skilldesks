"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { useForm, Controller } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";
import { updateJob } from "@/app/action/updateJob";
import Tiptap from "../Tiptap";
const EditJobs = ({ jobData }) => {
  //console.log(jobData);
  const [isLoading, setIsLoading] = useState(false);
  const [des, setDes] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const itemId = jobData?.id;
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Event handler to update state when editor content changes
  // const handleEditorChange = ({ editor }) => {
  //   console.log(editor);
  //   setEditorContent(editor.getHTML());
  // };

  const { data: session } = useSession();
  const userData = session?.user;
  const userId = userData?.id;
  console.log();
  const handleContent = (input) => {
    setDes(input);
  };
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
    console.log(data, des);
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
      const brandData = { ...data, file: image, pay: payInt, description: des };
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
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Job Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Brand name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="brandName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Brand name
                </Label>
                <Input
                  type="text"
                  id="brandName"
                  name="brandName"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Brand name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="industry"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Select Industry
                </Label>

                <select
                  id="industry"
                  name="industry"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                >
                  <option value="value1">select an option</option>
                  {Industries.map((ind, i) => (
                    <option value={ind} key={i}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="jobType"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Job Type
                </Label>

                <select
                  id="jobType"
                  name="jobType"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                >
                  <option value="value1">select an option</option>
                  {JobType.map((ind, i) => (
                    <option value={ind} key={i}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="pay"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Pay
                </Label>

                <Input
                  type="number"
                  id="pay"
                  name="pay"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="payment"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>

        <div className=" my-2">
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Country
                </Label>

                <select
                  id="country"
                  name="country"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                >
                  <option value="value1">select an option</option>
                  {Countries.map((ind, i) => (
                    <option value={ind} key={i}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <div>
                <Label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  City
                </Label>

                <Input
                  type="text"
                  id="city"
                  name="city"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="city"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        </div>
        <div className=" my-2">
          {/* <Textarea
            {...register("description")}
            //value={jobData.Description}
            placeholder="description"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          /> */}
          {/* <input
            type="text"
            className="hidden"
            {...register("description")} // Register the editorContent field
            value={editorContent} // Pass the Tiptap editor content as the value
          /> */}
          {/* <Tiptap handleEditorChange={handleEditorChange} /> */}

          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value, name } }) => (
              <div>
                <Label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </Label>
                <Tiptap
                  des={des}
                  description={name}
                  onChange={(newContent) => handleContent(newContent)}
                />
              </div>
            )}
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
            <input type="file" className="py-3 px-4" {...register("file")} />
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
