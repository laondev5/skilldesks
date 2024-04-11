import React from "react";

const BrandHeaderCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-md shadow-sm py-4 px-6 bg-white flex flex-col w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center text-green-900">
                35
              </h1>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-gray-950 text-center my-2">
              Jobs that have been allocated
            </h3>
            <p className="text-gray-600 font-light text-center">
              It uses a dictionary of over 200 Latin words, combined with a
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-sm py-4 px-6 bg-white flex flex-col w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center text-blue-900">
                35
              </h1>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-gray-950 text-center my-2">
              Jobs that have been approved
            </h3>
            <p className="text-gray-600 font-light text-center">
              It uses a dictionary of over 200 Latin words, combined with a
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-sm py-4 px-6 bg-white flex flex-col w-[23rem] space-x-2 items-center my-2 lg:my-0">
          <div className="">
            <div className="w-[4rem] h-[4rem] rounded-full shadow-sm bg-white cursor-pointer flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-center text-red-900">
                35
              </h1>
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-gray-950 text-center my-2">
              Jobs that are pending
            </h3>
            <p className="text-gray-600 font-light text-center">
              It uses a dictionary of over 200 Latin words, combined with a
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeaderCard;
