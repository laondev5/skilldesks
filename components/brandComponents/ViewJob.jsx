import Image from "next/image";
import React from "react";

const ViewJob = ({ jobData }) => {
  console.log(jobData);
  return (
    <div className="">
      <div className="w-full flex items-center">
        <div className="flex-2  border bg-white rounded-md">
          <div className="w-[95%] mx-auto flex flex-col">
            <div className="w-[10rem] h-[10rem] rounded-full border mb-4">
              <Image
                src={jobData.coverImage}
                alt="job logo"
                width={90}
                height={90}
                className="w-[10rem] h-[10rem] rounded-full"
              />
            </div>
            <div className="w-[90%]  mx-auto flex flex-col ">
              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Brand name :</p>
                <h1 className="font-bold text-2xl text-blue-950">
                  {jobData.brandName}
                </h1>
              </div>
              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Job title :</p>
                <p className="font-semibold text-md text-gray-600 my-2">
                  {jobData.title}
                </p>
              </div>
              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Job title :</p>
                <p className="font-semibold text-md text-gray-600 my-2">
                  {jobData.industry}
                </p>
              </div>
              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Job type :</p>
                <p className="font-semibold text-md text-gray-600 my-2">
                  {jobData.jobType}
                </p>
              </div>

              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Country :</p>
                <p className="font-semibold text-md text-gray-600 my-2">
                  {jobData.country}
                </p>
              </div>

              <div className="my-2">
                <p className=" text-sm text-gray-600 ">Pay :</p>
                <p className="font-semibold text-md text-gray-600 my-2">
                  {jobData.pay}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white border rounded-md">
          <div className="w-[95%] mx-auto flex flex-col">
            {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}

            <div className="w-[90%]">{jobData.Description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
