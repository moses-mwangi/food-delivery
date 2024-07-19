import Link from "next/link";
import React from "react";

export default function CartNoOrder() {
  return (
    <div className="flex gap-3 justify-center mt-[40svh]">
      <div className="flex flex-col justify-center gap-4">
        <p className=" font-semibold text-2xl text-slate-600">
          Their is no order has being placed.kindly return back and place your
          order
        </p>
        <div className=" flex justify-center">
          <Link
            href="/"
            className="w-24 h-8 rounded-[12px] flex items-center justify-center font-normal bg-orange-500 text-slate-800 hover:bg-orange-600"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
