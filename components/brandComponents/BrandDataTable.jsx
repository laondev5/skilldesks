"use client";
import React, { useState } from "react";
import Empty from "../Empty";

const BrandDataTable = () => {
  const [data, setData] = useState(false);
  return <div className="w-[100%]">{data ? <div></div> : <Empty />}</div>;
};

export default BrandDataTable;
