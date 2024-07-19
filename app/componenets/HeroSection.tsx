import React from "react";
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
    <div className="md:w-[80%] mx-auto mb-10">
      <Navbar />

      <div className="bg-header-img h-svh  md:h-[430px] md:mt-32">
        <div className="md:w-[60%] w-[90%] flex flex-col gap-4 pl-14 pt-32">
          <p
            className={`leading-10 text-3xl md:text-4xl text-slate-100 font-bold`}
          >
            <span>
              <span>Order your</span>
              <br />
              <span>favourite food here</span>
            </span>
          </p>
          <p className={`${cn(serif.className)} text-slate-100 leading-5`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non id,
            illo, quis tempore temporibus recusandae neque reprehenderit facilis
            minima minus quod, quisquam officia. Reiciendis officia et fuga
            fugit, placeat iure.
          </p>
          <Card className="text-slate-600 md:w-32 w-28 py-2 text-[15px] flex justify-center items-center  md:py-[10px] leading-5  rounded-full">
            <Link href="/" className={`${cn(serif.className)}`}>
              View Stores
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
