import React from "react";
import Image from "next/image";
import BrandContentTable from "@/components/brandComponents/BrandContentTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster, toast } from "sonner";
import { getUserData } from "@/app/action/getUserData";
import { getJobs } from "@/app/action/getJobs";

const page = async () => {
  const session = await getServerSession(authOptions);

  const res = await getUserData(session.user.id);
  //console.log(res);
  const jobs = await getJobs(session.user.id);
  //getUserData
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="w-[95%] mx-auto">
      <Toaster position="bottom-right" expand={false} richColors />
      <div className="w-[90%] mx-auto">
        <div className=" w-[90%] mx-auto bg-blue-950 my-4 rounded-md shadow-sm px-10 py-5">
          <div className="flex space-x-4 items-center">
            <div className="">
              <p className="text-md font-semibold text-white">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures
              </p>
            </div>
            <div className="w-[35%] lg:w-[30%]">
              <Image
                src="/completDashboard.svg"
                alt="complete"
                width={100}
                height={100}
                className="w-[7rem]"
              />
            </div>
          </div>
        </div>
        <BrandContentTable jobs={jobs} />
      </div>
    </div>
  );
};

export default page;
