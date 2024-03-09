import BrandLoginForm from "@/components/BrandLoginForm";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <BrandLoginForm />
      </div>
      <div
        className="flex-1 hidden lg:flex w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/login.svg')",
        }}
      ></div>
    </div>
  );
};

export default page;
