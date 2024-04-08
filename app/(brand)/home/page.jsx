import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import BrandHeaderCard from "@/components/brandComponents/BrandHeaderCard";
import CompleteRegistrationButton from "@/components/brandComponents/CompleteRegistrationButton";
import BrandDataTable from "@/components/brandComponents/BrandDataTable";
//import ProtectedRoute from "@/context/ProtectedRoute";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster, toast } from "sonner";
import { getUserData } from "@/app/action/getUserData";
import { getJobs } from "@/app/action/getJobs";
// import { getServerSession } from "next-auth/next";

let data;
const page = async () => {
  const session = await getServerSession(authOptions);

  const res = await getUserData(session.user.id);
  //console.log(res);
  const jobs = await getJobs(session.user.id);
  //console.log(jobs);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="">
      <Toaster position="bottom-right" expand={false} richColors />
      <div className="w-[95%] mx-auto">
        <BrandHeaderCard />

        {res?.status === "complete" ? (
          <div className="hidden"></div>
        ) : (
          <CompleteRegistrationButton />
        )}
        <BrandDataTable userJob={jobs} />
      </div>
    </div>
  );
};

export default page;
