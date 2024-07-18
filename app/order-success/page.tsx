"use client";

import React, { useEffect } from "react";
import Navbar from "../componenets/navbarDetails/Navbar";
import { useQuery } from "react-query";
import axios from "axios";
import FooterSection from "../componenets/FooterSection";
// import { useUser } from "../context/UserContext";
import { Card } from "@/components/ui/card";
import Order from "../[id]/Order";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import bowl from "../../public/images/bowl.png";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@clerk/nextjs";

interface Address {
  _id: string;
  name: string;
  email: string;
  country: string;
  city: string;
  address: string;
}

interface Items {
  _id: string;
  type: string;
  image: string;
  description: string;
  rating: number;
  price: number;
}

interface PlaceOrder {
  _id: string;
  status: string;
  totalAmount: number;
  address: Address;
  items: Items[];
  date: Date;
  payment: string;
}

export default function SuccessfullPage() {
  const { user } = useUser();

  const { data, error } = useQuery<PlaceOrder[]>("orders", async () => {
    const response = await axios.get<PlaceOrder[]>(`/api/newOrders`);
    return response.data;
  });

  const currentOrders = data?.filter(
    (el) =>
      el.address.name === user?.fullName ||
      (el.address.name === user?.firstName &&
        el.address.email === user?.emailAddresses[0].emailAddress)
  );

  if (!currentOrders) return null;

  function getLatestOrder() {
    const sortedOrders = currentOrders?.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const latestDate = new Date(sortedOrders!.at(0)!.date).getTime();

    const recentOrders = sortedOrders?.filter(
      (order) => new Date(order.date).getTime() === latestDate
    );

    return recentOrders;
  }

  const currentUserLastOrder = getLatestOrder();

  const expectedDeliveryTime = (date: Date) => {
    const created = new Date(date);
    created.setMinutes(created.getMinutes() + 15);
    const hours = created.getHours();
    const minutes = created.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <div className="flex flex-col justify-between">
      <p
        onClick={() => {
          console.log();
        }}
      ></p>
      <Navbar />
      <div className=" mt-32 w-[86%] mx-auto">
        {currentUserLastOrder?.map((el) => (
          <Card
            className="w-full py-8 px-6 mb-10 bg-slate-200/20 border-slate-200/20"
            key={el._id}
          >
            <div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold">
                  Order Status : {el.status}
                </span>
                <span className="text-2xl font-bold">
                  Expected by: {expectedDeliveryTime(el.date)}
                </span>
              </div>
              <Progress value={6} className="animate-pulse h-3 mt-3" />
            </div>

            <div className="grid grid-cols-2 gap-7 mt-7">
              <div className="flex flex-col gap-5">
                <span className="flex flex-col gap-1">
                  <h1 className="text-[16px] font-medium">Delivering to:</h1>
                  <h1 className="text-stone-600 text-[13px]">
                    {el.address.name}
                  </h1>
                  <h1 className="text-stone-600 text-[13px] ">
                    {el.address.address}
                  </h1>
                </span>
                <div>
                  <h1 className="text-[16px] font-medium">Your Order</h1>
                  {el.items.map((cur) => (
                    <div key={cur._id}>
                      <p className="text-stone-600 text-[13px] flex items-center gap-1">
                        {cur.type} <RxCross2 className="w-3 h-3" /> 1
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />
                <span className="flex flex-col">
                  <p className="font-semibold">Total</p>
                  <p className="text-stone-600 text-[13px] ">
                    £{el.totalAmount}
                  </p>
                </span>
              </div>
              <div className="w-full">
                <Card className=" h-full w-full rounded-md">
                  <Image
                    src={bowl}
                    alt="restaurant"
                    width={500}
                    height={300}
                    className="w-auto h-full rounded-md"
                  />
                </Card>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <FooterSection />
    </div>
  );
}
