"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function CartPage() {
  const orders = [1, 2];

  return (
    <div className="w-[76%] mx-auto mt-32">
      <div
        className={`mx-auto z-50 py-7 fixed top-0 left-0 right-0 w-[83%] flex justify-between items-center`}
      >
        <Skeleton className=" w-20 h-6 bg-slate-300/50" />
        <div className="w-[40%] relative">
          <Skeleton className="rounded-3xl h-6 w-full  bg-slate-300/50" />
        </div>

        <div className="flex gap-8  items-center">
          <Skeleton className="w-14 h-6  bg-slate-300/50" />
          <Skeleton className="w-14 h-6  bg-slate-300/50" />
        </div>
      </div>

      <div className="mt-10 mb-24">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
              <TableHead>
                <Skeleton className="w-24 h-5 bg-slate-300/50" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((el) => (
              <TableRow key={el} className="text-[13px]">
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5 bg-slate-300/50" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="grid grid-cols-2 gap-24 mt-16">
          <div className="">
            <div className="text-xl font-semibold mb-5">
              <Skeleton className="w-14 h-5 bg-slate-300/50" />
            </div>
            <div className="flex justify-between py-2 font-medium text-muted-foreground text-[14px]">
              <div>
                <Skeleton className="w-14 h-5 bg-slate-300/50" />
              </div>
              <div>
                <Skeleton className="w-14 h-5 bg-slate-300/50" />
              </div>
            </div>

            <div className="flex justify-between py-2 font-medium text-muted-foreground text-[14px]">
              <div>
                <Skeleton className="w-14 h-5 bg-slate-300/50" />
              </div>
              <div>
                <Skeleton className="w-12 h-4 bg-slate-300/50" />
              </div>
            </div>
            <Skeleton className=" w-full h-2 bg-slate-300/50" />
            <div className="flex justify-between py-3 text-[18px] text-gray-700 font-[500]">
              <div>
                <Skeleton className="w-14 h-6 bg-slate-300/50" />
              </div>
              <div>
                <Skeleton className="w-14 h-6 bg-slate-300/50" />
              </div>
            </div>
            <div className="flex justify-between">
              <Skeleton className="w-20 h-6 rounded-full bg-slate-300/50" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[14px]">
              <Skeleton className="flex h-5 bg-slate-300/50 w-full" />
            </div>
            <div className=" grid grid-cols-[6fr_1fr] relative">
              <Skeleton className="flex h-8 w-full  bg-slate-300/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
