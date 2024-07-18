"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Barlow_Semi_Condensed } from "next/font/google";
import { useRouter } from "next/navigation";
import { useOneRestaurants } from "@/services/useOrder";
import { useOrder } from "../context/OrderContext";

const serif = Barlow_Semi_Condensed({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

export default function StoresSection() {
  const router = useRouter();
  const { restaurants } = useOneRestaurants();
  const { setDeliveryPrice } = useOrder();

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 pb-3">
        Explore some of our stores
      </h1>
      <p
        className={`${cn(
          serif.className
        )} leading-5 text-gray-700 text-[16px] mb-6`}
      >
        To check which restaurants are available in your area and available,
        simply enter your delivery address
        <br />. You will then be able
      </p>
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        {restaurants?.map((store) => (
          <div key={store.restName} className="flex flex-col gap-2">
            <div
              onClick={() => {
                setDeliveryPrice(store.deliveryPrice);
                router.push(`/${store.restName}`);
                router.refresh();
              }}
              className="rounded-xl h-40 w-80 flex overflow-hidden"
            >
              <Image
                src={store.image}
                alt="stores-logo"
                width={300}
                height={300}
                priority
                className="rounded-xl h-auto w-full hover:scale-110 transition-all duration-150"
              />
            </div>
            <p className="leading-none text-black/85 text-[18px] font-[600]">
              {store.restName}
            </p>
            <p
              className={`${cn(
                serif.className
              )} leading-none text-gray-700 text-[15px]`}
            >
              {store.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
