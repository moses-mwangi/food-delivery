"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { FoodList, OrderContextType } from "../types";
import { useOneRestaurants } from "@/services/useOrder";

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const {
    orders,
    setOrders,
    singleFoodOrder,
    setSingleFoodOrder,
    setDeliveryPrice,
    totalPrice,
    deliveryPrice,
    quantity,
    setQuantity,
    notification,
    restaurants,
  } = useOneRestaurants();

  function delOrder(id: string) {
    const filteredOrders = orders.filter((el) => el._id !== id);
    setOrders(filteredOrders);
  }

  const addOrder = (order: FoodList) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        deliveryPrice,
        quantity,
        setQuantity,
        singleFoodOrder,
        setSingleFoodOrder,
        setDeliveryPrice,
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
