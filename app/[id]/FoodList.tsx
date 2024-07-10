"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { useOrder } from "../context/OrderContext";

export default function FoodList() {
  const {
    food_lists: food_list,
    singleFoodOrder,
    setSingleFoodOrder,
  } = useOrder();

  return (
    <div className="flex flex-col gap-6">
      {food_list.map((el) => (
        <div
          onClick={() => {
            setSingleFoodOrder((set) => el);
            console.log(singleFoodOrder);
          }}
          key={el._id}
        >
          <Card className="cursor-pointer rounded-l-[8px] flex gap-2 items-center hover:scale-105 transition-all duration-150">
            <Image
              src={el.image}
              alt="food"
              className="w-36 h-[116px] rounded-l-[8px] relative"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[17px]"></h1>
              <p className="text-stone-600 text-[14px]">{el.description}</p>
              <div className="flex items-center  justify-between pr-8">
                <span className="text-globalColor mr-3 text-[16px] font-semibold">
                  ${el.price}
                </span>
                <span className="flex gap-1">
                  <Star fill="#ea580c" className="text-globalColor w-4 h-4" />
                  <Star fill="#ea580c" className="text-globalColor w-4 h-4" />
                  <Star fill="#ea580c" className="text-globalColor w-4 h-4" />
                  <Star fill="#ea580c" className="text-globalColor w-4 h-4" />
                  <Star className="text-globalColor w-4 h-4" />
                </span>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
