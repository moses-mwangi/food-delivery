"use client";
import React from "react";
import { useOrder } from "../context/OrderContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "../componenets/Navbar";
import Image from "next/image";
import CartTotals from "./CartTotals";
import { RxCross2 } from "react-icons/rx";

export default function CartPage() {
  const { orders, delOrder } = useOrder();

  return (
    <div className="w-[76%] mx-auto mt-32">
      <Navbar />
      <div className="mt-10 mb-24">
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
                  <Image src={el.image} alt="food" width={30} height={30} />
                </TableCell>
                <TableCell>{el.name}</TableCell>
                <TableCell>${el.price}</TableCell>
                <TableCell>2</TableCell>
                <TableCell>${el.price * 2}</TableCell>
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
        <CartTotals />
      </div>
    </div>
  );
}
