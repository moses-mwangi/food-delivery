"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useOrder } from "../../context/OrderContext";
import UserSignPage from "./userSign";

export default function Navbar() {
  const { notification } = useOrder();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // Scroll up
      setIsVisible(true);
    } else {
      // Scroll down
      setIsVisible(false);
    }

    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto z-50 py-7 fixed top-0 left-0 right-0 w-[83%] flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={130}
          height={130}
          priority
          className=" w-full h-auto"
        />
      </Link>
      <div className="w-[40%] relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          className="rounded-3xl pl-10 py-5 w-full text-[16px] text-gray-500 focus:outline-none focus:border-none"
          placeholder="Search stores..."
        />
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-7 h-7 text-slate-500" />
          {notification !== 0 && (
            <div className="w-2 h-2 bg-orange-500 rounded-full absolute -top-2 -right-2" />
          )}
        </Link>
        {/* <SignIn /> */}
        <UserSignPage />
      </div>
    </div>
  );
}
