"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../componenets/navbarDetails/Navbar";
import { useQuery } from "react-query";
import axios from "axios";
import FooterSection from "../componenets/FooterSection";
import { Card } from "@/components/ui/card";
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
  data: {
    order: {
      _id: string;
      status: string;
      totalAmount: number;
      address: Address;
      items: Items[];
      date: Date;
      payment: string;
    }[];
  };
}

export default function SuccessfullPage() {
  const { user } = useUser();

  const { data } = useQuery<PlaceOrder>("orders", async () => {
    const response = await axios.get<PlaceOrder>(
      `http://127.0.0.1:3003/api/orders/place`
    );
    return response.data;
  });

  const currentOrders = data?.data.order?.filter(
    (el) => el.address.email === user?.emailAddresses[0].emailAddress
  );

  if (!currentOrders)
    return (
      <p className=" text-3xl font-semibold text-slate-700 ml-36 mt-20">
        No orders has been placed
      </p>
    );

  function getLatestOrder() {
    const sortedOrders = currentOrders?.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const latestDate =
      sortedOrders && sortedOrders.length > 0
        ? new Date(sortedOrders[0].date).getTime()
        : 0;

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
    <div className="flex flex-col justify-between h-svh">
      <Navbar />
      <div className="md:mt-32  md:w-[86%] mx-auto">
        {currentUserLastOrder?.map((el) => (
          <Card
            className="w-full pt-20 md:pt-0 py-8 px-6 mb-10 bg-slate-200/20 border-slate-200/20"
            key={el._id}
          >
            <div>
              <div className="flex pt-3 flex-col md:flex-row mt-8 md:mt-0 justify-between">
                <span className="text-2xl font-bold">
                  Order Status : {el.status}
                </span>
                <span className="text-2xl font-bold">
                  Expected by: {expectedDeliveryTime(el.date)}
                </span>
              </div>
              <Progress
                value={el.status === "Confirmed" ? 100 : 50}
                className="animate-pulse h-3 mt-3"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-7 mt-7">
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
                    className="w-full md:w-auto h-full rounded-md"
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
