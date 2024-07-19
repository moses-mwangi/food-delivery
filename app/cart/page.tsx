"use client";
import React from "react";
import { useOrder } from "../context/OrderContext";
import Navbar from "../componenets/navbarDetails/Navbar";
import CartTotals from "./CartTotals";
import CartTable from "./CartTable";
import CartNoOrder from "./CartNoOrder";
import FooterSection from "../componenets/FooterSection";

export default function CartPage() {
  const { orders } = useOrder();

  if (orders.length === 0) return <CartNoOrder />;

  return (
    <div>
      <div className="md:w-[76%] px-3 md:px-0 mx-auto md:mt-32">
        <Navbar />
        <div className="mt-10 mb-24">
          <CartTable />
          <CartTotals />
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
