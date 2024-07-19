"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import SearchStore from "./SearchStore";
import { LucideList, ShoppingCart } from "lucide-react";
import UserSignPage from "./userSign";
import logo from "../../../public/assets/logo.png";
import { useUser } from "@clerk/nextjs";
import { useOrder } from "@/app/context/OrderContext";

export function NavbarSheet() {
  const { notification } = useOrder();
  const { user } = useUser();

  return (
    <div className=" fixed top-2 right-2 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <LucideList className=" w-8 h-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className=" flex justify-center mt-10">
              <SearchStore />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex gap-10 justify-between items-center mt-10">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={300}
                height={300}
                priority
                className=" w-full h-auto"
              />
            </Link>

            <Link href={`${user ? "/cart" : "/sign-up"}`} className="relative">
              <ShoppingCart className="w-[26px] h-[26px] text-slate-600/85" />
              {notification !== 0 && (
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute -top-2 -right-2" />
              )}
            </Link>
            <UserSignPage />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
