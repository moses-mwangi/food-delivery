"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { useOrder } from "../context/OrderContext";
import { FoodList } from "../types";
import { useOneRestaurants } from "@/services/useOrder";

interface Props {
  food_list: FoodList[];
}

export default function FoodListPage({ food_list }: Props) {
  const { setSingleFoodOrder } = useOrder();

  return (
    <div className="flex flex-col gap-6">
      {food_list?.map((el) => (
        <div
          onClick={() => {
            setSingleFoodOrder((set) => el);
          }}
          key={el._id}
        >
          <Card className="cursor-pointer rounded-l-[8px] grid md:grid-cols-[1fr_2.5fr] gap-2 items-center hover:scale-105 transition-all duration-150">
            <Image
              src={el.image}
              alt="food"
              width={200}
              height={200}
              className=" h-full w-full rounded-l-[8px] relative"
            />
            <div className="grid grid-cols-1 gap-2">
              <p className="text-stone-700 font-medium text-[15px]">
                {el.type}
              </p>
              <p className="text-stone-600 text-[12px]">{el.description}</p>
              <div className="flex items-center  justify-between pr-8">
                <span className="text-globalColor mr-3 text-[12px] font-semibold">
                  £{el.price}
                </span>
                <span className="flex gap-1">
                  <Star fill="#ea580c" className="text-globalColor w-3 h-3" />
                  <Star fill="#ea580c" className="text-globalColor w-3 h-3" />
                  <Star fill="#ea580c" className="text-globalColor w-3 h-3" />
                  <Star fill="#ea580c" className="text-globalColor w-3 h-3" />
                  <Star className="text-globalColor w-3 h-3" />
                </span>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
