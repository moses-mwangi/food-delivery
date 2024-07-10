import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <div className=" bg-globalColor flex justify-between mt-28 py-5 px-14 items-center">
      <h1 className=" text-3xl text-gray-100 font-semibold">Tomato.</h1>
      <div className="flex gap-2 text-[15px] font-medium">
        <span className="text-gray-100 hover:text-gray-900 cursor-pointer py-[5px] px-6 hover:outline-1 hover:outline-double hover:outline-slate-50  rounded-md">
          Privacy Policy
        </span>
        <span className="text-gray-100 hover:text-gray-900 cursor-pointer py-[5px] px-6 hover:outline-1 hover:outline-double hover:outline-slate-50  rounded-md">
          Terms of service
        </span>
      </div>
    </div>
  );
}
