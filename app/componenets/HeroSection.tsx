import React from "react";
import header_img from "../../public/assets/header_img.png";
import Navbar from "./navbarDetails/Navbar";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Barlow_Semi_Condensed } from "next/font/google";

const serif = Barlow_Semi_Condensed({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

export default function HeroSection() {
  return (
    <div className="w-[80%] mx-auto mb-10">
      <Navbar />

      <div className="bg-header-img h-[420px] mt-32">
        <div className=" w-[60%] flex flex-col gap-4 pl-14 pt-32">
          <p
            className={`flex flex-col gap-5 leading-10 text-4xl text-slate-100 font-bold`}
          >
            <span>Order your</span>
            <span>favourite food here</span>
          </p>
          <p className={`${cn(serif.className)} text-slate-100 leading-5`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id,
            illo, quis tempore temporibus recusandae neque reprehenderit facilis
            minima minus quod, quisquam officia. Reiciendis officia et fuga
            fugit, placeat iure.
          </p>
          <Link href="/curuser">curuser</Link>
          <Card className="text-slate-600 w-32 flex justify-center  py-[10px] leading-5  rounded-full">
            <Link href="/" className={`${cn(serif.className)}`}>
              View Stores
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
