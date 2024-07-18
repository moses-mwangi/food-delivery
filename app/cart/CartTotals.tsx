"use client";
import React, { useEffect, useState } from "react";
import { useOrder } from "../context/OrderContext";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DeliveryConfirmatory from "./DeliveryConfirmatory";
import { useRouter } from "next/navigation";
import { FoodList } from "../types";

export default function CartTotals() {
  const { orders, deliveryPrice, totalPrice, setOrders } = useOrder();
  const [initialOrders, setInitialOrders] = useState<FoodList[]>([]);
  const SubTotalPrice = orders.reduce((acc, order) => acc + order.price, 0);
  const router = useRouter();

  useEffect(() => {
    if (initialOrders.length === 0) {
      setInitialOrders(orders);
    }
  }, [orders]);

  function prevsPage() {
    setOrders(initialOrders);
  }

  return (
    <div className="grid grid-cols-2 gap-24 mt-16">
      <div className="">
        <h1 className="text-xl font-semibold mb-5">Cart Totals</h1>
        <span className="flex justify-between py-2 font-medium text-muted-foreground text-[14px]">
          <p>Subtotal</p>
          <p>£{SubTotalPrice}</p>
        </span>

        <span className="flex justify-between py-2 font-medium text-muted-foreground text-[14px]">
          <p>Delivery Fee</p>
          <p>£{deliveryPrice}</p>
        </span>
        <Separator />
        <span className="flex justify-between py-3 text-[18px] text-gray-700 font-[500]">
          <p>Total</p>
          <p>£{totalPrice}</p>
        </span>
        <div className="flex justify-between">
          <DeliveryConfirmatory />
          <Card
            className="py-[6px] px-4 mt-4 text-[13px] font-normal text-slate-200 bg-orange-500 rounded-sm cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            BACK
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[14px]">if you have a promo code,Enter it here</p>
        <div className=" grid grid-cols-[6fr_1fr] relative">
          <input
            placeholder="promo code"
            className="flex h-8 w-full rounded-md focus:outline-0 px-3 py-2 text-sm bg-slate-200   file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
          />
          <Button className="absolute h-8 top-0 right-1 rounded-sm w-36">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
