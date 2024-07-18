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
    <div className="w-[85%] mx-auto mt-32">
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

      <Skeleton className=" rounded-xl h-96 w-full" />
    </div>
  );
}
