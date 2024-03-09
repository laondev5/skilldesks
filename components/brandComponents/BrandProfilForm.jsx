"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import { Industries, JobType, Countries } from "@/lib/parameters";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

const BrandProfilForm = () => {
  const { data: session } = useSession();
  const userData = session?.user;
  const [data, setData] = useState({
    brandName: "",
    url: "",
    industry: "",
    description: "",
    image: "",
  });

  // const { ...data, image } = data;
  console.log({ ...data });
  const ref = useRef(null);

  const handleClickImage = () => {
    ref.current?.click();
  };
  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ data });
    //console.log(values);
    // const response = await fetch(`/api/auth/brand/${session?.user.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     brandName: data.brandName,
    //     url: data.url,
    //     description: data.description,
    //     industry: data.industry,
    //     // image: data.image,
    //   }),
    // });

    // // const info = await response.json();
    // // console.log(info);
    // if (response.ok) {
    //   Router.push("/home");
    // } else {
    //   console.error("Registration unsuccessful");
    // }
  };
  console.log({ data });
  return (
    <div className="w-[100%]">
      <h1 className="text-3xl text-center text-blue-950 font-bold py-8">
        Complete your profile
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]"
      >
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Brand name
          </Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="brandName"
            id="brandName"
            placeholder="Brand name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Website Url
          </Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="url"
            id="url"
            placeholder="www.brand.com"
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Industries.map((ind, i) => (
                  <SelectItem
                    onChange={(e) => handleChange(e)}
                    value={ind}
                    name="industry"
                    key={i}
                  >
                    {ind}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className=" my-2">
          <Label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </Label>
          <Textarea
            onChange={(e) => handleChange(e)}
            name="description"
            placeholder="Description"
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="my-2">
          <div
            onClick={handleClickImage}
            className="p-4 flex flex-col items-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer"
          >
            <UploadCloud className="w-6 h-6" />
            <span> upload brand logo</span>
            <input
              onChange={(e) => handleChange(e)}
              type="file"
              name="image"
              ref={ref}
              className="hidden"
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

export default BrandProfilForm;
