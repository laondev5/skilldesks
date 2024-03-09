import React from "react";

import BrandRegisterForm from "@/components/BrandRegisterForm";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <BrandRegisterForm />
      </div>
      <div
        className="flex-1 hidden lg:flex w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/register.svg')",
        }}
      ></div>
    </div>
  );
};

export default Login;
