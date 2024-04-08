"use client";
import React, { useEffect, useState, useCallback } from "react";
import Empty from "../Empty";
import { useSession } from "next-auth/react";
import { getJobs } from "@/app/action/getJobs";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteJob } from "@/app/action/deleteJob";
import { Toaster, toast } from "sonner";

const BrandDataTable = ({ userJob }) => {
  //console.log(userJob);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const { data: session } = useSession();

  const handleIsDelete = (id) => {
    setDeleteData(id);
    setIsDelete(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteJob(id);

      if (res) {
        setIsDelete(false);
        toast.success("Job deleted successful");
      }
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };
  //console.log(data);
  return (
    <div className="w-[100%] relative">
      <Toaster position="bottom-right" expand={false} richColors />
      {userJob.length === 0 ? (
        <Empty />
      ) : (
        <div className="mt-[5rem] mb-[5rem]">
          <div className="font-bold text-2xl text-blue-950">
            list of your recent Jobs
          </div>
          <div className="mt-[1rem] bg-white overflow-x-scroll">
            <Table>
              <TableCaption>A .</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Brand name</TableHead>
                  <TableHead>Jot title</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Job type</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pay</TableHead>
                  <TableHead className="text-right">
                    <DotsHorizontalIcon />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userJob.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.brandName}
                    </TableCell>
                    <TableCell>{invoice.title}</TableCell>
                    <TableCell>{invoice.industry}</TableCell>
                    <TableCell>{invoice.jobType}</TableCell>
                    <TableCell>{invoice.country}</TableCell>
                    <TableCell>{invoice.city}</TableCell>
                    <TableCell>
                      <div className="py-1 px-3 rounded-sm text-red-100  font-semibold">
                        Pending
                      </div>
                    </TableCell>
                    <TableCell>{invoice.pay}</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <DotsHorizontalIcon />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Action</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="#">
                              <DropdownMenuItem>View</DropdownMenuItem>
                            </Link>
                            <Link href="#">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>
                              <div
                                className="text-red-500 font-semibold"
                                onClick={() => handleIsDelete(invoice.id)}
                              >
                                Delete
                              </div>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
            </Table>
          </div>
        </div>
      )}

      {/* //alert */}

      {isDelete && (
        // <AlertDialog>
        //   <AlertDialogTrigger>
        //     <span className="text-red-500">Delete</span>
        //   </AlertDialogTrigger>
        //   <AlertDialogContent>
        //     <AlertDialogHeader>
        //       <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        //       <AlertDialogDescription>
        //         This action cannot be undone. This will permanently delete this
        //         job and remove your data from our servers.
        //       </AlertDialogDescription>
        //     </AlertDialogHeader>
        //     <AlertDialogFooter>
        //       <AlertDialogCancel>Cancel</AlertDialogCancel>
        //       <AlertDialogAction>Continue</AlertDialogAction>
        //     </AlertDialogFooter>
        //   </AlertDialogContent>
        // </AlertDialog>
        <div className="absolute left-0 top-0 w-full h-screen bg-gray-300/5">
          <div className="w-full h-full flex justify-center ">
            <div className="flex flex-col justify-center items-center w-[40rem] h-[17rem] bg-white  rounded-md shadow-md px-4">
              <div className="w-fill my-2 flex flex-col justify-center">
                <h2 className="text-red-500 my-1 font-bold text-center text-2xl">
                  Are you absolutely sure?
                </h2>
                <p className="text-center">
                  This action cannot be undone. This will permanently delete
                  this // job and remove your data from our servers.
                </p>
              </div>
              <div className="w-[14rem] flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDelete(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="delete"
                  size="sm"
                  onClick={handleDelete(deleteData)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandDataTable;
