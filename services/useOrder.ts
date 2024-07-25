import { FoodList, TypeRestaurant, TypeRestaurants } from "@/app/types";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export function useOneRestaurants() {
  const { data: restaurant, error: restError } = useQuery<TypeRestaurants>(
    "restaurants",
    async () => {
      const response = await axios.get<TypeRestaurants>(
        `http://127.0.0.1:3003/api/restaurants`
      );
      return response.data;
    }
  );

  const restaurants = restaurant?.data.data;

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
