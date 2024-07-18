import { SetStateAction } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  photo?: string;
  city: string;
  address: string;
  country: string;
  _id: string;
}

export interface UserContextProps {
  users: User[] | undefined;
  current: User | undefined;
}

export interface FoodList {
  _id: string;
  description: string;
  price: number;
  image: string;
  type: string;
  rating: number;
  quantity: number;
}

export interface TypeRestaurant {
  _id: string;
  image: string;
  restName: string;
  location: string;
  deliveryPrice: number;
  food_lists: FoodList[];
}

export interface OrderContextType {
  orders: FoodList[];
  addOrder: (order: FoodList) => void;
  deliveryPrice: number;
  quantity: number;
  singleFoodOrder: FoodList | undefined;
  totalPrice: number;
  notification: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  setDeliveryPrice: React.Dispatch<SetStateAction<number>>;
  delOrder: (id: string) => void;
  setSingleFoodOrder: React.Dispatch<
    React.SetStateAction<FoodList | undefined>
  >;
  setOrders: React.Dispatch<React.SetStateAction<FoodList[]>>;
}
