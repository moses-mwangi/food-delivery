"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { StaticImageData } from "next/image";
import { food_list } from "@/public/assets/assets";
import { Order, SingleOrder, Food_list, OrderContextType } from "../types";

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [singleFoodOrder, setSingleFoodOrder] = useState<SingleOrder>();
  const deliveryPrice = 25;
  const food_lists = food_list;
  const totalPrice =
    orders.reduce((acc, order) => acc + order.price, 0) + deliveryPrice;
  const notification = orders.length;

  function delOrder(id: string) {
    const filteredOrders = orders.filter((el) => el._id !== id);
    setOrders(filteredOrders);
  }

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        deliveryPrice,
        food_lists,
        singleFoodOrder,
        setSingleFoodOrder,
        setOrders,
        totalPrice,
        delOrder,
        notification,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
