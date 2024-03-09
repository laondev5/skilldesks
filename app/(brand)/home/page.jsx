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

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div className="">
      <div className="w-[95%] mx-auto">
        <BrandHeaderCard />
        <CompleteRegistrationButton />
        <BrandDataTable />
      </div>
    </div>
  );
};

export default page;
