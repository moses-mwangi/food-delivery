import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div className=" bg-globalColor flex justify-between  md:py-5 py-2 md:px-14 items-center">
      <Link
        href="/"
        className="text-2xl md:text-3xl text-gray-100 font-semibold"
      >
        Tomato.
      </Link>
      <div className="flex gap-2 text-[14px] md:font-medium">
        <span className="text-gray-100 hover:text-gray-900 cursor-pointer md:py-[5px] py-[2px] md:px-6 px-2 hover:outline-1 hover:outline-double hover:outline-slate-50  rounded-md">
          Privacy Policy
        </span>
        <span className="text-gray-100 hover:text-gray-900 cursor-pointer md:py-[5px] py-[2px] md:px-6 px-2 hover:outline-1 hover:outline-double hover:outline-slate-50  rounded-md">
          Terms of service
        </span>
      </div>
    </div>
  );
}
