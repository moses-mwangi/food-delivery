"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Barlow_Semi_Condensed } from "next/font/google";
import { useRouter } from "next/navigation";
import { useOneRestaurants } from "@/services/useOrder";
import { useOrder } from "../context/OrderContext";
import { useUser } from "@clerk/nextjs";

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
  const { user } = useUser();

  return (
    <div className="md:w-[80%] px-6 mx-auto">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7">
        {restaurants?.map((store) => (
          <div
            key={store.restName}
            className="flex cursor-pointer flex-col gap-2"
          >
            <div
              onClick={() => {
                setDeliveryPrice(store.deliveryPrice);
                router.push(`/${user ? store.restName : "sign-up"}`);
                router.refresh();
              }}
              className="rounded-xl h-[152px] w-72 md:w-[184px] md:h-[140px] mlg:w-72 flex overflow-hidden"
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
            <p className="leading-none text-black/85 text-[16px] font-[600]">
              {store.restName}
            </p>
            <p
              className={`${cn(
                serif.className
              )} leading-none text-gray-700 text-[14px]`}
            >
              {store.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
