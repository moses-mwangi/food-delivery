import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import logo from "../../public/assets/food_27.png";
import kfc from "../../public/images/kfc.jpeg";
import pizzainn from "../../public/images/pizzainn.jpeg";
import chickeinn from "../../public/images/ckickenInn.png";
import artcafe from "../../public/images/artcafe.png";
import galitoes from "../../public/images/quick.png";
import bowl from "../../public/images/bowl.png";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Barlow_Semi_Condensed } from "next/font/google";

const serif = Barlow_Semi_Condensed({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

const stores = [
  { restName: "KFC", image: kfc, id: 1 },
  { restName: "Galitos", image: galitoes, id: 2 },
  { restName: "Pizza-Inn", image: pizzainn, id: 3 },
  { restName: "Chiken-Inn", image: chickeinn, id: 4 },
  { restName: "Artcaffe", image: artcafe, id: 5 },
  { restName: "Quickmatt", image: bowl, id: 6 },
];

interface Props {
  params: { id: string };
}

export default function StoresSection() {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 pb-3">
        Explore some of our stores
      </h1>
      <p
        className={`${cn(
          serif.className
        )} leading-5 text-gray-700 text-[16px] mb-6`}
      >
        To check which restaurants are available in your area and available,
        simply enter your delivery address
        <br />. You will then be able
      </p>
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        {stores.map((store) => (
          <div key={store.restName} className="flex flex-col gap-2">
            <Link
              href={store.restName}
              className="rounded-xl h-40 w-80 flex overflow-hidden"
            >
              <Image
                src={store.image}
                alt="stores-logo"
                className="rounded-xl hover:scale-110 transition-all duration-150"
              />
            </Link>
            <p className="leading-none text-black/85 text-[18px] font-[600]">
              {store.restName}
            </p>
            <p
              className={`${cn(
                serif.className
              )} leading-none text-gray-700 text-[15px]`}
            >
              Nairobi
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
