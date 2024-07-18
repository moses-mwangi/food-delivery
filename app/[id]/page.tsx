"use client";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import Navbar from "../componenets/navbarDetails/Navbar";
import Order from "./Order";
import { Skeleton } from "@/components/ui/skeleton";
import { useOneRestaurants } from "@/services/useOrder";
import { usePathname } from "next/navigation";
import FoodListPage from "./FoodList";
import FooterSection from "../componenets/FooterSection";

export default function page() {
  const { restaurants } = useOneRestaurants();
  const pathname = usePathname();

  const filteredRes = restaurants?.filter(
    (el) => el.restName === pathname.slice(1)
  );

  return (
    <div>
      <div className="w-[85%] mx-auto mt-32 mb-24">
        <Navbar />
        {filteredRes?.map((food_list) => (
          <div key={food_list._id}>
            <Card className=" h-96 rounded-xl mb-8">
              {food_list.image ? (
                <Image
                  src={food_list?.image!}
                  alt="restaurant name"
                  width={700}
                  height={700}
                  priority
                  className="rounded-xl h-full w-full"
                />
              ) : (
                <Skeleton className=" rounded-xl h-96 w-full" />
              )}
            </Card>
            <div className=" w-[83%] mx-auto grid grid-cols-[2fr_1.5fr] gap-10">
              <div>
                <Card className="py-6 px-5 rounded-xl text-gray-800">
                  <h1 className=" text-[24px] font-semibold">
                    {food_list?.restName}
                  </h1>
                  <span className="text-gray-700 text-[14px]">
                    Kenya,Nairobi
                  </span>
                </Card>
                <h1 className="py-6 text-[19px] font-semibold text-zinc-800">
                  Food List Menu
                </h1>
                <FoodListPage food_list={food_list.food_lists} />
              </div>
              <Order />
            </div>
          </div>
        ))}
      </div>
      <FooterSection />
    </div>
  );

  // return (
  //   <div className="w-[85%] mx-auto mt-32">
  //     <Navbar />
  //     <Card className=" h-96 rounded-xl mb-8">
  //       {food_list?.image ? (
  //         <Image
  //           src={food_list?.image!}
  //           alt="restaurant name"
  //           width={700}
  //           height={700}
  //           priority
  //           className=" rounded-xl h-96 w-full"
  //         />
  //       ) : (
  //         <Skeleton className=" rounded-xl h-96 w-full" />
  //       )}
  //     </Card>
  //     <div className=" w-[83%] mx-auto grid grid-cols-[2fr_1.5fr] gap-10">
  //       <div>
  //         <Card className="py-6 px-5 rounded-xl text-gray-800">
  //           <h1 className=" text-[26px] font-semibold">
  //             {food_list?.restName}
  //           </h1>
  //           <span className="text-gray-700 text-[14px]">Kenya,Nairobi</span>
  //         </Card>
  //         <h1 className="py-6 text-xl font-semibold text-zinc-800">
  //           Food List Menu
  //         </h1>
  //         <FoodList />
  //       </div>
  //       <Order />
  //     </div>
  //   </div>
  // );
}
