import { getJob } from "@/app/action/getJob";
import EditJobs from "@/components/brandComponents/EditJobs";
import React from "react";

const page = async ({ searchParams }) => {
  //console.log(searchParams.itemId);
  const jobData = await getJob(searchParams.itemId);
  //console.log(jobData);
  return (
    <div className="w-[95%] mx-auto">
      <EditJobs jobData={jobData} />
    </div>
  );
};

export default page;
