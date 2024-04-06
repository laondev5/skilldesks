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

// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
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

const BrandDataTable = () => {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user?.id;
  //console.log(userId);

  const jobDetails = async (userId) => {
    //console.log(userId);
    try {
      const res = await getJobs(userId);
      if (res.length === 0) {
        setIsData(false);
      }
      //console.log(res);
      setData(res);
      setIsData(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!session?.user) return;
    else jobDetails(userId);
  }, []);
  console.log(data);
  return (
    <div className="w-[100%]">
      {isData ? (
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
                {data.map((invoice) => (
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
                                className="font-semibold text-red-500"
                                onClick={() =>
                                  alert(
                                    "Are you sure you want to delete this job"
                                  )
                                }
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
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default BrandDataTable;
