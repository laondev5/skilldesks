import Image from "next/image";
import React from "react";

const ViewJob = ({ jobData }) => {
  //console.log(jobData);
  return (
    <div className="">
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="lg:w-[20%] flex justify-center items-center mx-auto  border bg-white rounded-md h-screen">
          <div className="w-[95%] mx-auto flex flex-col">
            <div className="w-[8rem] h-[8rem] rounded-full border mb-4">
              <Image
                src={jobData.coverImage}
                alt="job logo"
                width={90}
                height={90}
                className="w-[8rem] h-[8rem] rounded-full"
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
        <div className="lg:w-[75%] bg-white border rounded-md h-screen overflow-y-auto">
          <div className=" bg-blue-950">
            <div className=" px-4 py-3 text-white text-2xl font-semibold shadow-md">
              Job details
            </div>
          </div>
          <div className="w-[95%] mx-auto flex flex-col">
            {/* <div className="w-[90%] h-[12rem] bg-pink-100 border my-4">
              
            </div> */}

            <div
              className="w-[90%] ProseMirror whitespace-pre-line `"
              dangerouslySetInnerHTML={{ __html: jobData.Description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
