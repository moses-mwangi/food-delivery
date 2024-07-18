"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useOrder } from "../../context/OrderContext";
import UserSignPage from "./userSign";
import { useUser } from "@clerk/nextjs";
import SearchStore from "./SearchStore";

export default function Navbar() {
  const { notification } = useOrder();
  const { user } = useUser();

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
      <SearchStore />

      <div className="flex gap-8 items-center">
        <Link href={`${user ? "/cart" : "/sign-up"}`} className="relative">
          <ShoppingCart className="w-[26px] h-[26px] text-slate-600/85" />
          {notification !== 0 && (
            <div className="w-2 h-2 bg-orange-500 rounded-full absolute -top-2 -right-2" />
          )}
        </Link>
        <UserSignPage />
      </div>
    </div>
  );
}
