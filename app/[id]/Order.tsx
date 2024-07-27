import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import React, { useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const {
    orders,
    deliveryPrice,
    setOrders,
    singleFoodOrder,
    totalPrice,
    delOrder,
    quantity,
  } = useOrder();

  const duplicateFoodOrder = orders.includes(singleFoodOrder!);

  useEffect(() => {
    if (duplicateFoodOrder === false && singleFoodOrder) {
      setOrders([...orders, singleFoodOrder]);
    } else if (duplicateFoodOrder === true) {
      setOrders([...orders]);
    }
  }, [singleFoodOrder]);

  return (
    <div>
      <Card className="p-6">
        <div className="flex justify-between text-gray-800 mb-5">
          <h1 className=" font-semibold text-slate-700 text-[16px]">
            Your Order
          </h1>
          <span className=" font-semibold text-slate-700 text-[16px]">
            {`£${totalPrice}`}.00
          </span>
        </div>
        {orders.map((order) => (
          <div
            key={order._id}
            className="flex justify-between items-center mb-3 text-[14px]"
          >
            <h1 className=" text-[13px] text-slate-600 font-medium">
              {order.type}
            </h1>
            <div className="flex justify-between items-center w-[56px]">
              <Trash
                className="w-[14px] h-[14px] text-red-600 cursor-pointer"
                onClick={() => delOrder(order._id)}
              />
              <span className="font-medium text-[13px] text-slate-600">{`£${order.price}`}</span>
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between text-gray-800 py-4">
          <h1 className="text-slate-700 text-[14px] font-medium">Delivery</h1>
          <span className="text-slate-700 text-[14px] font-medium">
            {`£${deliveryPrice}`}.00
          </span>
        </div>
        <Separator />
        <Button
          className={`flex justify-center py-1 mt-3 w-full h-7  bg-orange-500 hover:bg-orange-600 rounded-[5px] text-[13px] text-gray-100 disabled:cursor-not-allowed cursor-pointer`}
          onClick={() => {
            router.push("/cart");
          }}
          disabled={orders.length === 0}
        >
          Proceed to Cart
        </Button>
      </Card>
    </div>
  );
}
