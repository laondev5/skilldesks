import { getJob } from "@/app/action/getJob";
import ViewJob from "@/components/brandComponents/ViewJob";
import React from "react";

const page = async ({ searchParams }) => {
  //console.log(searchParams.itemId);
  const jobData = await getJob(searchParams.itemId);
  //console.log(jobData);
  return (
    <div className="w-[95%] h-[600px] mx-auto">
      <ViewJob jobData={jobData} />
    </div>
  );
};

export default page;
