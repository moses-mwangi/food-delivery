import { StaticImageData } from "next/image";

export interface Order {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
}

export interface SingleOrder {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
  // quantity: number;
}

export interface Food_list {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
}
[];

export interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  deliveryPrice: number;
  singleFoodOrder: SingleOrder | undefined;
  food_lists: Food_list[];
  totalPrice: number;
  notification: number;
  delOrder: (id: string) => void;
  setSingleFoodOrder: React.Dispatch<
    React.SetStateAction<SingleOrder | undefined>
  >;
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}
