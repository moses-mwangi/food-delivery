import Image from "next/image";
import React from "react";
import chef from "../../public/images/image.png";
import delivery from "../../public/images/image copy.png";
import member from "../../public/images/image copy 2.png";
import handshake from "../../public/images/image copy 3.png";
import Link from "next/link";

export default function Partner() {
  return (
    <div className="flex flex-col gap-14 items-center mt-12 mb-28  md:px-28">
      <Image src={handshake} alt="lets be members" />
      <h1 className="md:text-4xl text-3xl font-semibold">
        Let’s do it together
      </h1>
      <div className="grid grid-cols-1 gap-14 md:gap-0 md:grid-cols-3 justify-between">
        <div className="flex flex-col justify-between gap-3 md:gap-5 items-center">
          <Image src={delivery} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Become a rider</h1>
          <p className="text-stone-600/95 text-[14px] md:text-[16px] px-3">
            Enjoy flexibility and competitive earnings by delivering orders
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-3 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-3 md:gap-5 items-center">
          <Image src={chef} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Become partner</h1>
          <p className="text-stone-600/95 text-[14px] md:text-[16px] px-3">
            Our technology and user base can help you boost sales and unlock new
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-7 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-3 md:gap-5 items-center">
          <Image src={member} alt="lets be members" />
          <h1 className="text-2xl font-semibold">Careers</h1>
          <p className="text-stone-600/95 text-[14px] md:text-[16px] px-3">
            If you’re ambitious, humble, and love working with others, then we
            want to hear from you!
          </p>
          <Link
            href="#"
            className="text-[18px font-medium text-gray-200 bg-teal-500 mt-7 px-4 py-3 rounded-full"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
