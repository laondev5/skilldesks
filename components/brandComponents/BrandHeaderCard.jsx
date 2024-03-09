import React from "react";

const BrandHeaderCard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly items-center ">
        <div className="rounded-md shadow-sm py-4 px-6 bg-blue-950 flex w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="w-[40%]">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center">35</h1>
            </div>
          </div>
          <div className="">
            <p className="text-white font-light">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-sm py-4 px-6 bg-green-950 flex w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="w-[40%]">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center">35</h1>
            </div>
          </div>
          <div className="">
            <p className="text-white font-light">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-sm py-4 px-6 bg-red-950 flex w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="w-[40%]">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center">35</h1>
            </div>
          </div>
          <div className="">
            <p className="text-white font-light">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeaderCard;
