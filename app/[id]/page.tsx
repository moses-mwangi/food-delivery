"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import kfc from "../../public/images/kfcc.png";
import bg from "../../public/assets/header_img.png";
import { Card } from "@/components/ui/card";
import Navbar from "../componenets/Navbar";
import { food_list } from "@/public/assets/assets";
import Order from "./Order";
import FoodList from "./FoodList";

export default function page() {
  return (
    <div className="w-[85%] mx-auto mt-32">
      <Navbar />
      <Card className=" h-96 rounded-xl mb-8">
        <Image
          src={bg}
          alt="restaurant name"
          className=" rounded-xl h-96 w-[100%]"
        />
      </Card>
      <div className=" w-[83%] mx-auto grid grid-cols-[2fr_1.5fr] gap-10">
        <div>
          <Card className="py-6 px-5 rounded-xl text-gray-800">
            <h1 className=" text-[26px] font-semibold">Artcafe Restaurant</h1>
            <span className="text-gray-700 text-[14px]">Kenya,Nairobi</span>
          </Card>
          <h1 className="py-6 text-xl font-semibold text-zinc-800">
            Food List Menu
          </h1>
          <FoodList />
        </div>
        <Order />
      </div>
    </div>
  );
}
