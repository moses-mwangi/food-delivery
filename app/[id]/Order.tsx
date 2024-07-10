import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Divide, Trash } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useOrder } from "../context/OrderContext";

export default function Order() {
  const [quantity, setQuantity] = useState(1);
  const {
    orders,
    deliveryPrice,
    setOrders,
    singleFoodOrder,
    totalPrice,
    delOrder,
  } = useOrder();

  useEffect(() => {
    if (singleFoodOrder) {
      setOrders([...orders, singleFoodOrder]);
    }
  }, [singleFoodOrder]);

  return (
    <div>
      <Card className="p-6">
        <div className="flex justify-between text-gray-800 mb-5">
          <h1
            onClick={() => {
              console.log(orders);
            }}
            className=" font-semibold text-[18px]"
          >
            Your Order
          </h1>
          <span className=" font-semibold text-[18px]">
            {`$${totalPrice}`}.00
          </span>
        </div>
        {orders.map((order) => (
          <div
            key={order._id}
            className="flex justify-between items-center mb-3 text-[14px]"
          >
            <h1 className="">
              {order.name} {quantity !== 1 && <span>& {quantity}</span>}
            </h1>
            <div className="flex items-center gap-1">
              <Trash
                className="w-4 h-4 text-red-600"
                onClick={() => delOrder(order._id)}
              />
              <span className="">{`$${order.price}`}.00</span>
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between text-gray-800 py-4">
          <h1 className="">Delivery</h1>
          <span className="">{`$${deliveryPrice}`}.00</span>
        </div>
        <Separator />
        <Link
          className={`${
            orders.length === 0 ? " opacity-70" : "opacity-100"
          }   flex justify-center py-1 mt-3 bg-orange-500 rounded-[6px] text-[13px] text-gray-100 cursor-pointer`}
          href="/cart"
        >
          Proceed to Cart
        </Link>
      </Card>
    </div>
  );
}
