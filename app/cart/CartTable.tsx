"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useOrder } from "../context/OrderContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function CartTable() {
  const { orders, delOrder } = useOrder();
  const { user } = useUser();

  return (
    <div>
      <h1 className="text-3xl md:hidden border-b-2 border-solid  mx-auto w-[60%] border-orange-500 font-semibold flex justify-center mb-7">
        Your Orders
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>items</TableHead>
            <TableHead>titles</TableHead>
            <TableHead>price</TableHead>
            <TableHead>quntity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((el) => (
            <TableRow key={el._id} className="text-[13px]">
              <TableCell>
                <Image
                  className="w-10 h-auto"
                  src={el.image}
                  alt="food"
                  width={30}
                  height={30}
                />
              </TableCell>
              <TableCell>{el.type}</TableCell>
              <TableCell>${el.price}</TableCell>
              <TableCell>1</TableCell>
              <TableCell>${el.price * 1}</TableCell>
              <TableCell
                className="cursor-pointer"
                onClick={() => delOrder(el._id)}
              >
                <RxCross2 />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
