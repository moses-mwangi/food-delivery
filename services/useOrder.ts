import { FoodList, TypeRestaurant } from "@/app/types";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export function useOneRestaurants() {
  const { data: restaurants, error: restError } = useQuery<TypeRestaurant[]>(
    "restaurants",
    async () => {
      const response = await axios.get<TypeRestaurant[]>(`/api/restaurants`);
      return response.data;
    }
  );

  const [orders, setOrders] = useState<FoodList[]>([]);
  const [singleFoodOrder, setSingleFoodOrder] = useState<FoodList>();
  const [deliveryPrice, setDeliveryPrice] = useState(23);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = Math.round(
    orders.reduce((acc, order) => acc + order.price, 0) + deliveryPrice!
  );
  const notification = orders.length;

  return {
    orders,
    setSingleFoodOrder,
    singleFoodOrder,
    setOrders,
    totalPrice,
    deliveryPrice,
    notification,
    restaurants,
    setDeliveryPrice,
    quantity,
    setQuantity,
  };
}
