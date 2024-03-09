"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RouteLink } from "@/lib/routeLink";
import NavItem from "../NavItem";

const BrandSideBar = () => {
  return (
    //
    <div className="w-[70%] mx-auto mt-[4rem] lg:mt-[7rem] flex flex-col">
      {RouteLink.map((routUrl, i) => (
        <NavItem
          key={i}
          label={routUrl.label}
          routPath={routUrl.path}
          icon={routUrl.icon}
        />
      ))}
    </div>
  );
};

export default BrandSideBar;
