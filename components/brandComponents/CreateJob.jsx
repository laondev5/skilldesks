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

const CreateJob = () => {
  const ref = useRef();
  const handleClickImage = () => {
    ref.current?.click();
  };
  return (
    <div className="w-[100%]">
      <h1 className="text-3xl text-center text-blue-950 font-bold py-8">
        Create a new position
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8 w-[100%]">
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Job Title
          </Label>
          <Input
            type="text"
            name="name"
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
            Brand name
          </Label>
          <Input
            type="text"
            name="name"
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Industries.map((ind, i) => (
                  <SelectItem value={ind} key={i}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Job Type
          </Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {JobType.map((ind, i) => (
                  <SelectItem value={ind} key={i}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Pay
          </Label>
          <Input
            type="number"
            name="name"
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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Countries.map((ind, i) => (
                  <SelectItem value={ind} key={i}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" my-2">
          <Label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            City
          </Label>
          <Input
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
            <span>Choose some files to upload</span>
            <input type="file" ref={ref} className="hidden" />
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

export default CreateJob;
